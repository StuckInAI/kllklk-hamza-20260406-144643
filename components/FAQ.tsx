'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'How does the free trial work?',
    a: 'You get 14 days of full access to all Pro features, no credit card required. At the end of the trial, you can choose a plan or automatically continue with the free Starter plan.',
  },
  {
    q: 'Can I change my plan later?',
    a: 'Absolutely. You can upgrade, downgrade, or cancel at any time. When upgrading, you pay the prorated difference. When downgrading, credits are applied to future invoices.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. We use AES-256 encryption at rest and TLS 1.3 in transit. We are SOC 2 Type II compliant and GDPR ready. Your data is stored in secure, replicated data centers.',
  },
  {
    q: 'What integrations are supported?',
    a: 'We support 200+ integrations including Slack, GitHub, GitLab, Jira, Stripe, Salesforce, HubSpot, and more. We also have a REST API and webhooks for custom integrations.',
  },
  {
    q: 'Do you offer discounts for startups or nonprofits?',
    a: 'Yes! We offer 50% off for qualified startups and nonprofits. Please reach out to our sales team with proof of eligibility and we will set you up.',
  },
  {
    q: 'What kind of support do you provide?',
    a: 'All plans include email support. Pro plans get priority support with a 4-hour response SLA. Enterprise plans receive a dedicated success manager and 24/7 phone support.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.pill}>FAQ</div>
          <h2 className={styles.title}>
            Got <span className={styles.accent}>questions?</span>
          </h2>
          <p className={styles.subtitle}>
            Everything you need to know about Luminary. Can&apos;t find your answer?{' '}
            <a href="#" className={styles.link}>Chat with us</a>.
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.opened : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className={`${styles.icon} ${open === i ? styles.iconOpen : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className={styles.answer}>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
