"use client";

import { useEffect, useState } from "react";

import styles from "../_styles/marketing.module.css";

const STORAGE_KEY = "be-consent";

type Choice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/*
 * Consent banner for GA4.
 *
 * GA4 sets cookies, so under GDPR and UK PECR it needs opt-in consent
 * before it may do so. GoogleAnalytics.tsx defaults every consent signal to
 * denied; this component is the only thing that ever grants one.
 *
 * The choice lives in localStorage rather than a cookie — storing a cookie
 * to record that someone declined cookies is a bad look, and localStorage
 * is exempt as strictly-necessary here since it holds only the preference.
 *
 * Shown to every visitor rather than only in the EU: geo-gating would mean
 * reading request headers, which forces the page out of static rendering.
 * Not worth it for one bar.
 */
function updateConsent(choice: Choice) {
  /*
   * Call gtag rather than pushing onto dataLayer by hand. The inline
   * snippet declares `function gtag()` at the top level of a classic
   * script, so it is a global — and it pushes the `arguments` object.
   * gtag.js treats that differently from a plain Array, so a
   * dataLayer.push(["consent", ...]) is silently ignored.
   *
   * If gtag is missing the tag never loaded (blocked, offline), and there
   * is nothing to grant consent to.
   */
  window.gtag?.("consent", "update", { analytics_storage: choice });
}

export function CookieConsent() {
  // Start hidden so the server-rendered HTML and first client paint agree;
  // the effect reveals it only when no choice is on record.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      // Private mode or blocked storage: show the banner, honour nothing.
    }
    if (stored !== "granted" && stored !== "denied") setVisible(true);
  }, []);

  function choose(choice: Choice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // If we cannot remember it, the banner returns next visit. Fine.
    }
    updateConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.consent} role="dialog" aria-label="Cookie consent">
      <p className={styles.consentText}>
        We use Google Analytics to understand which parts of this page are
        useful. It sets cookies. Decline and we count you anonymously instead.
      </p>
      <div className={styles.consentActions}>
        <button
          type="button"
          className={styles.consentDecline}
          onClick={() => choose("denied")}
        >
          Decline
        </button>
        <button
          type="button"
          className={styles.consentAccept}
          onClick={() => choose("granted")}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
