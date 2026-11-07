import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Russo_One } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// The game's own typefaces (both OFL), self-hosted by next/font.
const russo = Russo_One({ weight: "400", subsets: ["latin"], variable: "--font-russo", display: "swap" });
const chakra = Chakra_Petch({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-chakra", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: Throw, Hit, Rewind | Arcade Blade Game for Android`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.maker, url: site.makerUrl }],
  creator: site.maker,
  publisher: site.maker,
  keywords: ["blade throwing game", "knife throwing game", "arcade game", "one tap game", "rewind", "android game", site.name],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name}: Throw. Hit. Rewind.`,
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: `${site.name}: Throw. Hit. Rewind.`, description: site.description },
  icons: { icon: "/brand/symbol.svg", apple: "/brand/app-icon-512.png" },
  other: { "google-play-app": `app-id=${site.packageId}` },
};

export const viewport: Viewport = {
  themeColor: "#0b0724",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${russo.variable} ${chakra.variable}`}>
      <body className="grain min-h-[100dvh] overflow-x-clip">{children}</body>
    </html>
  );
}
