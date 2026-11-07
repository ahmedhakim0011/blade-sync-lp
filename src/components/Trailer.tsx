"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** The trailer opens up to full width as it scrolls in, and only plays while on screen. */
export function Trailer() {
  const root = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useGSAP(
    () => {
      const v = video.current!;
      // Playback follows visibility for everyone; only the size reveal depends on motion settings.
      ScrollTrigger.create({
        trigger: frame.current,
        start: "top 85%",
        end: "bottom 15%",
        onToggle: (self) => (self.isActive ? v.play().catch(() => {}) : v.pause()),
      });
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          frame.current,
          { clipPath: "inset(8% 12% 8% 12% round 40px)", scale: 0.96 },
          {
            clipPath: "inset(0% 0% 0% 0% round 28px)",
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: frame.current, start: "top 90%", end: "top 25%", scrub: 0.5 },
          },
        );
      });
    },
    { scope: root },
  );

  const toggleSound = () => {
    const v = video.current!;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  return (
    <section id="trailer" ref={root} className="relative bg-void px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="display max-w-[16ch] text-4xl leading-[1.05] md:text-6xl">
          Thirty seconds of <span className="text-cyan">one more try.</span>
        </h2>
        <div ref={frame} className="relative mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-indigo md:mt-14">
          <video
            ref={video}
            className="block aspect-video w-full object-cover"
            src="/media/trailer.mp4"
            poster="/media/trailer-poster.jpg"
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Blade Sync gameplay trailer"
          />
          <button
            type="button"
            onClick={toggleSound}
            className="absolute bottom-4 right-4 inline-flex h-11 items-center gap-2 rounded-full bg-void/75 px-4 text-sm font-semibold text-ink backdrop-blur transition-colors hover:bg-void md:bottom-6 md:right-6"
          >
            {muted ? <SpeakerSlash size={18} weight="bold" aria-hidden /> : <SpeakerHigh size={18} weight="bold" aria-hidden />}
            {muted ? "Sound on" : "Sound off"}
          </button>
        </div>
      </div>
    </section>
  );
}
