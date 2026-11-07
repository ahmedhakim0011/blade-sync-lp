import Image from "next/image";

// The 28 collectable blades, in shop order (lib/app/assets.dart in the game).
const BLADES: [string, string][] = [
  ["ion", "Ion Dagger"], ["laser", "Laser Dagger"], ["katana", "Katana Shard"], ["needle", "Plasma Needle"],
  ["frostbite", "Frostbite"], ["icicle", "Icicle"], ["shardfang", "Shardfang"], ["winterEdge", "Winter Edge"],
  ["emberline", "Emberline"], ["magmaCleaver", "Magma Cleaver"], ["phoenix", "Phoenix Plume"], ["cinderHook", "Cinder Hook"],
  ["aurora", "Aurora Fang"], ["reaper", "Void Reaper"], ["datablade", "Datablade"], ["overclock", "Overclock"],
  ["glitch", "Glitch"], ["railspike", "Railspike"], ["boneTusk", "Bone Tusk"], ["kris", "Serpent Kris"],
  ["jadeIdol", "Jade Idol"], ["runeblade", "Runeblade"], ["nebula", "Nebula"], ["comet", "Comet"],
  ["eclipse", "Eclipse"], ["starforge", "Starforge"], ["regalia", "Regalia"], ["obsidianKing", "Obsidian King"],
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 gap-4 pr-4 md:gap-6 md:pr-6" aria-hidden={hidden}>
      {BLADES.map(([id, name]) => (
        <li key={id} className="flex w-28 shrink-0 flex-col items-center md:w-32">
          <div className="relative h-40 w-full md:h-48">
            <Image src={`/img/blades/${id}.webp`} alt={hidden ? "" : name} fill sizes="128px" className="object-contain transition-transform duration-300 ease-snap hover:-translate-y-2" />
          </div>
          <span className="mt-3 text-center text-sm font-semibold text-dim">{name}</span>
        </li>
      ))}
    </ul>
  );
}

/** The one marquee on the page: the collection is about breadth, not any single blade. */
export function Arsenal() {
  return (
    <section id="blades" className="relative overflow-hidden bg-void-2 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="display text-4xl leading-[1.05] md:text-6xl">
          <span className="text-cyan">28 blades.</span> Earn every one.
        </h2>
        <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-dim md:text-lg">
          Win gems in every run and spend them in the forge. Six sets, from Forge Classics to Cosmic.
        </p>
      </div>
      <div className="marquee relative mt-14 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
