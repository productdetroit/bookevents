import { INSTALL_URL, NAV_LINKS } from "../_content";
import styles from "../_styles/marketing.module.css";
import { Mark } from "./Mark";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a href="#top" className={styles.brand}>
          <Mark size={28} />
          <span className={styles.wordmark}>Book Events</span>
        </a>
        {/*
         * Four links do not earn a disclosure menu. Below 860px the nav
         * drops to its own row under the mark, so every section stays one
         * tap away and the install button keeps the top line.
         */}
        <nav className={styles.nav} aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href={INSTALL_URL} className={styles.navCta}>
          Install on Shopify
        </a>
      </div>
    </header>
  );
}
