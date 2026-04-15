import type { Metadata } from "next";
import { Lunasima } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import localFont from "next/font/local";

const birzia = localFont({
  src: "../public/fonts/Birzia.woff",
  variable: "--font-birzia",
  display: "swap",
});

const lunasima = Lunasima({
  weight: ["400", "700"],
  variable: "--font-lunasima",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "לימודי הנהלת חשבונות וחשבות שכר אונליין - Next College",
  description: "קורס הנהלת חשבונות וחשבות שכר כולל תעודה רשמית מטעם לשכת רו”ח עם התחייבות להצלחה או החזר כספי מלא",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NZBGK8ZW');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${birzia.variable} ${lunasima.variable} antialiased overflow-x-hidden`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NZBGK8ZW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
