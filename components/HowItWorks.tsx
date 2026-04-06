import styles from './HowItWorks.module.css';

const steps = [
  {
    num: '01',
    title: 'Create your workspace',
    description:
      'Sign up in seconds and set up your team workspace. Invite members, set permissions, and customize your environment.',
    icon: '🏗️',
  },
  {
    num: '02',
    title: 'Connect your tools',
    description:
      'Integrate with your existing stack in one click. Import data, sync workflows, and get up and running instantly.',
    icon: '🔗',
  },
  {
    num: '03',
    title: 'Build and launch',
    description:
      'Use our powerful editor, templates, and AI assistant to build your product. Deploy with a single command.',
    icon: '🚀',
  },
  {
    num: '04',
    title: 'Analyze and grow',
    description:
      'Monitor performance with real-time analytics. Iterate quickly using data-driven insights and A/B testing.',
    icon: '📈',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.header}>
          <div className={styles.pill}>How It Works</div>
          <h2 className={styles.title}>
            Up and running in
            <span className={styles.accent}> minutes</span>
          </h2>
          <p className={styles.subtitle}>
            Four simple steps to transform how your team builds and ships products.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNum}>{step.num}</div>
                {i < steps.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
