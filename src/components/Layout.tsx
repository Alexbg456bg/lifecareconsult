import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { contactDetails } from '../data/siteContent'

const navItems = [
  { to: '/', label: 'Начало' },
  { to: '/za-nas', label: 'За нас' },
  { to: '/uslugi', label: 'Услуги' },
  { to: '/kontakti', label: 'Контакти' },
]

export function Layout() {
  const [logoMissing, setLogoMissing] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="site-shell">
      <div className="site-glow site-glow--top" aria-hidden="true" />
      <div className="site-glow site-glow--bottom" aria-hidden="true" />

      <header className={`topbar${isScrolled ? ' topbar--scrolled' : ''}`}>
        <NavLink className="brand" to="/">
          <span className="brand-logo-wrap">
            {logoMissing ? (
              <span className="brand-logo-fallback">LC</span>
            ) : (
              <img
                className="brand-logo"
                src="/logo.png"
                alt="Професионални ДДД услуги лого"
                onError={() => setLogoMissing(true)}
              />
            )}
          </span>
          <span className="brand-copy">
            <strong>Професионални ДДД услуги</strong>
            <span>Дезинфекция • Дезинсекция • Дератизация</span>
          </span>
        </NavLink>

        <button
          type="button"
          className={`menu-toggle${menuOpen ? ' menu-toggle--open' : ''}`}
          aria-expanded={menuOpen}
          aria-label="Отвори меню"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="main-nav" aria-label="Главна навигация">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `main-nav__link${isActive ? ' main-nav__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a className="header-cta" href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}>
          Обади се
        </a>

        <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
          <nav className="mobile-menu__panel" aria-label="Мобилна навигация">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              className="mobile-menu__call"
              href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
              onClick={() => setMenuOpen(false)}
            >
              Обади се
            </a>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="footer">
        <section className="footer__column footer__column--company" aria-labelledby="footer-company">
          <h2 id="footer-company">Професионални ДДД услуги</h2>
          <p>Професионални решения за контрол на вредители и хигиенна обработка.</p>
          <div className="footer__tags" aria-label="Основни услуги">
            <span>Дезинфекция</span>
            <span>Дезинсекция</span>
            <span>Дератизация</span>
          </div>
        </section>

        <nav className="footer__column footer__nav" aria-labelledby="footer-navigation">
          <h2 id="footer-navigation">Навигация</h2>
          <div className="footer__links">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="footer__link">
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        <section className="footer__column footer__contacts" aria-labelledby="footer-contacts">
          <h2 id="footer-contacts">Контакти</h2>
          <a className="footer__contact" href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}>
            {contactDetails.phone}
          </a>
          <a className="footer__contact" href={`mailto:${contactDetails.email}`}>
            {contactDetails.email}
          </a>
        </section>
      </footer>

      <div className="mobile-action-bar">
        <a
          className="mobile-action mobile-action--primary"
          href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
        >
          Обади се
        </a>
        <a className="mobile-action" href={`mailto:${contactDetails.email}`}>
          Имейл
        </a>
      </div>
    </div>
  )
}
