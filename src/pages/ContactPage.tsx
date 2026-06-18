import { contactDetails } from '../data/siteContent'

export function ContactPage() {
  return (
    <main className="page">
      <section className="page-hero reveal">
        <p className="eyebrow">Контакти</p>
        <h1>Свържете се с нас.</h1>
        <p className="lead">
          Бърз достъп до телефон и имейл.
        </p>
      </section>

      <section className="section reveal">
        <div className="contact-layout">
          <article className="glass-card contact-panel contact-panel--accent">
            <span className="contact-panel__label">Професионални ДДД услуги</span>
            <h2>Контакт</h2>
            <p>
              За дезинфекция, дезинсекция и дератизация в жилищни и търговски обекти.
            </p>
          </article>

          <form className="glass-card contact-form">
            <label>
              Телефон
              <input type="text" value={contactDetails.phone} readOnly />
            </label>

            <label>
              Имейл
              <input type="email" value={contactDetails.email} readOnly />
            </label>

            <div className="contact-note">
              Показаните данни са статични и служат единствено за представяне в сайта.
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
