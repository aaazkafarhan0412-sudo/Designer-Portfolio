# made.byazka — editing guide

A short guide to customising the portfolio without breaking the layout.

## 1. Words, links & projects

Everything content-facing lives in **`src/data/site.ts`**:

| What you want to change | Where |
| --- | --- |
| Logo wordmark, tagline, Instagram URL, email, location, availability | `brand` |
| Profile / brand image | set `brand.profileImage` to an image path (e.g. `/images/profile.jpg`) |
| Hero headline, introduction, buttons, note | `hero` |
| About copy, stats, values, studio image | `about` (set `about.image`) |
| Services, skills, tools | `services` |
| Featured projects & case studies | `projects` |
| Showcase filters | `showcase.filters` |
| Process steps | `process` |
| Contact copy & CTAs | `contact` |
| Footer columns, credit & social links | `footer` / `socials` |

The Instagram link is defined once in `brand.instagram` and reused by the
`<InstagramLink />` component in the header, hero, contact and footer.

## 2. Replacing images

1. Add your file to `public/images/` (JPG, PNG, WebP or SVG).
2. Set the matching path in `src/data/site.ts`:
   - `brand.profileImage` — hero portrait
   - `about.image` — studio photo in About
   - `project.image` — any project (leave blank to use the illustrated artwork)
3. Keep the same aspect. All images are rendered through `MediaFrame`
   (`src/components/ui/MediaFrame.tsx`), which preserves the frame's crop,
   dimensions and rounded corners.

The six supplied artworks are recreated as editable vector components in
`src/components/artwork/`. Use the registry key on each project
(`cholistan`, `desi`, `bedazzled`, `purpleReverie`, `be`, `collection`).

## 3. Colours & fonts

Design tokens are in **`src/index.css`** under `@theme`:

- `--color-cream`, `--color-blush`, `--color-rose`, `--color-plum`,
  `--color-lavender`, `--color-sand`, etc.
- `--font-display` (Fraunces), `--font-sans` (Manrope), `--font-script`
  (Pinyon Script)

Change a value there and the whole site follows. Fonts are loaded in
`index.html`.

## 4. Reusable components

| Component | Purpose |
| --- | --- |
| `ui/Logo` | Brand mark + wordmark; optional `onDark`, `showTagline` |
| `ui/Button` | Shared CTA: `primary`, `rose`, `outline`, `outline-light`, `light`, `ghost` |
| `ui/Icon` | Single inline SVG icon set (`instagram`, `brand`, `ui`, …) |
| `ui/InstagramLink` | Consistent Instagram link + icon |
| `ui/MediaFrame` | Replaceable, fixed-crop image container |
| `ui/Reveal` | Accessible scroll-in animation |
| `ui/RotatingSeal` | Decorative brand seal |
| `ProjectVisual` | Renders `project.image` or the corresponding artwork |

## 5. Adding a project

Duplicate an object inside `projects` in `src/data/site.ts`, give it a unique
`id`, fill in the copy, pick an `artwork` key or add an `image`, then add it
to the desired filters via `categories`.

## 6. Accessibility & motion

- All interactive controls have visible focus states and labels.
- The case-study modal traps focus, closes on `Esc` and supports ← / →.
- Reduced-motion preferences disable animations.
- Skip link, active navigation state and live filter announcements included.

## 7. Running locally

```bash
npm install
npm run dev
npm run build
```
