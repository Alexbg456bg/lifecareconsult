import { Link } from 'react-router-dom'

import { contactDetails, servicePests } from '../data/siteContent'

export function ServicesPage() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, '')}`

  return (
    <main className="page">
      <section className="page-hero reveal">
        <p className="eyebrow">УСЛУГИ</p>
        <h1>Обработки срещу насекоми и гризачи.</h1>
        <p className="lead">
          Всеки вредител е различен. Всяко решение — също.
          <br />
          Работим прецизно, за да не се налага да се връщаме за едно и също.
        </p>
      </section>

      <section className="section reveal">
        <div className="pest-gallery">
          {servicePests.map((pest) => (
            <article className="pest-showcase" key={pest.name}>
              <div className="pest-showcase__image">
                <img src={pest.image} alt={pest.alt} loading="lazy" />
              </div>
              <div className="pest-showcase__copy">
                <span className="pest-showcase__label">{'label' in pest ? pest.label : 'ОБРАБОТКА И КОНТРОЛ'}</span>
                <h2>{pest.name}</h2>
                <p>{pest.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <div className="services-final-cta">
          <p className="services-final-cta__kicker">БЪРЗА РЕАКЦИЯ • ПРОФЕСИОНАЛНО ОБОРУДВАНЕ • ДОКАЗАНИ РЕЗУЛТАТИ</p>
          <h2>Проблемът няма да изчезне сам.</h2>
          <p className="services-final-cta__lead">
            Колкото по-рано се вземат мерки, толкова по-бързо, по-лесно и по-ефективно се решава проблемът.
          </p>
          <p>
            Независимо дали става дума за хлебарки, дървеници, мишки, плъхове, комари или други вредители, ние сме
            готови да помогнем. Свържете се с нас още днес за консултация и професионална обработка.
          </p>
          <div className="button-row">
            <a className="button button-primary" href={phoneHref}>
              Обади се сега
            </a>
            <Link className="button button-secondary" to="/kontakti">
              Изпрати запитване
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
