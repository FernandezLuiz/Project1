import { Inter } from "next/font/google"
import { AppToaster } from "@/components/ui/toast"
import GlobalNavbar from "@/components/GlobalNavbar"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import Script from "next/script"
import GoogleAnalyticsTracker from "@/components/GoogleAnalyticsTracker"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Mijn Portfolio - User Research",
  description: "Portfolio opdracht voor User Research op basis van data",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>

      <body className={`${inter.className} bg-[#fafafa] text-[#131313] antialiased selection:bg-indigo-100 selection:text-indigo-900`}>
  <GoogleAnalyticsTracker />
  <GlobalNavbar />

  {/* We halen de 'max-w-6xl' hier even weg voor een wijder, luxer gevoel zoals op die sites */}
  <main className="min-h-screen">
    <PageTransition>
      {children}
    </PageTransition>
  </main>

  <Footer />
  <AppToaster />
</body>
    </html>
  )
}