import type { CSSProperties } from "react";

import styles from "../_styles/marketing.module.css";

/**
 * A drawn-down capacity bar. `fill` is the consumed share, 0-100.
 * `tone` follows the brand's meaning: field = available, ochre = filling
 * up, terracotta = gone.
 */
export type MeterTone = "field" | "ochre" | "terracotta";

const TONE_CLASS: Record<MeterTone, string> = {
  field: styles.fillField,
  ochre: styles.fillOchre,
  terracotta: styles.fillTerracotta,
};

export function Meter({ fill, tone }: { fill: number; tone: MeterTone }) {
  const style = { "--fill": `${fill}%` } as CSSProperties;

  return (
    <span className={styles.track}>
      <span className={TONE_CLASS[tone]} style={style} />
    </span>
  );
}
