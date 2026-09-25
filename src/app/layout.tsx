import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Harsh Singh — Data Analyst in Gwalior, India. SQL, Python, Power BI and Excel. A/B testing, experiment analysis and AI automation with n8n. Open to Data Analyst and Business Analyst roles.";

// On Vercel this resolves to the live production address, so link previews use the right image URL.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Harsh Singh — Data Analyst",
  description,
  keywords: ["Harsh Singh", "Data Analyst", "Business Analyst", "SQL", "Python", "Power BI", "A/B Testing", "n8n", "Gwalior"],
  authors: [{ name: "Harsh Singh" }],
  openGraph: {
    title: "Harsh Singh — Data Analyst",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Singh — Data Analyst",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
