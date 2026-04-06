import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at Nexflow',
    avatar: 'SC',
    color: '#6c63ff',
    quote:
      'Luminary completely transformed how our team ships features. We went from monthly releases to deploying multiple times a day without sacrificing quality.',
    rating: 5,
  },
  {
    name: 'Marcus Williams',
    role: 'Founder at BuildFast',
    avatar: 'MW',
    color: '#43e8d8',
    quote:
      'The analytics alone are worth the price. We had insights about our users in the first week that took us years to figure out before.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Product Lead at Orbit',
    avatar: 'PP',
    color: '#ff6584',
    quote:
      'I was skeptical at first, but after the trial I was completely sold. The integrations work perfectly and the support team is fantastic.',
    rating: 5,
  },
  {
    name: "James O'Brien",
    role: 'Engineering Manager',
    avatar: 'JO',
    color: '#febc2e',
    quote:
      'Setup took under 10 minutes. Our team adopted it immediately because it just makes sense. Highly recommend to any growing startup.',
    rating: 5,
  },
  {
    name: 'Lisa Tanaka',
    role: 'Head of Growth at Spark',
    avatar: 'LT',
    color: '#7c3aed',
    quote:
      'The AI-powered features saved us about 15 hours a week in manual work. It paid for itself in the first month.',
    rating: 5,
  },
  {
    name: 'David Kowalski',
    role: 'Lead Developer',
    avatar: 'DK',
    color: '#22d3ee',
    quote:
      'Performance is stellar and the developer experience is top-notch. The documentation is comprehensive and the API is a joy to work with.',
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.star}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.pill}>Testimonials</div>
          <h2 className={styles.title}>
            Loved by <span className={styles.accent}>thousands</span> of teams
          </h2>
          <p className={styles.subtitle}>
            Don&apos;t just take our word for it — hear from the teams building with Luminary.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <Stars count={t.rating} />
              <p className={styles.quote}>&quot;{t.quote}&quot;</p>
              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: t.color }}>
                  {t.avatar}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
