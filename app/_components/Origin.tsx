import styles from "../_styles/marketing.module.css";
import { PhotoFrame } from "./PhotoFrame";

export function Origin() {
  return (
    <section className={styles.section}>
      <div className={styles.origin}>
        <div>
          <p className={`${styles.eyebrow} ${styles.sectionHead}`}>
            Why we built this
          </p>
          <h2 className={styles.originTitle}>
            We found out at the door, like everyone else does.
          </h2>
          <div className={styles.originBody}>
            <p>
              Our design partner runs goat yoga, crafting classes, farm tours
              and farm-to-table dinners. They sold a family ticket for a dinner
              and Shopify took one seat off forty. Five people arrived. There
              were four chairs.
            </p>
            <p>
              That is not a bug in any one app. It is what happens when a ticket
              is modelled as a unit of product inventory. So we stopped
              modelling it that way: what you sell and what it consumes are two
              different things, and only the second one is capacity.
            </p>
            <p>
              The rest of the product is the boring consequence of taking that
              seriously &mdash; holds instead of decrements, pools that know
              about time, and a scanner that works where there is no signal.
            </p>
            <p className={styles.originSignoff}>
              Built in Detroit. We answer on weekends.
            </p>
          </div>
        </div>

        <div className={styles.originAside}>
          <PhotoFrame note="Photograph: the barn set for a farm-to-table dinner" />
          <p className={styles.originCaption}>
            Forty seats. Two kitchen staff. One evening.
          </p>
        </div>
      </div>
    </section>
  );
}
