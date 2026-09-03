import styles from "../_styles/marketing.module.css";

const STAGES: { label: string; dot: string; items: string[] }[] = [
  {
    label: "Shipped",
    dot: "var(--field)",
    items: [
      "Resource pools with consumption weights",
      "Recurring schedules and blackout dates",
      "Per-attendee QR tickets by email and PDF",
      "Offline scanning and reconciliation",
      "Theme blocks and a storefront that needs no setup",
    ],
  },
  {
    label: "Next",
    dot: "var(--ochre)",
    items: [
      "Time-aware pools across overlapping sessions",
      "Weather cancellation and bulk reschedule in one action",
      "Wallet passes and POS check-in",
      "Waivers verified at the gate",
      "Deposits with scheduled balance capture",
      "Waitlist backfill on cancellation",
      "SMS notifications",
    ],
  },
  {
    label: "Later",
    dot: "var(--sand)",
    items: [
      "Reserved seating and visual seat maps",
      "Multi-location and multi-venue operators",
      "Staff scheduling and per-guide assignment",
      "Klaviyo and Mailchimp attendee sync",
      "Public API",
    ],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className={styles.section}>
      <p className={`${styles.eyebrow} ${styles.sectionHead}`}>Roadmap</p>
      <h2 className={styles.roadmapTitle}>What is here, and what is coming.</h2>

      <div className={styles.roadmapGrid}>
        {STAGES.map((stage) => (
          <div key={stage.label}>
            <h3 className={styles.stageHead}>
              <span
                className={styles.stageDot}
                style={{ background: stage.dot }}
              />
              <span className={styles.stageLabel}>{stage.label}</span>
            </h3>
            <ul className={styles.roadmapList}>
              {stage.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className={styles.roadmapNote}>
        Rentals, delivery date pickers, one-to-one appointments and dynamic
        pricing are deliberately not on this list. Other apps do those well.
      </p>
    </section>
  );
}
