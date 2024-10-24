import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                <meta
                        content="PollVault - Create and manage polls easily"
                        name="description"
                    />
                   <meta
                        content="PollVault"
                        property="og:title"
                    />
                    <meta
                        content="PollVault helps you create and manage polls effortlessly."
                        property="og:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/fb-og-image.png"
                        property="og:image"
                    />
                     <meta
                        property="og:url"
                        content="https://www.pollvault.ing/"
                    />
                    <meta
                        property="og:site_name"
                        content="PollVault"
                    />
                    <meta
                        content="PollVault"
                        property="twitter:title"
                    />
                    <meta
                        content="PollVault - Your go-to platform for poll management."
                        property="twitter:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/twitter-card.png"
                        property="twitter:image"
                    />
                    <meta property="og:type" content="website" />
                    <meta content="summary_large_image" name="twitter:card" />
                    <meta name="twitter:site" content="@PollVault" />
                    <meta name="twitter:creator" content="@PollVault" />
                    <meta property="fb:admins" content="1234567890" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="theme-color" content="#000000" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                        rel="stylesheet"
                    ></link>
                </Head>
                <body className="app">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
