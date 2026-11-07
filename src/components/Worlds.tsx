"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Order and rules come from the game: four sector themes, two elements, and the boss.
const WORLDS = [
  { id: "forest", name: "Forest", line: "Sector one. Steady spins that teach you to read the gaps.", tint: "rgb(43 255 166 / 0.18)" },
  { id: "cyber", name: "Cyber", line: "Faster turns, and the core starts changing direction.", tint: "rgb(24 230 255 / 0.18)" },
  { id: "rune", name: "Rune", line: "Stop and go. Throw on the pause, not the spin.", tint: "rgb(91 46 255 / 0.24)" },
  { id: "space", name: "Space", line: "Everything you learned, at full speed.", tint: "rgb(91 46 255 / 0.16)" },
  { id: "ice", name: "Ice", line: "Every hit chills the core and slows it down.", tint: "rgb(24 230 255 / 0.22)" },
  { id: "fire", name: "Fire", line: "Every third hit blasts your nearby blades loose.", tint: "rgb(255 122 46 / 0.2)" },
  { id: "boss", name: "Boss", line: "The fifth stage of every sector. Shields orbit the core.", tint: "rgb(255 43 214 / 0.2)" },
];

/** Vertical scroll pans the row of cores sideways on larger screens; phones swipe instead. */
export function Worlds() {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const distance = () => track.current!.scrollWidth - window.innerWidth;
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: wrap.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
        tl.to(track.current, { x: () => -distance() }, 0).to(".world-core", { rotation: 300 }, 0);
      });
    },
    { scope: wrap },
  );

  return (
    <section id="worlds" ref={wrap} className="relative overflow-hidden bg-void">
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 py-20 [scrollbar-width:none] md:h-[100dvh] md:snap-none md:items-center md:gap-8 md:overflow-visible md:px-[8vw] md:py-0"
      >
        <div className="flex w-[78vw] shrink-0 snap-start flex-col justify-center md:w-[34vw]">
          <h2 className="display text-4xl leading-[1.05] md:text-6xl">
            Seven cores.
            <br />
            <span className="text-cyan">Seven rhythms.</span>
          </h2>
          <p className="mt-5 max-w-[38ch] text-base leading-relaxed text-dim md:text-lg">
            Each sector is four stages and a boss. The core decides how you have to throw.
          </p>
        </div>
        {WORLDS.map((w) => (
          <article
            key={w.id}
            className="relative flex w-[78vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-indigo/60 p-6 md:h-[68dvh] md:w-[30vw] md:p-8"
            style={{ backgroundImage: `radial-gradient(80% 60% at 50% 40%, ${w.tint}, transparent)` }}
          >
            <div className="relative mx-auto aspect-square w-[78%]">
              <Image src={`/img/cores/${w.id}.png`} alt={`${w.name} core`} fill sizes="(min-width: 768px) 24vw, 60vw" className="world-core object-contain drop-shadow-[0_20px_40px_rgb(11_7_36/0.6)]" />
            </div>
            <div className="mt-6">
              <h3 className="display text-3xl">{w.name}</h3>
              <p className="mt-2 text-base leading-relaxed text-dim">{w.line}</p>
            </div>
          </article>
        ))}
        <div className="w-px shrink-0 md:w-[8vw]" aria-hidden />
      </div>
    </section>
  );
}
