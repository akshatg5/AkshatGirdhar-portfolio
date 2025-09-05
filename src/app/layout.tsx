import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { Appbar } from "@/components/navbar";
import { Analytics } from '@vercel/analytics/next';

const source_code = Source_Code_Pro({
  subsets: ["latin"],
  weight : '400',
  variable : "--font-source-code-pro"
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Akshat Girdhar",
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    images: [
      {
        url: "/PortfolioOg.png",
        width: 1200,
        height: 630,
        alt: "Portfollio Preview",
      },
    ],
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    images: ["/PortfolioOg.png"],
    creator: "@AkshatGirdhar2",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background text-foreground antialiased max-w-2xl mx-auto py-8",source_code.className)}>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TooltipProvider delayDuration={0}>
            {children}
            <Appbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
