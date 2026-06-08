import { Link } from 'react-router-dom'
import { aboutHighlights } from '../data/siteContent'

export function AboutPage() {
  return (
    <main className="page">
      <section className="page-hero reveal">
        <p className="eyebrow">За нас</p>
        <h1>Сигурно решение за всеки обект.</h1>
        <p className="lead">
          Ясно представяне на услугите, обектите и начина на работа.
        </p>
      </section>

      <section className="section reveal">
        <div className="split-layout">
          <article className="glass-card statement-card statement-card--dark">
            <h2>Нашият подход</h2>
            <p>
              Работим с внимание към всеки обект и с фокус върху практични решения.
            </p>
          </article>

          <div className="stack-list">
            {aboutHighlights.map((item) => (
              <article className="glass-card stack-list__item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="cta-banner">
          <div>
            <p className="eyebrow">Услуги</p>
            <h2>Разгледайте услугите и вредителите.</h2>
          </div>
          <Link className="button button-primary" to="/uslugi">
            Към услугите
          </Link>
        </div>
      </section>
    </main>
  )
}
