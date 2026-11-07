import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles your data: what stays on your phone, what Google receives for ads and purchases, and your choices.`,
  alternates: { canonical: "/privacy" },
};

const mail = <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>;

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains what data ${site.fullName} (“the game”) uses, why, and the choices you have. The game is made by ${site.maker} (“we”, “us”). The short version: we run no servers and have no accounts, so your game data stays on your phone. Google receives some data to show ads and process purchases.`}
    >
      <h2>Who is responsible</h2>
      <p>
        {site.maker} is the developer of the game and the data controller for the data the game itself handles. You can reach us at {mail} or through{" "}
        <a href={site.makerUrl}>{site.makerUrl.replace("https://", "")}</a>. Google is responsible for the data its services collect, as described below.
      </p>

      <h2>Data that stays on your phone</h2>
      <p>The game saves the following on your device only. We never receive it, and it is deleted when you uninstall the game or clear its data.</p>
      <ul>
        <li>Your progress: scores, best runs, gems, unlocked and equipped blades, daily challenge streak and settings.</li>
        <li>
          Your answer to the age screen, stored only as whether you are under 13. Your birth year is not stored.
        </li>
        <li>Records of purchases you made, so items are not granted twice and can be restored.</li>
        <li>
          An optional playtest log, only if you turn on <strong>Playtest mode</strong> in Settings. It records gameplay events (such as stage reached and
          revives used) with no personal identifiers. It never leaves your phone unless you copy and share it yourself, and you can clear it at any time.
        </li>
      </ul>

      <h2>Advertising (Google AdMob)</h2>
      <p>
        The game shows ads through Google AdMob, part of Google LLC. To deliver and measure ads and prevent fraud, the Google Mobile Ads SDK collects
        data from your device, including:
      </p>
      <ul>
        <li>Device identifiers, such as the Android advertising ID and app set ID.</li>
        <li>IP address and approximate location derived from it.</li>
        <li>Device and app information, such as model, operating system and language.</li>
        <li>Ad interactions, such as views and taps, and diagnostic information.</li>
      </ul>
      <p>
        <strong>The game only requests non-personalized ads.</strong> Non-personalized ads are chosen from context, such as the app and your general
        location, not from your browsing or app activity. Google still uses the data above for frequency capping, measurement and fraud prevention.
      </p>
      <p>
        If you tell the age screen you are under 13, the game marks every ad request as child-directed and limits ads to content suitable for general
        audiences. If you are in the European Economic Area, the UK or Switzerland, the game asks for your consent through Google&apos;s consent
        message before ads load, and you can change your choice later.
      </p>
      <p>
        You can reset or delete your advertising ID in your Android settings (Settings, then Privacy or Google, then Ads). Learn how Google uses
        data at <a href="https://policies.google.com/technologies/partner-sites">policies.google.com/technologies/partner-sites</a> and read
        Google&apos;s privacy policy at <a href="https://policies.google.com/privacy">policies.google.com/privacy</a>.
      </p>

      <h2>Purchases and subscriptions (Google Play)</h2>
      <p>
        In-app purchases and the VIP subscription are processed by Google Play. We never see your payment details. The game receives only what it
        needs to deliver what you bought: the product, the purchase status and an order reference. Google&apos;s handling of your payment is covered
        by the <a href="https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=privacynotice">Google Payments privacy notice</a>.
      </p>

      <h2>Leaderboards (Google Play Games, optional)</h2>
      <p>
        If you choose to sign in to Google Play Games, your scores are submitted to Google&apos;s leaderboards together with your Play Games profile.
        This only happens if you sign in, and you can sign out at any time in the Play Games app.
      </p>

      <h2>Crash and performance data</h2>
      <p>
        The game does not include its own analytics or crash reporting. Google Play may collect crash and performance data from Android devices under
        Google&apos;s own policies, and we may see that data in aggregated form in the Google Play Console.
      </p>

      <h2>Summary for app store disclosures</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Who receives it</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Device or other IDs (advertising ID)</td>
            <td>Google (AdMob)</td>
            <td>Advertising, measurement, fraud prevention</td>
          </tr>
          <tr>
            <td>Approximate location (from IP)</td>
            <td>Google (AdMob)</td>
            <td>Advertising, fraud prevention</td>
          </tr>
          <tr>
            <td>App interactions with ads, diagnostics</td>
            <td>Google (AdMob)</td>
            <td>Advertising, measurement</td>
          </tr>
          <tr>
            <td>Purchase history</td>
            <td>Google Play</td>
            <td>Processing and restoring purchases</td>
          </tr>
          <tr>
            <td>Game progress, settings, age answer</td>
            <td>Nobody. Stays on your device</td>
            <td>Running the game</td>
          </tr>
        </tbody>
      </table>
      <p>We do not sell your data. We do not share data with anyone other than the Google services named above.</p>

      <h2>Children</h2>
      <p>
        The game is designed for players aged 13 and over. It does not ask for names, email addresses or other contact details. If a player tells the
        age screen they are under 13, ads are child-directed and non-personalized as described above. If you believe a child has given us personal
        information, contact us at {mail} and we will help.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, including under the GDPR, UK GDPR and US state privacy laws such as the CCPA, you may have the right to access,
        correct or delete your personal data, to object to or restrict its use, and to withdraw consent. Because the game keeps your data on your
        device, you can delete it at any time by clearing the game&apos;s data or uninstalling it. For data held by Google, use{" "}
        <a href="https://myaccount.google.com/data-and-privacy">Google&apos;s privacy controls</a>. For anything else, email {mail} and we will reply
        within one month. You can also complain to your local data protection authority.
      </p>

      <h2>Retention and security</h2>
      <p>
        Data on your device stays until you clear it or uninstall the game. Data collected by Google is kept according to Google&apos;s retention
        policies. Communication between the game and Google services is encrypted in transit.
      </p>

      <h2>International transfers</h2>
      <p>
        Google may process data in countries other than yours, including the United States, using safeguards such as the EU Standard Contractual
        Clauses.
      </p>

      <h2>Changes</h2>
      <p>
        If we change how the game handles data, for example by adding analytics, we will update this page and the date at the top before the change
        ships.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or requests: {mail}. See also our <Link href="/terms">Terms of Use</Link>.
      </p>
    </LegalPage>
  );
}
