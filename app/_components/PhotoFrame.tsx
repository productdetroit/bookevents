import Image from "next/image";

import styles from "../_styles/marketing.module.css";

/**
 * Stands in for the design's <image-slot>. Drop a photograph into
 * /public and pass its path as `src`; until then the frame renders the
 * art-direction note so nobody ships an empty rectangle by accident.
 */
export function PhotoFrame({
  src,
  alt,
  note,
}: {
  src?: string;
  alt?: string;
  note: string;
}) {
  if (!src) {
    return (
      <div className={styles.framePlaceholder} role="img" aria-label={note}>
        <span className={styles.framePlaceholderText}>{note}</span>
      </div>
    );
  }

  return (
    <div className={styles.frame}>
      <Image
        className={styles.frameImage}
        src={src}
        alt={alt ?? note}
        fill
        sizes="(max-width: 1040px) 100vw, 440px"
      />
    </div>
  );
}
