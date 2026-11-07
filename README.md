# blade-sync-lp

Landing page, privacy policy and terms for **Blade Sync : Echo Chamber**, a one-tap blade-throwing arcade game for Android by [ahmedbuildapps](https://ahmedbuildapps.com).

Built with Next.js 16, Tailwind CSS 4.1 and GSAP (ScrollTrigger).

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Before deploying

- Set `NEXT_PUBLIC_SITE_URL` to the live address. It defaults to `https://bladesync.ahmedbuildapps.com` (see `src/lib/site.ts`).
- The privacy policy and terms are at `/privacy` and `/terms`. Put those URLs in the game's `config/release_android.json` as `PRIVACY_URL` and `TERMS_URL`.
- `public/app-ads.txt` holds the AdMob line. AdMob reads it from the root of the developer website listed on Google Play, so it must also be served at `ahmedbuildapps.com/app-ads.txt` if that is the listed site.

## Notes

- Tailwind is pinned to 4.1 because 4.3 needs Node 20.19 or newer.
- All motion respects the system "reduce motion" setting.
