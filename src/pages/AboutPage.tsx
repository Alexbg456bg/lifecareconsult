import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '100+', label: 'Обслужени обекта', number: 100, suffix: '+' },
  { value: '5+', label: 'Години опит', number: 5, suffix: '+' },
  { value: '98%', label: 'Доволни клиенти', number: 98, suffix: '%' },
  { value: '24/7', label: 'Съдействие', number: 24, suffix: '/7' },
]

const approachCards = [
  {
    icon: 'search',
    title: 'Диагностика преди действие',
    text: 'Преди да вземем препарат, оглеждаме. Установяваме вида и мащаба на проблема — защото грешната обработка само губи вашето време и пари.',
  },
  {
    icon: 'building',
    title: 'Жилища, офиси, складове, заведения',
    text: 'Работим с всякакъв тип обекти — от апартамент с хлебарки до склад с гризачи. Методът се избира спрямо конкретното място и ситуация.',
  },
  {
    icon: 'message',
    title: 'Казваме какво, кога и защо',
    text: 'Обясняваме какво ще правим, колко ще трае, какво да очаквате след обработката. Никакви изненади — само ясна комуникация от началото до края.',
  },
]

const reasons = [
  {
    icon: 'bolt',
    title: 'Бърза реакция',
    text: 'Отговаряме бързо и организираме обработката в удобно за вас време — без излишно чакане.',
  },
  {
    icon: 'badge',
    title: 'Професионално отношение',
    text: 'Работим с качествени препарати, сертифицирани за употреба, и спазваме всички изисквания за безопасност.',
  },
  {
    icon: 'target',
    title: 'Индивидуален подход',
    text: 'Всяка обработка се планира спрямо конкретния обект и проблем — без шаблонни решения.',
  },
  {
    icon: 'shield',
    title: 'Дългосрочни решения',
    text: 'Целта ни не е само да отстраним проблема, а да предотвратим повторната му поява.',
  },
]

const reviews = [
  {
    name: 'Мария К.',
    text: 'Много доволна от работата! Дойдоха навреме, обясниха всичко подробно и проблемът с хлебарките изчезна напълно. Препоръчвам!',
  },
  {
    name: 'Георги Т.',
    text: 'Обърнах се към тях за склад с гризачи. Свършиха работата бързо и коректно. Ще ги ползвам отново при нужда.',
  },
  {
    name: 'Стоянка В.',
    text: 'Приятен екип, точни и чисти. Обработиха офиса ни без да пречат на работния процес. Благодаря!',
  },
]

const galleryImages = [
  {
    src: '/about-hero.jpeg',
    alt: 'Екип на Life Care Consult в защитно облекло преди обработка на обект',
  },
  {
    src: '/about-team.jpeg',
    alt: 'Специалисти по дезинсекция с оборудване на открит терен',
  },
  {
    src: '/about-work.jpeg',
    alt: 'Специалист извършва обработка на външен обект със защитно оборудване',
  },
]

type IconName = 'search' | 'building' | 'message' | 'bolt' | 'badge' | 'target' | 'shield'

function AboutIcon({ name }: { name: IconName }) {
  const sharedProps: ComponentPropsWithoutRef<'svg'> = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  const paths: Record<IconName, ReactNode> = {
    search: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4 4" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5.5A2.5 2.5 0 0 1 6.5 3h8A2.5 2.5 0 0 1 17 5.5V21" />
        <path d="M8 7h1.5M12 7h1.5M8 11h1.5M12 11h1.5M8 15h1.5M12 15h1.5M3 21h18" />
      </>
    ),
    message: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v7A2.5 2.5 0 0 1 17.5 15H9l-5 4V5.5Z" />
        <path d="m9 9 2 2 4-4" />
      </>
    ),
    bolt: <path d="M13 2 4 13h7l-1 9 10-13h-7l1-7Z" />,
    badge: (
      <>
        <path d="M12 3 5 6v5c0 4.2 2.7 7.8 7 10 4.3-2.2 7-5.8 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.2 2.7 7.8 7 10 4.3-2.2 7-5.8 7-10V6l-7-3Z" />
        <path d="M12 8v5" />
        <path d="M12 16h.01" />
      </>
    ),
  }

  return <svg {...sharedProps}>{paths[name]}</svg>
}

