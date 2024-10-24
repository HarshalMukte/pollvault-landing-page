import { Helmet, HelmetProvider } from "react-helmet-async";
import Script from "next/script";

export default function NewWidget({ color }) {
  return (
    <HelmetProvider>
      {/* Widget container */}

      {color === "secondary" ? (
        <div
          id="getWaitlistContainer"
          data-waitlist_id="21577"
          data-widget_type="WIDGET_3"
        />
      ) : (
        <div
          id="getWaitlistContainer"
          data-waitlist_id="21579"
          data-widget_type="WIDGET_3"
        />
      )}

      {/* Adding stylesheet through Helmet */}
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
      </Helmet>

      {/* Loading external script asynchronously using Next.js Script */}
      <Script
        src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
        strategy="lazyOnload" // Load the script lazily after the page has loaded
      />
    </HelmetProvider>
  );
}

