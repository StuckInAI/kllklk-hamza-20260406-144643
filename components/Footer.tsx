import styles from './Footer.module.css';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Guides', 'Support', 'Community'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <span className={styles.logoIcon}>✦</span>
              Luminary
            </a>
            <p className={styles.tagline}>
              Building the future of digital products, one team at a time.
            </p>
            <div className={styles.socials}>
              {['𝕏', 'in', 'gh', 'yt'].map((s) => (
                <a key={s} href="#" className={styles.social}>{s}</a>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className={styles.linkGroup}>
                <h4 className={styles.groupTitle}>{category}</h4>
                <ul className={styles.linkList}>
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className={styles.link}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Luminary, Inc. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with ♥ for builders everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
