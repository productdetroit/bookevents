import styles from "../_styles/marketing.module.css";

const QUESTIONS: { q: string; a: string }[] = [
  {
    q: "Will this work with my theme?",
    a: "Yes. Everything on the storefront is a theme app block or app extension, so you place it from the theme editor. No code, no developer, and it survives a theme change.",
  },
  {
    q: "What happens if two people check out at once?",
    a: "The first to reach checkout takes a timed hold on the capacity they need. The second sees the truth immediately. Nobody gets a confirmation for a place that is gone.",
  },
  {
    q: "Do I need signal at the gate?",
    a: "No. Load the attendee list before you walk down, scan offline all evening, and the phone reconciles when it finds a bar again. Double scans are caught either way.",
  },
  {
    q: "Can I move an event when it rains?",
    a: "Cancel or move one date and resolve every attendee in one pass: notify them, offer other dates from the same event, issue store credit, or refund. Every action is logged.",
  },
  {
    q: "Is the free plan actually usable?",
    a: "Every feature, unlimited events, unlimited tickets, and no monthly fee. You pay 1.5% of what you collect and nothing else. We will not show you a setting in admin that your customers cannot actually buy against.",
  },
  {
    q: "What are you not good at?",
    a: "Arena and concert selling, conference agendas, equipment rental, and one-to-one appointments. If that is your business, another app in the category will serve you better.",
  },
];

export function Faq() {
  return (
    <section id="faq" className={styles.section}>
      <p className={`${styles.eyebrow} ${styles.sectionHead}`}>Questions</p>
      <div className={styles.faqGrid}>
        {QUESTIONS.map((item) => (
          <div key={item.q}>
            <h3 className={styles.faqQuestion}>{item.q}</h3>
            <p className={styles.faqAnswer}>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
