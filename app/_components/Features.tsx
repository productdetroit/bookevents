import styles from "../_styles/marketing.module.css";

const COLUMNS: { heading: string; items: string[] }[] = [
  {
    heading: "Selling",
    items: [
      "Multiple ticket types per event, priced independently",
      "Recurring and seasonal schedules with blackout dates",
      "Real-time sell-out on the storefront",
      "Events calendar as a theme app block",
      "Add-ons at booking time",
    ],
  },
  {
    heading: "Attendees",
    items: [
      "Details captured per attendee, not per order",
      "One ticket per person, not per receipt",
      "Add, edit, transfer and resend by hand",
      "Import and export the whole list",
      "Custom fields per event — ages, diets, experience",
    ],
  },
  {
    heading: "At the door",
    items: [
      "QR tickets by email and PDF",
      "Apple Wallet and Google Wallet passes",
      "Phone scanner with offline mode",
      "Double-scan prevention and reconciliation",
      "Shopify POS check-in and door sales",
    ],
  },
  {
    heading: "Your brand",
    items: [
      "Tickets and emails carry your name, not ours",
      "Confirmations and reminders you write yourself",
      "Built on theme app blocks, so themes can change",
      "Built for Shopify standards from day one",
    ],
  },
];

export function Features() {
  return (
    <section id="features" className={styles.section}>
      <p className={`${styles.eyebrow} ${styles.sectionHead}`}>
        Everything in every plan
      </p>
      <h2 className={styles.featuresTitle}>
        The unglamorous parts, done properly.
      </h2>
      <p className={styles.featuresLede}>
        Nothing is gated. Every feature below is on every tier, including the
        free one. Paying us lowers your rate; it does not raise your ceiling.
      </p>

      <div className={styles.featureGrid}>
        {COLUMNS.map((column) => (
          <div key={column.heading}>
            <h3 className={styles.featureHeading}>{column.heading}</h3>
            <ul className={styles.list}>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
