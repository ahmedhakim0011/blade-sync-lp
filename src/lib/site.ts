/** Everything that changes per deployment lives here. */
export const site = {
  name: "Blade Sync",
  fullName: "Blade Sync : Echo Chamber",
  tagline: "Throw. Hit. Shatter.",
  description:
    "A one-tap blade-throwing arcade game with a twist: miss a throw and rewind time. Spinning cores, elemental bosses and 28 blades to collect.",
  /** Public URL of this site. Override with NEXT_PUBLIC_SITE_URL when deploying elsewhere. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bladesync.ahmedbuildapps.com",
  maker: "ahmedbuildapps",
  makerUrl: "https://ahmedbuildapps.com",
  packageId: "com.ahmedbuildapps.bladesync",
  playUrl: "https://play.google.com/store/apps/details?id=com.ahmedbuildapps.bladesync",
  /** NEEDS CONFIRMATION: the inbox that answers privacy requests. */
  supportEmail: "support@ahmedbuildapps.com",
  /** Bump when the policy text changes. */
  legalUpdated: "7 November 2026",
} as const;
