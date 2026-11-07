import { Arsenal } from "@/components/Arsenal";
import { Features } from "@/components/Features";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { RewindScene } from "@/components/RewindScene";
import { Trailer } from "@/components/Trailer";
import { Worlds } from "@/components/Worlds";
import { site } from "@/lib/site";

// Structured data so search engines can show the game as an app result.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: site.fullName,
  alternateName: site.name,
  description: site.description,
  operatingSystem: "Android",
  applicationCategory: "GameApplication",
  genre: "Arcade",
  url: site.url,
  installUrl: site.playUrl,
  image: `${site.url}/brand/app-icon-512.png`,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: { "@type": "Organization", name: site.maker, url: site.makerUrl },
  publisher: { "@type": "Organization", name: site.maker, url: site.makerUrl },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        <Hero />
        <Trailer />
        <RewindScene />
        <Worlds />
        <Arsenal />
        <Features />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
