import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-void">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <Image src="/brand/logo-horizontal.svg" alt={site.name} width={168} height={40} className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-dim">
            A one-tap arcade game by{" "}
            <a href={site.makerUrl} className="text-ink underline underline-offset-4 hover:text-cyan">
              {site.maker}
            </a>
            . Free to play on Android.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <span className="font-bold text-ink">Game</span>
          <a href={site.playUrl} target="_blank" rel="noopener" className="text-dim hover:text-cyan">Google Play</a>
          <Link href="/#rewind" className="text-dim hover:text-cyan">How it plays</Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <span className="font-bold text-ink">Legal</span>
          <Link href="/privacy" className="text-dim hover:text-cyan">Privacy policy</Link>
          <Link href="/terms" className="text-dim hover:text-cyan">Terms of use</Link>
          <a href={`mailto:${site.supportEmail}`} className="text-dim hover:text-cyan">{site.supportEmail}</a>
        </div>
      </div>
      <p className="mx-auto max-w-7xl px-4 pb-10 text-xs text-dim/70 md:px-8">
        © 2026 {site.maker}. Google Play and the Google Play logo are trademarks of Google LLC.
      </p>
    </footer>
  );
}
