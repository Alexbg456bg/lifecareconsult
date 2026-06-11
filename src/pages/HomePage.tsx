import { Link } from 'react-router-dom'

import { contactDetails, featuredPests } from '../data/siteContent'

const trustBadges = ['Бърза реакция', 'За дом и бизнес', 'Безопасна обработка']

const reasons = [
  {
    number: '01',
    title: 'Бърза реакция',
    text: 'Организираме оглед и обработка в удобен за вас момент, без излишно чакане.',
  },
  {
    number: '02',
    title: 'Професионално оборудване',
    text: 'Използваме надеждни препарати, защитно оборудване и методи според конкретния обект.',
  },
  {
    number: '03',
    title: 'Обработка на домове, офиси и складове',
    text: 'Работим в жилища, входове, търговски помещения, обществени кухни, складове и външни площи.',
  },
  {
    number: '04',
    title: 'Решения срещу често срещани вредители',
    text: 'Предлагаме решения срещу хлебарки, дървеници, комари, мравки, мишки и плъхове.',
  },
]

const mainServices = [
  {
    title: 'Дезинфекция',
    text: 'Срещу вируси, бактерии и гъбички в домове, офиси, входове и работни помещения.',
  },
  {
    title: 'Дезинсекция',
    text: 'Срещу хлебарки, дървеници, бълхи, мравки, комари, мухи и кърлежи с професионални методи.',
  },
  {
    title: 'Дератизация',
    text: 'Срещу мишки и плъхове чрез стратегически поставени капани и примамки.',
  },
]

const workSteps = [
  ['01', 'Оглед и консултация', 'Разбираме проблема, обекта и зоните с най-висок риск.'],
  ['02', 'Избор на подходящ метод', 'Подбираме препарат, техника и план за безопасна обработка.'],
  ['03', 'Професионална обработка', 'Третираме критичните места прецизно и с внимание към средата.'],
  ['04', 'Превенция и насоки', 'Даваме ясни инструкции след обработката и съвети за превенция.'],
]

const pestDescriptions: Record<string, string> = {
  Хлебарки: 'Обработка на кухни, санитарни помещения, мазета и общи части.',
  Дървеници: 'Прецизно третиране на матраци, мебели, фуги и труднодостъпни места.',
  Комари: 'Сезонна обработка на дворове, зелени площи, тераси и входове.',
  Мравки: 'Контрол на маршрути, гнезда, первази и външни подходи към обекта.',
  'Мишки и плъхове': 'Дератизация с капани и примамки, поставени на стратегически места.',
}

const homePests = featuredPests.slice(0, 5).map((pest) => ({
  ...pest,
  text: pestDescriptions[pest.name] ?? pest.text,
}))

export function HomePage() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, '')}`

  return (
    <main className="page page-home">
      <section className="home-hero reveal">
        <div className="home-hero__copy">
          <p className="eyebrow">ДДД услуги за домове и бизнеси</p>
          <h1>Професионална ДДД защита за домове и бизнеси</h1>
          <p className="lead">
            Дезинфекция, дезинсекция и дератизация с бърза реакция, безопасни методи и реални резултати.
          </p>
          <div className="button-row">
            <Link className="button button-primary" to="/kontakti">
              Заяви обработка
            </Link>
            <Link className="button button-secondary" to="/uslugi">
              Виж услугите
            </Link>
          </div>
          <div className="home-trust-badges" aria-label="Предимства">
            {trustBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </div>

        <figure className="home-hero__visual reveal reveal-delay">
          <img src="/about-hero-ddd.jpeg" alt="ДДД специалист със защитно оборудване при обработка на обект" />
          <figcaption>
            <span>Професионална обработка</span>
            <strong>Безопасно. Прецизно. Навреме.</strong>
          </figcaption>
        </figure>
      </section>

      <section className="section reveal">
        <div className="section-heading">
          <p className="eyebrow">Защо да изберете нас?</p>
          <h2>Ясен подход, спокойна комуникация и надежден резултат.</h2>
        </div>
        <div className="home-reasons-grid">
          {reasons.map((reason) => (
            <article className="glass-card home-reason-card" key={reason.title}>
              <span>{reason.number}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <div className="section-heading">
          <p className="eyebrow">Основни услуги</p>
          <h2>Три основни решения.</h2>
        </div>
        <div className="home-services-grid">
          {mainServices.map((service, index) => (
            <article className="glass-card home-service-card" key={service.title}>
              <span className="home-service-card__mark">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <div className="section-heading">
          <p className="eyebrow">Как работим?</p>
          <h2>От първия разговор до превенцията след обработката.</h2>
        </div>
        <div className="home-process">
          {workSteps.map(([number, title, text]) => (
            <article className="home-process__step" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <div className="section-heading">
          <p className="eyebrow">Често срещани вредители</p>
          <h2>Модерен контрол без излишна драматичност.</h2>
        </div>
        <div className="home-pest-grid">
          {homePests.map((pest) => (
            <article className="home-pest-card" key={pest.name}>
              <img src={pest.image} alt={pest.alt} loading="lazy" />
              <div>
                <h3>{pest.name}</h3>
                <p>{pest.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta reveal">
        <div>
          <p className="eyebrow">Бърза консултация</p>
          <h2>Имате проблем с вредители?</h2>
          <p>Свържете се с нас за бърза консултация и професионална обработка.</p>
        </div>
        <div className="button-row">
          <a className="button button-primary" href={phoneHref}>
            Обади се сега
          </a>
          <Link className="button button-secondary" to="/kontakti">
            Изпрати запитване
          </Link>
        </div>
      </section>
    </main>
  )
}
