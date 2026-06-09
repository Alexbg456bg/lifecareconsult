import { Link } from 'react-router-dom'

import { servicePests } from '../data/siteContent'

export function ServicesPage() {
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
                <span className="pest-showcase__label">ОБРАБОТКА И КОНТРОЛ</span>
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
            <p className="eyebrow">ДОПЪЛНИТЕЛЕН ОБХВАТ</p>
            <h2>Работим и с други вредители.</h2>
            <p>Освен изброените, обработваме и при: Бълхи · Кърлежи · Молци · Паяци · Мухи · Стършели · Оси</p>
            <Link className="button button-primary" to="/kontakti">
              Свържете се за консултация →
            </Link>
          </article>

          <article className="glass-card tags-card">
            <p className="eyebrow">ПРЕДИ ДА РЕШИТЕ</p>
            <h2>Имате съмнение? Питайте ни.</h2>
            <p>
              Не е нужно да знаете точно какво е проблемът. Достатъчно е да го опишете — ние ще го разпознаем и ще
              предложим правилното решение. Консултацията е безплатна.
            </p>
            <Link className="button button-primary" to="/kontakti">
              Обадете се сега →
            </Link>
          </article>
        </div>
      </section>
    </main>
  )
}
