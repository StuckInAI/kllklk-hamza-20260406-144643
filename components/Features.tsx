import styles from './Features.module.css';

const features = [
  {
    icon: '⚡',
    title: 'Blazing Fast',
    description:
      'Optimized performance out of the box. Ship experiences that load in milliseconds, not seconds.',
    highlight: false,
  },
  {
    icon: '🛡️',
    title: 'Enterprise Security',
    description:
      'SOC 2 compliant, end-to-end encryption, and built-in compliance tools to keep your data safe.',
    highlight: false,
  },
  {
    icon: '🔌',
    title: 'Seamless Integrations',
    description:
      'Connect with 200+ tools you already use. Slack, GitHub, Stripe, and many more.',
    highlight: true,
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    description:
      'Deep insights into user behavior with live dashboards and customizable reports.',
    highlight: false,
  },
  {
    icon: '🤖',
    title: 'AI-Powered',
    description:
      'Leverage cutting-edge AI to automate workflows, generate content, and predict trends.',
    highlight: false,
  },
  {
    icon: '🌍',
    title: 'Global Scale',
    description:
      'Deploy to 30+ regions worldwide. Your users get the fastest possible response times.',
    highlight: false,
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.pill}>Features</div>
          <h2 className={styles.title}>
            Everything you need to
            <br />
            <span className={styles.accent}>scale your product</span>
          </h2>
          <p className={styles.subtitle}>
            Powerful features that grow with your team, from startup to enterprise.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={`${styles.card} ${f.highlight ? styles.highlighted : ''}`}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{f.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.description}</p>
              {f.highlight && (
                <span className={styles.highlightBadge}>Most Popular</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
