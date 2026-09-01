import { NAV_LINKS } from "../_content";
import styles from "../_styles/marketing.module.css";
import { Mark } from "./Mark";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerRow}>
        <Mark size={24} />
        <span className={styles.footerWordmark}>Book Events</span>
        <span className={styles.footerDomain}>bookevents.app</span>
        <nav className={styles.footerLinks} aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="mailto:hello@bookevents.app">Support</a>
        </nav>
      </div>
    </footer>
  );
}