function AnimatedStat({ number, suffix, label }: { number: number; suffix: string; label: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const statRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = statRef.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.45 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasAnimated) {
      return
    }

    let frameId = 0
    const duration = 1100
    const startedAt = performance.now()

    const tick = (currentTime: number) => {
      const progress = Math.min((currentTime - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setDisplayValue(Math.round(number * eased))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frameId)
  }, [hasAnimated, number])

  return (
    <article className="about-stat" ref={statRef}>
      <strong>
        {displayValue}
        {suffix}
      </strong>
      <span>{label}</span>
    </article>
  )
}

export function AboutPage() {
  return (
    <main className="page about-page">
      <header className="about-hero section-reveal">
        <div className="about-hero__copy">
          <p className="eyebrow">За нас</p>
          <h1>
            Проблемът изчезва. <span>Спокойствието остава.</span>
          </h1>
          <p className="lead">
            Не просто пръскаме и си тръгваме. Идваме, оглеждаме, обясняваме и работим докрай — докато обектът е чист и
            вие сте сигурни. Защото вредителите не чакат, а ние също не.
          </p>
        </div>
        <figure className="about-hero__image image-frame">
          <img src="/about-hero-ddd.jpeg" alt="Екип на ДДД компанията в защитно оборудване" />
        </figure>
      </header>

      <section className="about-story section-reveal" aria-labelledby="about-story-title">
        <figure className="about-story__image image-frame">
          <img src="/about-story-ddd.jpeg" alt="ДДД специалисти при обработка на обект" />
        </figure>
        <article className="about-story__copy">
          <p className="eyebrow">Кои сме ние</p>
          <h2 id="about-story-title">Работим като за свой дом.</h2>
          <p>
            Всеки обект е различен — друга сграда, друг проблем, друга история. Затова не носим готови решения. Носим
            опит, правилните препарати и костюми, и желание да свършим работата така, че да не се налага да се връщаме
            за едно и също.
          </p>
          <p>
            Виждате ни в защитно оборудване — не за показ, а защото работим сериозно. Същото внимание, с което пазим
            себе си, влагаме и в защитата на вашия обект, семейство или бизнес.
          </p>
          <blockquote>
            „Смятаме, че клиентът трябва да разбере какво правим и защо. Прозрачността е половината от доверието.“
          </blockquote>
        </article>
      </section>

      <section className="about-section section-reveal" aria-labelledby="about-approach-title">
        <div className="about-section__heading">
          <p className="eyebrow">Нашият подход</p>
          <h2 id="about-approach-title">Първо разбираме проблема. После действаме.</h2>
        </div>
        <div className="about-card-grid about-card-grid--three">
          {approachCards.map((card) => (
            <article className="about-card" key={card.title}>
              <span className="about-card__icon">
                <AboutIcon name={card.icon as IconName} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section-reveal" aria-labelledby="about-reasons-title">
        <div className="about-section__heading">
          <p className="eyebrow">Защо клиентите ни избират</p>
          <h2 id="about-reasons-title">Ясна работа, спокойна комуникация, траен резултат.</h2>
        </div>
        <div className="about-card-grid about-card-grid--four">
          {reasons.map((card) => (
            <article className="about-card about-card--compact" key={card.title}>
              <span className="about-card__icon">
                <AboutIcon name={card.icon as IconName} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section-reveal" aria-labelledby="about-gallery-title">
        <div className="about-section__heading">
          <p className="eyebrow">Галерия</p>
          <h2 id="about-gallery-title">Реална работа, реален екип, реални обекти.</h2>
        </div>
        <div className="about-gallery">
          {galleryImages.map((image) => (
            <figure className="about-gallery__item" key={image.src}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </section>

      <section className="about-stats section-reveal" aria-label="Статистика за Life Care Consult">
        {stats.map((stat) => (
          <AnimatedStat key={stat.label} number={stat.number} suffix={stat.suffix} label={stat.label} />
        ))}
      </section>

      <section className="about-section section-reveal" aria-labelledby="about-reviews-title">
        <div className="about-section__heading">
          <p className="eyebrow">Отзиви</p>
          <h2 id="about-reviews-title">Какво казват клиентите ни.</h2>
        </div>
        <div className="about-reviews">
          {reviews.map((review) => (
            <article className="about-review" key={review.name}>
              <div className="about-review__stars" aria-label="Оценка 5 от 5">
                ★★★★★
              </div>
              <p>{review.text}</p>
              <h3>{review.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="about-final-cta section-reveal" aria-labelledby="about-cta-title">
        <div>
          <p className="eyebrow">Готови сме да помогнем</p>
          <h2 id="about-cta-title">Нека намерим правилното решение за вашия обект.</h2>
        </div>
        <Link className="button button-primary" to="/kontakti">
          Свържете се с нас
        </Link>
      </section>
    </main>
  )
}
