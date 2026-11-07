import Image from "next/image";
import { PlayButton } from "./PlayButton";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden px-4 py-28 md:px-8 md:py-40">
      <Image src="/img/promo.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover object-center opacity-50" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#0b0724_25%,rgb(11_7_36/0.55)_65%,rgb(11_7_36/0.2))]" />
      <div className="mx-auto max-w-7xl">
        <h2 className="display max-w-[14ch] text-5xl leading-[1] md:text-7xl">
          Free to play. <span className="text-cyan">Hard to put down.</span>
        </h2>
        <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-dim">Download Blade Sync on Android and see how far your first run goes.</p>
        <div className="mt-10">
          <PlayButton size="lg" />
        </div>
      </div>
    </section>
  );
}
