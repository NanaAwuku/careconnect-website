# CareConnect website

The public site for CareConnect, church management for African churches: what it does,
pricing, security, and the "Request access" form. Built with [Astro](https://astro.build) and
Tailwind CSS; every page is static HTML.

## Run it

```bash
npm install
PUBLIC_API_URL=http://localhost:4000 npm run dev   # http://localhost:4321
npm run build                                       # → dist/
```

## Where things are

| What | Where |
|---|---|
| Prices, plans, SMS bundles, features, FAQs, contact details | `src/data/site.ts`: change content here, not in the pages |
| Pages | `src/pages/` (home, features, pricing, security, request-access, sign-in, privacy, terms, 404) |
| The drawn product pictures | `src/components/FeatureArt.astro` (invented names only, never real member data) |
| Brand colours and type | `src/styles/global.css` |

## The Request access form

It posts to the backend's public `POST /api/leads` (`PUBLIC_API_URL`). Each request is saved as a
lead, emailed to the platform admins, and listed in the app's platform console under **Leads**.
The backend allows the site's origin through CORS when `PLATFORM_DOMAIN` (or `MARKETING_SITE_URL`)
is set.

## Deploy (Vercel)

1. New Vercel project from this repo (framework: Astro, output `dist`).
2. Settings: `PUBLIC_API_URL` = the backend's public URL, `SITE_URL` = `https://careconnectgh.org`.
3. Domains: `careconnectgh.org` and `www.careconnectgh.org` on this project.

## Before launch

- Confirm the prices in `src/data/site.ts` (they are launch placeholders).
- Have a lawyer review `privacy` and `terms` (they say "Draft" until then).
- Set the real contact email and phone in `src/data/site.ts`.
- Register with Ghana's Data Protection Commission.
