import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Nav({ withLinks = true }: { withLinks?: boolean }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-void/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 md:px-8" aria-label="Main">
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Image src="/brand/logo-horizontal.svg" alt={site.name} width={168} height={40} priority className="h-9 w-auto" />
        </Link>
        <div className="flex items-center gap-6 text-sm font-semibold text-dim">
          {withLinks && (
            <>
              <a href="#rewind" className="hidden transition-colors hover:text-ink md:inline">Rewind</a>
              <a href="#worlds" className="hidden transition-colors hover:text-ink md:inline">Worlds</a>
              <a href="#blades" className="hidden transition-colors hover:text-ink md:inline">Blades</a>
            </>
          )}
          <a
            href={site.playUrl}
            target="_blank"
            rel="noopener"
            className="rounded-full border border-cyan/40 px-4 py-2 text-cyan transition-colors hover:bg-cyan hover:text-void"
          >
            Get it on Google Play
          </a>
        </div>
      </nav>
    </header>
  );
}
