import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  featuredPests,
  heroMainSlides,
  heroSideSlides,
  serviceCards,
  trustPoints,
} from '../data/siteContent'

export function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % heroMainSlides.length)
    }, 15000)

    return () => window.clearInterval(intervalId)
  }, [])

  const mainSlide = heroMainSlides[slideIndex]
  const sideSlide = heroSideSlides[slideIndex % heroSideSlides.length]

  return (
    <main className="page page-home">
      <section className="hero hero-home">
        <div className="hero-copy reveal">
          <p className="eyebrow">ДДД услуги за дом, бизнес и общи части</p>
          <h1>Чиста и защитена среда.</h1>
          <p className="lead">
            Дезинфекция, дезинсекция и дератизация за жилища, офиси, складове и дворове.
          </p>
          <div className="button-row">
            <Link className="button button-primary" to="/uslugi">
              Виж услугите
            </Link>
            <Link className="button button-secondary" to="/kontakti">
              Контакти
            </Link>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay">
          <article className="hero-card hero-card--main floating-card">
            <img
              key={mainSlide.image}
              className="hero-card__image hero-card__image--active"
              src={mainSlide.image}
              alt={mainSlide.alt}
              loading="eager"
            />
            <div className="hero-card__overlay">
              <span>Акцент</span>
              <strong>{mainSlide.name}</strong>
            </div>
          </article>

          <article className="hero-card hero-card--side floating-card floating-card--alt">
            <img
              key={sideSlide.image}
              className="hero-card__image hero-card__image--active"
              src={sideSlide.image}
              alt={sideSlide.alt}
              loading="eager"
            />
            <div className="hero-card__overlay">
              <span>Контрол</span>
              <strong>{sideSlide.name}</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="trust-strip reveal">
        {trustPoints.map((point) => (
          <div className="trust-strip__item" key={point}>
            {point}
          </div>
        ))}
      </section>

      <section className="section reveal">
        <div className="section-heading">
          <p className="eyebrow">Основни услуги</p>
          <h2>Три основни решения.</h2>
        </div>
        <div className="service-grid">
          {serviceCards.map((service, index) => (
            <article
              className="glass-card service-card"
              key={service.title}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span className="service-card__index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <div className="section-heading">
          <p className="eyebrow">Често срещани вредители</p>
          <h2>Често обработвани вредители.</h2>
        </div>
        <div className="feature-band">
          {featuredPests.slice(0, 4).map((pest) => (
            <article className="image-tile" key={pest.name}>
              <img src={pest.image} alt={pest.alt} loading="lazy" />
              <div className="image-tile__copy">
                <h3>{pest.name}</h3>
                <p>{pest.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
