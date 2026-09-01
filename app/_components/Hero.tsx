import { INSTALL_URL } from "../_content";
import styles from "../_styles/marketing.module.css";
import { OccurrenceCard } from "./OccurrenceCard";

/*
 * The design carries three headline variants (heroLine: host | present | day).
 * "host" is the shipped default; the alternatives are kept here so the test
 * is a one-line swap:
 *   present — "You should be at your own event, not behind the counter."
 *   day     — "The logistics are handled. Go be a host."
 */
export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div>
        <p className={styles.heroBadge}>
          <span className={styles.dot} />
          Built for Shopify &middot; POS &middot; Offline check-in
        </p>
        <h1 className={styles.heroTitle}>Run the Event. Not the paperwork.</h1>
        <p className={styles.heroLede}>
          Book Events sells the tickets, holds the capacity, and gets everyone
          through the gate, so your attention stays on the evening you are
          actually putting on. Tell it your real limits &mdash; seats, staff,
          mats, kits, goats &mdash; and it holds the tightest one for you.
        </p>
        <div className={styles.heroActions}>
          <a href={INSTALL_URL} className={styles.btnPrimary}>
            Install on Shopify
          </a>
          <a href="#pricing" className={styles.btnGhost}>
            See pricing
          </a>
          <span className={styles.heroNote}>
            Free to install. You pay only when you sell.
          </span>
        </div>
      </div>

      <OccurrenceCard />
    </section>
  );
}
