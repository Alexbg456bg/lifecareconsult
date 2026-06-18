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
        <div>
          <strong>Професионални ДДД услуги</strong>
          <p>Професионални решения за контрол на вредители и хигиенна обработка.</p>
        </div>
        <div>
          <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}>{contactDetails.phone}</a>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        </div>
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
