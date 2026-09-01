import { INSTALL_URL } from "../_content";
import styles from "../_styles/marketing.module.css";

type Plan = {
  name: string;
  for: string;
  amount: string;
  rate: string;
  points: string[];
  cta: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Free",
    for: "For getting your first season online.",
    amount: "$0",
    rate: "plus 1.5% of booking revenue",
    points: [
      "Every feature, nothing withheld",
      "Unlimited events, occurrences and tickets",
      "No monthly fee, so an empty month bills nothing",
      "Refunded and cancelled tickets are not billed",
    ],
    cta: "Install free",
  },
  {
    name: "Standard",
    for: "For a calendar that runs all season.",
    amount: "$29",
    rate: "plus 0.75% of booking revenue",
    points: [
      "The same product, at half the rate",
      "Worth moving to above roughly $5,800 a month in bookings",
      "Refunded and cancelled tickets are not billed",
    ],
    cta: "Start on Standard",
    featured: true,
  },
  {
    name: "Unlimited",
    for: "For high volume, with nothing on top.",
    amount: "$249",
    rate: "no usage fee, whatever you sell",
    points: [
      "No percentage of booking revenue at all",
      "Worth moving to above roughly $29,000 a month in bookings",
      "Live weekend support, because that is when events happen",
    ],
    cta: "Start on Unlimited",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <p className={`${styles.eyebrow} ${styles.sectionHead}`}>Pricing</p>
      <div className={styles.pricingHead}>
        <h2 className={styles.pricingTitle}>
          Free to install. You pay when you sell.
        </h2>
        <p className={styles.pricingLede}>
          Same product on every tier. Start on Free with no monthly fee at all,
          and move to a lower rate when your volume makes it worth it. Seasonal
          operators pay nothing in the off months.
        </p>
      </div>

      <div className={styles.plans}>
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={plan.featured ? styles.planFeatured : styles.plan}
          >
            {plan.featured ? (
              <span className={styles.planFlag}>Most venues</span>
            ) : null}
            <h3 className={styles.planName}>{plan.name}</h3>
            <p className={styles.planFor}>{plan.for}</p>
            <p className={styles.planPrice}>
              <span className={styles.planAmount}>{plan.amount}</span>
              <span className={styles.planPer}>/ month</span>
            </p>
            <p className={styles.planRate}>{plan.rate}</p>
            <ul className={styles.planList}>
              {plan.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a
              href={INSTALL_URL}
              className={
                plan.featured ? styles.btnBlockPrimary : styles.btnBlockGhost
              }
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <p className={styles.finePrint}>
        Booking revenue means what you actually captured, net of refunds,
        excluding shipping and tax. There is no per-ticket fee on any tier, and
        no feature is withheld from any tier. Change tier whenever you like;
        billing follows Shopify&rsquo;s usage charges, so you approve the
        monthly cap yourself.
      </p>
    </section>
  );
}
