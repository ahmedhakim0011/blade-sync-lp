"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Rewind } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEPS = [
  { verb: "Throw", text: "Tap. The blade flies straight up." },
  { verb: "Clash", text: "It hits a stuck blade. That run should be over." },
  { verb: "Rewind", text: "Spend a full Chrono gauge and time runs backwards." },
  { verb: "Land", text: "Wait for the gap and throw again." },
];

/**
 * Scroll tells the Chrono Rewind story: the scroll position is the clock, so scrolling back
 * literally rewinds the scene too. Pinned at the viewport top for the whole sequence.
 */
export function RewindScene() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(q(".landed"), { opacity: 1 });
        gsap.set(q(".thrown"), { opacity: 0 });
        gsap.set(q(".step"), { opacity: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const spin = q(".spin");
        const blade = q(".thrown");
        const steps = q(".step");
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: root.current, start: "top top", end: "+=2400", pin: true, scrub: 0.6, anticipatePin: 1 },
        });

        const lit = (i: number, at: number | string) =>
          tl.to(steps, { opacity: (j: number) => (j === i ? 1 : 0.3), duration: 0.15 }, at);

        gsap.set(steps, { opacity: 0.3 });
        gsap.set(blade, { yPercent: 46 });

        // Throw: the core turns until the stuck blade sits at the bottom, the blade flies to meet it.
        lit(0, 0);
        tl.to(spin, { rotation: 30, duration: 1 }, 0).to(blade, { yPercent: 0, duration: 0.25, ease: "power2.in" }, 0.75);

        // Clash
        lit(1, 1);
        tl.to(q(".flash"), { opacity: 1, scale: 1.6, duration: 0.08 }, 1)
          .to(q(".flash"), { opacity: 0, duration: 0.2 }, 1.08)
          .to(blade, { yPercent: 230, xPercent: 170, rotation: 430, opacity: 0.5, duration: 0.8, ease: "power1.out" }, 1);

        // Rewind: everything plays backwards, tinted.
        lit(2, 2);
        tl.to(q(".chrono"), { opacity: 1, duration: 0.2 }, 2)
          .to(blade, { yPercent: 46, xPercent: 0, rotation: 0, opacity: 1, duration: 0.9, ease: "power1.inOut" }, 2.1)
          .to(spin, { rotation: 0, duration: 0.9, ease: "power1.inOut" }, 2.1)
          .to(q(".chrono"), { opacity: 0, duration: 0.25 }, 3);

        // Land: wait for a gap, throw, stick.
        lit(3, 3.2);
        tl.to(spin, { rotation: 90, duration: 0.9 }, 3.2)
          .to(blade, { yPercent: 0, duration: 0.2, ease: "power2.in" }, 4.1)
          .set(blade, { opacity: 0 }, 4.3)
          .set(q(".landed"), { opacity: 1 }, 4.3)
          .fromTo(q(".core"), { scale: 0.94 }, { scale: 1, duration: 0.2, ease: "back.out(3)" }, 4.3)
          .to(spin, { rotation: 140, duration: 0.7 }, 4.3);
      });
    },
    { scope: root },
  );

  // Blade geometry matches the hero target: tip 19cqw below centre, 26cqw tall.
  const bladeCls = "absolute left-[-4.875cqw] top-[19cqw] h-[26cqw] w-[9.75cqw] max-w-none";
  return (
    <section id="rewind" ref={root} className="relative min-h-[100dvh] overflow-hidden bg-void-2">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_50%,rgb(91_46_255/0.25),transparent)]" />
      <div className="relative mx-auto grid min-h-[100dvh] max-w-7xl items-center gap-6 px-4 py-20 md:grid-cols-[1fr_1.1fr] md:gap-12 md:px-8">
        <div className="order-2 md:order-1">
          <h2 className="display text-4xl leading-[1.05] md:text-6xl">
            Missed?
            <br />
            <span className="text-cyan">Rewind time.</span>
          </h2>
          <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-dim md:text-lg">
            Every gem you hit charges the Chrono gauge. When a throw goes wrong, pull it back in slow motion and take it again.
          </p>
          <ol className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-1">
            {STEPS.map((s) => (
              <li key={s.verb} className="step">
                <span className="display text-xl text-ink md:text-2xl">{s.verb}</span>
                <span className="mt-1 block text-sm text-dim">{s.text}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[min(520px,52dvh)] md:order-2 md:max-w-[560px]">
          <div className="relative aspect-square w-full [container-type:size]">
            <div className="spin absolute inset-0">
              <img src="/img/cores/rune.png" alt="" className="core absolute left-[28cqw] top-[28cqw] h-[44cqw] w-[44cqw]" />
              {/* The blade we collide with, at the bottom once the core has turned 30 degrees. */}
              <div className="absolute left-1/2 top-1/2 h-0 w-0 -rotate-[30deg]">
                <img src="/img/blades/rival.webp" alt="" className={bladeCls} style={{ filter: "brightness(0.6) saturate(0.6)" }} />
              </div>
              <div className="absolute left-1/2 top-1/2 h-0 w-0 rotate-[150deg]">
                <img src="/img/blades/rival.webp" alt="" className={bladeCls} style={{ filter: "brightness(0.6) saturate(0.6)" }} />
              </div>
              <div className="landed absolute left-1/2 top-1/2 h-0 w-0 -rotate-[90deg] opacity-0">
                <img src="/img/blades/aurora.webp" alt="" className={bladeCls} />
              </div>
            </div>
            <div className="flash pointer-events-none absolute left-[44cqw] top-[63cqw] h-[12cqw] w-[12cqw] rounded-full bg-[radial-gradient(circle,#fff,#ff3b5c_40%,transparent_70%)] opacity-0" />
            <img
              src="/img/blades/aurora.webp"
              alt=""
              className="thrown absolute left-[45.125cqw] top-[69cqw] h-[26cqw] w-[9.75cqw]"
            />
            <div className="chrono pointer-events-none absolute -inset-[6%] flex items-start justify-end rounded-full opacity-0 shadow-[inset_0_0_80px_rgb(24_230_255/0.45)]">
              <Rewind size={44} weight="fill" className="m-[8%] text-cyan" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
