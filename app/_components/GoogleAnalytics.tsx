import Script from "next/script";

/*
 * GA4 with Consent Mode v2.
 *
 * Ordering is the whole game here. The consent *default* must execute
 * before gtag.js loads, or GA fires a fully-tracked hit before the visitor
 * has agreed to anything — which is the exact thing the banner exists to
 * prevent. beforeInteractive guarantees that ordering; afterInteractive on
 * the tag itself keeps it off the critical path.
 *
 * Everything defaults to denied. Under Consent Mode v2 GA still receives
 * cookieless pings in that state, so you get modelled traffic counts from
 * visitors who never accept, without setting a cookie for them.
 */
export function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          var stored = null;
          try { stored = localStorage.getItem('be-consent'); } catch (e) {}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: stored === 'granted' ? 'granted' : 'denied',
            wait_for_update: 500
          });
        `}
      </Script>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />

      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
