import { additionalPests, featuredPests, processSteps } from '../data/siteContent'

export function ServicesPage() {
  return (
    <main className="page">
      <section className="page-hero reveal">
        <p className="eyebrow">Услуги</p>
        <h1>Обработки срещу насекоми и гризачи.</h1>
        <p className="lead">
          Решения за жилища, офиси, складове, входове и дворове.
        </p>
      </section>

      <section className="section reveal">
        <div className="pest-gallery">
          {featuredPests.map((pest) => (
            <article className="pest-showcase" key={pest.name}>
              <div className="pest-showcase__image">
                <img src={pest.image} alt={pest.alt} loading="lazy" />
              </div>
              <div className="pest-showcase__copy">
                <span className="pest-showcase__label">Обработка и контрол</span>
                <h2>{pest.name}</h2>
                <p>{pest.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <div className="services-detail-layout">
          <article className="glass-card process-card">
            <p className="eyebrow">Процес</p>
            <h2>Как работим</h2>
            <ol>
              {processSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="glass-card tags-card">
            <p className="eyebrow">Допълнителен обхват</p>
            <h2>Други вредители</h2>
            <div className="tag-cloud">
              {additionalPests.map((pest) => (
                <span className="tag-cloud__item" key={pest}>
                  {pest}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
