'use client';
import { useState } from 'react';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Starter',
    monthly: 0,
    annual: 0,
    description: 'Perfect for individuals and small projects.',
    features: [
      '1 workspace',
      'Up to 3 team members',
      '5GB storage',
      'Basic analytics',
      'Email support',
    ],
    missing: ['Advanced integrations', 'AI features', 'Custom domains', 'Priority support'],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthly: 49,
    annual: 39,
    description: 'For growing teams that need more power.',
    features: [
      'Unlimited workspaces',
      'Up to 25 team members',
      '100GB storage',
      'Advanced analytics',
      'All integrations',
      'AI features',
      'Custom domains',
      'Priority support',
    ],
    missing: [],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthly: 149,
    annual: 119,
    description: 'For large organizations with advanced needs.',
    features: [
      'Everything in Pro',
      'Unlimited members',
      '1TB storage',
      'Custom analytics',
      'Dedicated infrastructure',
      'SSO & SCIM',
      'SLA guarantee',
      'Dedicated support',
    ],
    missing: [],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.header}>
          <div className={styles.pill}>Pricing</div>
          <h2 className={styles.title}>
            Simple, transparent
            <span className={styles.accent}> pricing</span>
          </h2>
          <p className={styles.subtitle}>
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>

          <div className={styles.toggle}>
            <span className={!annual ? styles.active : ''}>Monthly</span>
            <button
              className={`${styles.toggleBtn} ${annual ? styles.toggleOn : ''}`}
              onClick={() => setAnnual(!annual)}
              aria-label="Toggle billing period"
            >
              <span className={styles.toggleThumb} />
            </button>
            <span className={annual ? styles.active : ''}>
              Annual
              <span className={styles.saveBadge}>Save 20%</span>
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div key={plan.name} className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}>
              {plan.highlighted && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.description}</p>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>
                    {annual ? plan.annual : plan.monthly}
                  </span>
                  <span className={styles.period}>/mo</span>
                </div>
                {annual && plan.monthly > 0 && (
                  <p className={styles.billedAnnually}>
                    Billed annually (${(annual ? plan.annual : plan.monthly) * 12}/yr)
                  </p>
                )}
              </div>

              <a
                href="#"
                className={`${styles.cta} ${plan.highlighted ? styles.ctaHighlighted : ''}`}
              >
                {plan.cta}
              </a>

              <ul className={styles.featureList}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className={`${styles.featureItem} ${styles.missing}`}>
                    <span className={styles.cross}>✕</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
