"use client";

/* eslint-disable @next/next/no-img-element -- images are created and swapped at runtime */
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/**
 * The game's core loop, playable in the hero: the core spins and changes direction, blades
 * fly up and stick, a blade that hits another bounces off, and a full core shatters into the
 * next one. Click or press Enter to throw. Sizes use container units so it scales cleanly.
 */
const CORES = ["cyber", "fire", "ice", "boss"] as const;
const BLADES = ["ion", "laser", "katana", "needle", "aurora", "phoenix", "frostbite", "datablade", "nebula", "runeblade", "comet", "emberline"];
const PER_CORE = 6; // player blades needed to shatter a core
const HIT_GAP = 13; // degrees: closer than this to a stuck blade is a clash

const bladeSrc = (id: string) => `/img/blades/${id}.webp`;
const angDist = (a: number, b: number) => Math.abs(((a - b + 540) % 360) - 180);

export function ThrowTarget() {
  const root = useRef<HTMLDivElement>(null);
  const spinner = useRef<HTMLDivElement>(null);
  const core = useRef<HTMLImageElement>(null);
  const thrown = useRef<HTMLImageElement>(null);
  const spark = useRef<HTMLDivElement>(null);
  const throwRef = useRef<() => void>(() => {});

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const stuck: { angle: number; el: HTMLDivElement }[] = [];

      const addBlade = (angle: number, id: string, obstacle = false) => {
        const arm = document.createElement("div");
        arm.className = "absolute left-1/2 top-1/2 h-0 w-0";
        const img = document.createElement("img");
        img.src = bladeSrc(id);
        img.alt = "";
        img.draggable = false;
        // Tip embedded just inside the rim, blade pointing outward.
        img.className = "absolute left-[-4.875cqw] top-[19cqw] h-[26cqw] w-[9.75cqw] max-w-none select-none";
        if (obstacle) img.style.filter = "brightness(0.55) saturate(0.6)";
        arm.appendChild(img);
        spinner.current!.appendChild(arm);
        gsap.set(arm, { rotation: angle });
        stuck.push({ angle, el: arm });
        return img;
      };

      const clearBlades = () => {
        stuck.forEach((s) => s.el.remove());
        stuck.length = 0;
      };

      // Static composition for reduced motion: a mid-run core, nothing moves.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        [20, 95, 160, 230, 300].forEach((a, i) => addBlade(a, BLADES[i]));
        addBlade(130, "rival", true);
        gsap.set(thrown.current, { yPercent: 46, opacity: 1 });
        return clearBlades;
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let rotation = 0;
        const speed = { v: 70 }; // degrees per second, tweened for direction changes
        let busy = false;
        let hits = 0;
        let coreIndex = 0;
        let bladeIndex = 0;

        const tick = (_t: number, dt: number) => {
          rotation += (speed.v * dt) / 1000;
          gsap.set(spinner.current, { rotation });
        };
        gsap.ticker.add(tick);

        // Rotation profiles like the game: steady, faster, reverse, stop-go.
        const steer = gsap.delayedCall(2.4, function retarget() {
          const options = [70, 110, -85, 25, 140, -120];
          gsap.to(speed, { v: gsap.utils.random(options), duration: gsap.utils.random(0.5, 1.2), ease: "sine.inOut" });
          steer.delay(gsap.utils.random(1.6, 3.2));
          steer.restart(true);
        });

        const seed = () => {
          addBlade(gsap.utils.random(0, 360), "rival", true);
          addBlade(gsap.utils.random(0, 360), "rival", true);
        };

        const loadNext = () => {
          const id = BLADES[bladeIndex++ % BLADES.length];
          thrown.current!.src = bladeSrc(id);
          gsap.fromTo(thrown.current, { yPercent: 130, xPercent: 0, rotation: 0, opacity: 0 }, { yPercent: 46, opacity: 1, duration: 0.22, ease: "power2.out", onComplete: () => void (busy = false) });
        };

        const burst = (color: string) => {
          gsap.fromTo(spark.current, { scale: 0.2, opacity: 1, background: `radial-gradient(circle, #fff 0%, ${color} 35%, transparent 70%)` }, { scale: 1.8, opacity: 0, duration: 0.35, ease: "power2.out" });
        };

        const shatter = () => {
          const tl = gsap.timeline({ onComplete: loadNext });
          stuck.forEach((s) => {
            tl.to(s.el.firstElementChild, { yPercent: 260, rotation: gsap.utils.random(-160, 160), opacity: 0, duration: 0.55, ease: "power2.out" }, 0);
          });
          tl.to(core.current, { scale: 1.25, opacity: 0, duration: 0.3, ease: "power2.in" }, 0)
            .add(() => {
              clearBlades();
              coreIndex = (coreIndex + 1) % CORES.length;
              core.current!.src = `/img/cores/${CORES[coreIndex]}.png`;
              hits = 0;
              seed();
            }, 0.6)
            .fromTo(core.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2.2)" }, 0.62);
        };

        const fire = () => {
          if (busy) return;
          busy = true;
          gsap.to(thrown.current, {
            yPercent: 0,
            duration: 0.12,
            ease: "power2.in",
            onComplete: () => {
              const local = (((-rotation) % 360) + 360) % 360;
              const clash = stuck.some((s) => angDist(s.angle, local) < HIT_GAP);
              if (clash) {
                burst("#ff3b5c");
                gsap.to(thrown.current, {
                  yPercent: 220,
                  xPercent: gsap.utils.random([-180, 180]),
                  rotation: gsap.utils.random([-540, 540]),
                  opacity: 0,
                  duration: 0.7,
                  ease: "power1.in",
                  onComplete: () => void gsap.delayedCall(0.25, loadNext),
                });
                return;
              }
              burst("#18e6ff");
              addBlade(local, thrown.current!.src.split("/").pop()!.replace(".webp", ""));
              gsap.set(thrown.current, { opacity: 0 });
              gsap.fromTo(core.current, { scale: 0.94 }, { scale: 1, duration: 0.3, ease: "back.out(3)" });
              hits++;
              if (hits >= PER_CORE) shatter();
              else loadNext();
            },
          });
        };
        throwRef.current = fire;

        // Auto-play waits for a clear gap, so the demo mostly shows clean hits.
        const auto = gsap.delayedCall(1.1, function next() {
          const local = (((-rotation) % 360) + 360) % 360;
          if (!busy && stuck.every((s) => angDist(s.angle, local) > HIT_GAP + 10)) fire();
          auto.delay(busy ? 0.25 : gsap.utils.random(0.45, 0.9));
          auto.restart(true);
        });

        seed();
        loadNext();

        return () => {
          gsap.ticker.remove(tick);
          throwRef.current = () => {};
          clearBlades();
        };
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      role="button"
      tabIndex={0}
      aria-label="Throw a blade"
      onPointerDown={() => throwRef.current()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          throwRef.current();
        }
      }}
      className="relative aspect-square w-full cursor-pointer select-none [container-type:size] [-webkit-tap-highlight-color:transparent]"
    >
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgb(91_46_255/0.55),transparent_68%)] blur-2xl" />
      <div ref={spinner} className="absolute inset-0 will-change-transform">
        <img
          ref={core}
          src="/img/cores/cyber.png"
          alt=""
          draggable={false}
          className="absolute left-[28cqw] top-[28cqw] h-[44cqw] w-[44cqw] drop-shadow-[0_0_40px_rgb(24_230_255/0.35)]"
        />
      </div>
      <div ref={spark} className="pointer-events-none absolute left-[45cqw] top-[64cqw] h-[10cqw] w-[10cqw] rounded-full opacity-0" />
      <img
        ref={thrown}
        src={bladeSrc(BLADES[0])}
        alt=""
        draggable={false}
        className="absolute left-[45.125cqw] top-[69cqw] h-[26cqw] w-[9.75cqw] opacity-0 will-change-transform"
      />
    </div>
  );
}
