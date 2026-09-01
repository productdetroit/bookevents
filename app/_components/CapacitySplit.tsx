import styles from "../_styles/marketing.module.css";
import { Meter, type MeterTone } from "./Meter";

const SESSIONS: {
  time: string;
  fill: number;
  tone: MeterTone;
  state: string;
  past?: boolean;
}[] = [
  { time: "09:00", fill: 60, tone: "field", state: "9 mats free" },
  { time: "10:30", fill: 88, tone: "ochre", state: "2 mats free" },
  {
    time: "12:00",
    fill: 100,
    tone: "terracotta",
    state: "Goats resting",
    past: true,
  },
];

const STATE_CLASS: Record<MeterTone, string> = {
  field: styles.stateField,
  ochre: styles.stateOchre,
  terracotta: styles.stateTerracotta,
};

export function CapacitySplit() {
  return (
    <section className={styles.section}>
      <div className={styles.split}>
        <div className={styles.splitLeft}>
          <p className={styles.splitLabel}>Goat yoga, Saturday</p>
          <div className={styles.sessions}>
            {SESSIONS.map((session) => (
              <div key={session.time} className={styles.meterRow}>
                <span
                  className={
                    session.past ? styles.sessionTimeMuted : styles.sessionTime
                  }
                >
                  {session.time}
                </span>
                <Meter fill={session.fill} tone={session.tone} />
                <span className={STATE_CLASS[session.tone]}>
                  {session.state}
                </span>
              </div>
            ))}
          </div>
          <p className={styles.splitNote}>
            The midday session is limited by the goats, who are already booked
            into the 10:30. Pools are time-aware, so one shared resource draws
            down across every session it touches.
          </p>
        </div>

        <div className={styles.splitRight}>
          <h2 className={styles.splitTitle}>One event, several limits.</h2>
          <p className={styles.splitBody}>
            A tour is limited by wagon seats and by one guide. A class is
            limited by kits. A yoga session is limited by mats and by animals
            shared with the session before it.
          </p>
          <p className={styles.splitBody}>
            Name each limit once. Tell us what each ticket consumes. We do the
            arithmetic under simultaneous checkout, with holds rather than
            hopeful inventory maths.
          </p>
        </div>
      </div>
    </section>
  );
}
