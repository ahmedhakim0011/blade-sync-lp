import Image from "next/image";
import { PlayButton } from "./PlayButton";
import { ThrowTarget } from "./ThrowTarget";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16">
      <Image src="/img/bg-space.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_70%_45%,rgb(91_46_255/0.35),transparent),linear-gradient(180deg,rgb(11_7_36/0.3),#0b0724_92%)]" />

      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-[1fr_1.05fr] md:gap-4 md:px-8 md:py-16">
        <div className="hero-copy">
          <h1 className="display text-6xl leading-[0.95] md:text-7xl lg:text-8xl">
            Throw. Hit.
            <br />
            <span className="text-cyan">Shatter.</span>
          </h1>
          <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-dim md:text-xl">
            One tap to throw. Miss, and rewind time to take it back. Spinning cores, elemental bosses, 28 blades.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <PlayButton size="lg" />
            <a href="#trailer" className="inline-flex h-16 items-center rounded-full border border-white/15 px-7 font-bold text-ink transition-colors hover:border-cyan/60 hover:text-cyan">
              Watch the trailer
            </a>
          </div>
        </div>
        <div className="hero-art mx-auto w-full max-w-[min(600px,58dvh)] md:max-w-[620px]">
          <ThrowTarget />
        </div>
      </div>
    </section>
  );
}
