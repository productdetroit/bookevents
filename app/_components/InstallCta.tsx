import { INSTALL_URL } from "../_content";
import styles from "../_styles/marketing.module.css";

export function InstallCta() {
  return (
    <section id="install" className={styles.section}>
      <div className={styles.cta}>
        <div>
          <h2 className={styles.ctaTitle}>Spend Saturday hosting.</h2>
          <p className={styles.ctaLede}>
            Install free, publish one event, and let it run itself for a
            weekend. If anything at the gate needs you to intervene, we want to
            hear about it.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <a href={INSTALL_URL} className={styles.ctaPrimary}>
            Install on Shopify
          </a>
          <a href="mailto:hello@bookevents.app" className={styles.ctaSecondary}>
            Talk to us first
          </a>
          <p className={styles.ctaNote}>
            Free to install. No monthly fee to start.
          </p>
        </div>
      </div>
    </section>
  );
}
