import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow} />
      <div className={styles.bgGlow2} />
      <div className={styles.grid} />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Now in public beta — Free to try
        </div>

        <h1 className={styles.title}>
          Build products that
          <span className={styles.gradient}> users love</span>
        </h1>

        <p className={styles.subtitle}>
          Luminary gives your team the tools to design, develop, and ship
          outstanding digital experiences — faster than ever before.
        </p>

        <div className={styles.actions}>
          <a href="#pricing" className={styles.primaryBtn}>
            Start for free
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#how-it-works" className={styles.secondaryBtn}>
            <span className={styles.playIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </span>
            Watch demo
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>50K+</span>
            <span className={styles.statLabel}>Active users</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>99.9%</span>
            <span className={styles.statLabel}>Uptime SLA</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>4.9★</span>
            <span className={styles.statLabel}>Average rating</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.heroVisual}`}>
        <div className={styles.dashboardCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardDots}>
              <span style={{background: '#ff5f57'}} />
              <span style={{background: '#febc2e'}} />
              <span style={{background: '#28c840'}} />
            </div>
            <span className={styles.cardTitle}>Dashboard Overview</span>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.metricsRow}>
              <div className={styles.metricBox}>
                <span className={styles.metricValue} style={{color: 'var(--color-accent)'}}>↑ 24%</span>
                <span className={styles.metricName}>Revenue</span>
              </div>
              <div className={styles.metricBox}>
                <span className={styles.metricValue} style={{color: 'var(--color-primary-light)'}}>12.4K</span>
                <span className={styles.metricName}>Users</span>
              </div>
              <div className={styles.metricBox}>
                <span className={styles.metricValue} style={{color: 'var(--color-secondary)'}}>98ms</span>
                <span className={styles.metricName}>Latency</span>
              </div>
            </div>
            <div className={styles.chartArea}>
              <div className={styles.chartBars}>
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <div
                    key={i}
                    className={styles.bar}
                    style={{
                      height: `${h}%`,
                      background: i === 10 ? 'var(--color-primary)' : 'var(--color-surface-2)',
                      animationDelay: `${i * 0.05}s`,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className={styles.activityList}>
              {[
                { text: 'New user signup', time: '2m ago', color: 'var(--color-accent)' },
                { text: 'Deployment successful', time: '5m ago', color: 'var(--color-primary)' },
                { text: 'Payment received', time: '12m ago', color: '#febc2e' },
              ].map((item) => (
                <div key={item.text} className={styles.activityItem}>
                  <span className={styles.activityDot} style={{background: item.color}} />
                  <span className={styles.activityText}>{item.text}</span>
                  <span className={styles.activityTime}>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.floatingBadge1}>
          <span>🚀</span> Deployed in 2s
        </div>
        <div className={styles.floatingBadge2}>
          <span>✅</span> 100% uptime
        </div>
      </div>
    </section>
  );
}
