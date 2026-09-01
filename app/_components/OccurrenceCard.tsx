import styles from "../_styles/marketing.module.css";
import { Meter, type MeterTone } from "./Meter";

const POOLS: { name: string; fill: number; tone: MeterTone; value: string }[] =
  [
    { name: "Seats", fill: 85, tone: "ochre", value: "34 / 40" },
    { name: "Kitchen staff", fill: 50, tone: "field", value: "1 / 2" },
  ];

type Ticket = {
  name: string;
  consumes: string;
  price: string;
  emphasis?: "featured" | "muted";
};

const TICKETS: Ticket[] = [
  { name: "Adult", consumes: "1 seat", price: "$85" },
  { name: "Child", consumes: "1 seat", price: "$45" },
  {
    name: "Family of five",
    consumes: "5 seats",
    price: "$250",
    emphasis: "featured",
  },
  {
    name: "Private table",
    consumes: "8 seats, 1 staff",
    price: "$700",
    emphasis: "muted",
  },
];

export function OccurrenceCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <span className={styles.eyebrow}>Occurrence</span>
        <span className={styles.cardWhen}>Sat 12 Oct &middot; 18:00</span>
      </div>
      {/* Non-breaking hyphens keep the dish name on one line. */}
      <div className={styles.cardTitle}>Farm&#8209;to&#8209;Table Dinner</div>

      <span className={styles.cardLabel}>Resource pools</span>
      <div className={styles.pools}>
        {POOLS.map((pool) => (
          <div key={pool.name} className={styles.meterRow}>
            <span className={styles.meterName}>{pool.name}</span>
            <Meter fill={pool.fill} tone={pool.tone} />
            <span className={styles.meterValue}>{pool.value}</span>
          </div>
        ))}
      </div>

      <span className={styles.cardLabel}>Ticket types</span>
      <div className={styles.tickets}>
        {TICKETS.map((ticket) => (
          <div
            key={ticket.name}
            className={
              ticket.emphasis === "featured"
                ? styles.ticketFeatured
                : ticket.emphasis === "muted"
                  ? styles.ticketMuted
                  : styles.ticket
            }
          >
            <span
              className={
                ticket.emphasis === "featured"
                  ? styles.ticketNameFeatured
                  : styles.ticketName
              }
            >
              {ticket.name}
            </span>
            <span
              className={
                ticket.emphasis === "featured"
                  ? styles.ticketCostFeatured
                  : styles.ticketCost
              }
            >
              {ticket.consumes}
            </span>
            <span className={styles.ticketPrice}>{ticket.price}</span>
          </div>
        ))}
      </div>
      <p className={styles.cardNote}>
        Private table is unavailable: <strong>kitchen staff</strong> is the
        binding constraint, not seats. Your customers see that sentence, in your
        words.
      </p>
    </div>
  );
}
