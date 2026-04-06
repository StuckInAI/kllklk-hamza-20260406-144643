import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.card}>
          <div className={styles.bgPattern} />
          <div className={styles.content}>
            <h2 className={styles.title}>
              Ready to build something
              <span className={styles.accent}> amazing?</span>
            </h2>
            <p className={styles.subtitle}>
              Join 50,000+ teams already using Luminary to ship faster and smarter.
              Start your free trial today — no credit card required.
            </p>
            <div className={styles.actions}>
              <a href="#pricing" className={styles.primaryBtn}>
                Start for free
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#" className={styles.secondaryBtn}>
                Talk to sales
              </a>
            </div>
            <p className={styles.note}>14-day free trial · No credit card · Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
