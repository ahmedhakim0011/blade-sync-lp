import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { site } from "@/lib/site";

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <>
      <Nav withLinks={false} />
      <main className="bg-void px-4 pb-24 pt-32 md:px-8 md:pt-40">
        <article className="legal mx-auto max-w-3xl">
          <h1 className="display text-4xl leading-tight md:text-6xl">{title}</h1>
          <p className="mt-4 text-sm text-dim">Last updated {site.legalUpdated}</p>
          <p className="mt-8 text-lg">{intro}</p>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
