import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms for playing ${site.name}, including in-app purchases and the VIP subscription.`,
  alternates: { canonical: "/terms" },
};

const mail = <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>;

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro={`These terms apply when you download or play ${site.fullName}, made by ${site.maker}. By playing, you agree to them. If you do not agree, please uninstall the game.`}
    >
      <h2>Playing the game</h2>
      <p>
        We give you a personal, non-transferable licence to play the game on devices you own or control, for your own entertainment. You may not copy,
        modify, resell or reverse engineer the game, or use cheats or tools that interfere with it. The game, its art, music and code belong to{" "}
        {site.maker}.
      </p>
      <p>The game is designed for players aged 13 and over.</p>

      <h2>Virtual items and gems</h2>
      <p>
        Gems, blades and other in-game items are a licence to use content inside the game. They have no cash value, cannot be exchanged for money and
        cannot be transferred. Because progress is saved on your device, items may be lost if you uninstall the game or clear its data, except
        purchases you can restore through Google Play.
      </p>

      <h2>Purchases</h2>
      <p>
        All purchases are made through Google Play and are subject to the{" "}
        <a href="https://play.google.com/about/play-terms/">Google Play Terms of Service</a>. Refunds are handled by Google under its refund policy.
        Gem packs are used up when added to your balance. Blade packs and the Ad-Free Pass are one-time purchases you can restore with{" "}
        <strong>Restore purchases</strong> in the shop.
      </p>

      <h2>VIP subscription</h2>
      <ul>
        <li>VIP is an auto-renewing weekly subscription. The price is shown in the game and in Google Play before you confirm.</li>
        <li>New subscribers may get a 3-day free trial. If you do not cancel before the trial ends, you will be charged for the first week.</li>
        <li>It renews automatically each week unless you cancel at least 24 hours before the current period ends.</li>
        <li>
          Cancel any time in Google Play under Payments and subscriptions, then Subscriptions. You keep VIP until the end of the period you paid for.
        </li>
        <li>VIP benefits are listed in the game before you subscribe.</li>
      </ul>

      <h2>Ads</h2>
      <p>
        The game is free and shows ads between runs. Watching an optional video gives the reward shown before you watch it. Rewards are only given
        when the video finishes. How ads use data is explained in our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Changes and availability</h2>
      <p>
        We may update the game, change or remove features and content, or stop offering it. We may update these terms; the date at the top shows the
        latest version, and continuing to play means you accept the changes.
      </p>

      <h2>No warranty</h2>
      <p>
        The game is provided “as is”. To the extent the law allows, we do not promise it will be error-free or always available, and we are not
        liable for indirect losses or loss of game progress. Nothing in these terms limits rights you have under consumer law that cannot be
        excluded.
      </p>

      <h2>Contact</h2>
      <p>Questions about these terms: {mail}.</p>
    </LegalPage>
  );
}
