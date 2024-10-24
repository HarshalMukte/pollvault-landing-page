import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function NewWidget() {
    return (
        <HelmetProvider>
              <div
                id="getWaitlistContainer"
                data-waitlist_id="21577"
                data-widget_type="WIDGET_3"
            ></div>

            <Helmet>
            <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"/>
            <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
            </Helmet>
        
        </HelmetProvider>
    );
}

