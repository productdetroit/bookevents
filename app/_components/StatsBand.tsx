import styles from "../_styles/marketing.module.css";

const STATS = [
  {
    figure: "$0",
    body: "To install, with no monthly fee on the free tier. A quiet February costs you nothing at all.",
  },
  {
    figure: "Offline",
    body: "Scan at the gate with no signal. Conflicts reconcile when the phone finds a bar again.",
  },
  {
    figure: "Refunds",
    body: "Are never billed. We charge on captured revenue, net of refunds, excluding shipping and tax.",
  },
  {
    figure: "Zero",
    body: "Oversells attributable to the capacity engine. Any oversell is a P0 bug and gets treated like one.",
  },
];

export function StatsBand() {
  return (
    <section className={styles.band}>
      <div className={styles.bandInner}>
        {STATS.map((stat) => (
          <div key={stat.figure}>
            <div className={styles.statFigure}>{stat.figure}</div>
            <p className={styles.statBody}>{stat.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
