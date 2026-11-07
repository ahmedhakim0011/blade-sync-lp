import { GooglePlayLogo } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

/** The page's one install CTA. Same label everywhere. */
export function PlayButton({ size = "md" }: { size?: "md" | "lg" }) {
  const pad = size === "lg" ? "h-16 px-8 text-lg" : "h-14 px-7 text-base";
  return (
    <a
      href={site.playUrl}
      target="_blank"
      rel="noopener"
      className={`group inline-flex ${pad} items-center gap-3 whitespace-nowrap rounded-full bg-cyan font-bold text-void shadow-[0_10px_30px_-10px_rgb(24_230_255/0.6),inset_0_-3px_0_rgb(11_7_36/0.25)] transition-transform duration-200 ease-snap hover:-translate-y-0.5 active:translate-y-px active:scale-[0.98]`}
    >
      <GooglePlayLogo size={22} weight="fill" aria-hidden />
      Get it on Google Play
    </a>
  );
}
