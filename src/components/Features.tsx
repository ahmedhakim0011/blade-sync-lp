import Image from "next/image";
import { CalendarCheck, Prohibit, WifiSlash } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

/** Four claims, four cells. Every claim here is true of the shipped game. */
export function Features() {
  return (
    <section className="bg-void px-4 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto grid max-w-7xl gap-5 md:grid-cols-6 md:grid-rows-[auto_auto] md:gap-6">
        <article className="reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-indigo md:col-span-4 md:row-span-2">
          <div className="grid h-full md:grid-cols-[1fr_0.85fr]">
            <div className="flex flex-col justify-end p-7 md:p-10">
              <CalendarCheck size={32} weight="duotone" className="text-cyan" aria-hidden />
              <h3 className="display mt-5 text-3xl leading-tight md:text-4xl">A new challenge every day.</h3>
              <p className="mt-3 max-w-[38ch] text-base leading-relaxed text-dim">
                The same daily run for every player, with a twist like tiny cores or no rewinds. Keep the streak going for bigger rewards.
              </p>
            </div>
            <div className="relative min-h-[380px] md:min-h-0">
              <Image src="/img/shots/05.jpg" alt="The daily challenge screen with a streak tracker" fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover object-[50%_78%]" />
            </div>
          </div>
        </article>

        <article className="reveal relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10 md:col-span-2">
          <Image src="/img/shots/03.jpg" alt="An ice core covered in blades" fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover object-[50%_72%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <h3 className="display text-2xl leading-tight">Cores that fight back.</h3>
            <p className="mt-2 text-sm leading-relaxed text-dim">Shields, ice and fire. Bosses guard every sector.</p>
          </div>
        </article>

        <article className="reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(140deg,rgb(24_230_255/0.16),rgb(91_46_255/0.12)_55%,transparent)] p-7 md:col-span-2">
          <WifiSlash size={30} weight="duotone" className="text-cyan" aria-hidden />
          <h3 className="display mt-5 text-2xl leading-tight">Plays offline.</h3>
          <p className="mt-2 text-sm leading-relaxed text-dim">No account needed. Your progress stays on your phone.</p>
        </article>

        <article className="reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-indigo/70 p-7 md:col-span-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <Prohibit size={30} weight="duotone" className="mt-1 shrink-0 text-cyan" aria-hidden />
              <div>
                <h3 className="display text-2xl leading-tight">Never an ad mid-throw.</h3>
                <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-dim">
                  Ads only appear between runs. Videos are your choice, for a revive or bonus gems. The Ad-Free Pass removes the between-run ads.
                </p>
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
