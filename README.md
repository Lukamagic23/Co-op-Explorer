# Co-op Explorer

An unofficial, student-built mock project that shows what a UNSW co-op degree involves: a day on placement, a day on campus, what you study each year, and the honest trade-offs.

Not affiliated with or endorsed by UNSW Sydney. All degree content is illustrative and **must be verified against the official UNSW Handbook before launch** (see the checklist below).

## Run it

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check, then production build into dist/
npm run preview    # serve the production build
```

Stack: React 18, React Router 7, TypeScript, Vite, CSS Modules. Icons are from `lucide-react`. Fonts are Figtree and IBM Plex Mono, self-hosted through `@fontsource`.

## Deploy (Render)

The repository includes `render.yaml`, a Render Blueprint for a static site.

1. In Render, choose **New > Blueprint** and select this GitHub repository.
2. Render reads `render.yaml`: it runs `npm ci && npm run build` and publishes `dist/`.
3. Every push to `main` redeploys automatically.

A rewrite rule sends all paths to `index.html`, so deep links such as `/degrees/mining-engineering` work on refresh. Node 22.12 or newer is required (`.node-version` and `engines` in `package.json`).

## Project layout

```
src/
  content/
    schema.ts          Degree type: the single source of truth for content shape
    validate.ts        Runtime validation; throws on missing or malformed fields
    index.ts           Loads every file in degrees/ automatically
    quiz.ts            "Is this for me?" questions (scored by interest, not by degree)
    degrees/*.ts       One file per degree
  components/          UI components, each with a .module.css file
  hooks/               useProgress (localStorage), useMediaQuery, useActiveSection
  pages/               Route-level pages (lazy-loaded except Home)
  styles/tokens.css    Design tokens
  styles/global.css    Base styles and a few shared utility classes
  assets/unsw-logo.png Logo shown in the header
  assets/logos/        Employer logos used on the Business Information Systems page
  assets/photos/       Home hero GIF, mentor photo (home), co-op event photo (About), BIS hero photo
  assets/photos/degrees/ Two openly licensed photos per degree (credited on the About page)
  lib/                 scrollToSection, used by in-page links (see Notes)
```

Routes: `/`, `/degrees`, `/degrees/:slug`, `/compare?d=a,b,c`, `/is-this-for-me`, `/about`, plus not-found and error pages. The day-in-the-life view is stored in the URL as `?day=placement` or `?day=campus`, so a view can be shared.

## Add a degree

1. Copy an existing file in `src/content/degrees/` to a new file, for example `mechanical-engineering.ts`.
2. Change every field. The `slug` becomes the URL (`/degrees/mechanical-engineering`).
3. Run `npm run dev`. If anything is missing or malformed, the app fails on startup and lists each problem.

You don't need to change any components. The home grid, faculty index, faculty filter, interest chips, compare page, similar-degree suggestions, quiz suggestions and progress counter all pick up the new degree automatically. A new faculty name creates a new column in the faculty index.

Rules the validator enforces:

- 3 to 5 years of courses, with years numbered in order
- No course codes in course names (names only)
- Every `course.majors` id must exist in `majors`
- 6 to 8 time blocks per day, in time order, using `HH:MM`
- 1 or 2 decision moments on the placement day, each with 2 or 3 options, and each `time` matching a placement block
- 4 to 8 employer types, 2 to 4 trade-offs, at least one `toVerify` item
- `interests` must come from the fixed list in `schema.ts` (numbers, people, building, data, markets, risk, science, sustainability, creativity). Put the strongest interest first: it weighs more in the quiz and in similar-degree matching.
- `workload.level` and `maths.level` must use the allowed values; both appear on the compare page

Employer entries need a `type` (such as "Major bank") and `whatYouMightDo`. To show a real logo, add the image to `src/assets/logos/`, import it in the degree file, and set both `logo` and `name` (the name is used as alt text; the validator requires it). Entries without a logo show a text placeholder. Business Information Systems uses real logos; the other degrees use placeholders.

## Design tokens

All colours, fonts, sizes, spacing, borders and motion live in `src/styles/tokens.css` as CSS custom properties. Components reference only these variables, with no hard-coded hex values.

| Token | Use |
| --- | --- |
| `--color-yellow` | Primary button, active chips, highlights. Always with black text: yellow on white fails contrast. |
| `--color-ink` | Text, borders, nav underline bar |
| `--color-sky` | Angular background shapes, tinted sections |
| `--color-surface` | Page background |
| `--color-muted` | Secondary text (passes AA on white) |
| `--color-line`, `--color-subtle` | Dividers, placeholder fills, hover states |

Motion uses `--duration`, which drops to `0ms` under `prefers-reduced-motion: reduce`.

`ShapedImage` crops images into `blob`, `pentagon` or `diagonal` masks. With no `src`, it renders a labelled placeholder. Replace placeholders only with properly licensed photography.

## Content verification checklist

Before launch, check each degree file against the official UNSW Handbook and the UNSW Co-op Program team. Each file also lists its own items in `toVerify`, and those are shown at the bottom of each degree page.

- [ ] Official program name and whether it exists as a co-op program. Finance and Banking, Marketing and Commerce may be majors within a broader program, and Chemical Product Engineering, Photovoltaics and Renewable Energy, Advanced Mathematics, Data Science and Decisions and Materials Science and Engineering need their co-op status confirmed
- [ ] Faculty for each degree (Materials Science and Engineering in particular)
- [ ] Duration and honours structure
- [ ] Major, co-major and stream names
- [ ] Course names in each year, and which courses belong to which major
- [ ] Number, length and timing of industry placements
- [ ] Scholarship and eligibility wording on the About page
- [ ] Professional accreditation claims (Actuaries Institute for Actuarial Studies, Engineers Australia for Software Engineering)
- [ ] Day-in-the-life details reviewed by at least one current co-op scholar per degree
- [ ] UNSW logo, the photos supplied by the owner in `src/assets/photos/` and the employer logos in `src/assets/logos/` cleared for use
- [ ] Openly licensed degree photos still credited correctly, and licence terms (attribution, share-alike) met wherever the site is published
- [ ] Employers shown with logos are confirmed as current co-op sponsors for that degree

## Notes

- The UNSW logo is included because the owner asked for it in this mock. It must be removed or properly licensed before anything is published.
- In-page links (section nav, skip link, decision links) use `HashLink`, which scrolls with `scrollToSection`. Plain `<a href="#id">` links do not scroll reliably inside React Router, so don't use them for in-page navigation.
- Every degree page has two photos: `heroImage` (beside the title) and `campusImage` (beside the overview). Each is `{ src, width, height, credit }`, with the photo imported from `src/assets/photos/degrees/`. The degree photos are openly licensed (CC BY, CC BY-SA, CC0 or public domain) and were found through Openverse. Their credits live in the degree files and are listed automatically under Photo credits on the About page. Keep the credit when you keep a photo. When you replace one, update `imageAlt` to describe the new photo. A degree without photos falls back to labelled placeholders.
- Progress memory uses `localStorage` under the key `coop-explorer:explored`. No accounts and no tracking.
