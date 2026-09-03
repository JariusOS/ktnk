# KAREN, IN A FEW FRAMES — Vol. 01

A six-screen interactive visual story, mobile-first, no backend. Static app, one shareable URL.

## Screens

1. **Cover** — huge "KAREN / in a few frames", "Vol. 01 — still figuring you out", dominant portrait, `Enter →`.
2. **First impression** — full-bleed photo, floating words (LAID-BACK / CURIOUS / HARD TO READ), then the line about first impressions being unreliable.
3. **Contrasts** — two photos side by side with a draggable divider (drag/tap to shift between Side A and Side B). Side A: Quiet. Soft. Observant. Side B: Playful. Mischievous. Unpredictable.
4. **Still figuring out** — questions revealed one at a time on tap, with a subtle counter.
5. **The unpredictable part** — tap-to-reveal cards, each completing an unfinished observation.
6. **To be continued** — minimal closer, "Apparently, six frames weren't enough.", a `Vol. 02 →` teaser (disabled/coming-soon), footer "Still figuring you out."

## Navigation

Vertical full-screen sections with snap scrolling, plus discreet Next / Back controls and a small 6-dot progress indicator. Each screen is deep-linkable via hash so the URL is shareable.

## Photo selection

Five of the seven uploads, chosen for what they say rather than for coverage:
- Cover: the red dress shot (strongest, most composed).
- First impression: the gym "COMMITMENT" full-length shot.
- Contrasts: the salon mirror selfie (composed, observant) vs. the white-top bedroom selfie (playful, direct).
- Closer: the twist-braids portrait, used dark and small.
The remaining two are left out.

## Visual direction

Deep navy-black base, electric blue and purple accents, off-white type. Gradients used sparingly (edge glows, image scrims). Large editorial typography — a tight display face for headlines against a clean grotesk for body. Magazine/luxury-portfolio feel, no romantic-Valentine styling, no hearts or particles.

Motion: fades and slow reveals, slight image zoom on entry, parallax on full-bleed photos, smooth section transitions. Reduced-motion respected.

## Technical notes

- Photos uploaded as CDN assets and imported as pointers; no binaries added to the repo.
- All copy in a single `src/content/karen.ts` object: `photos`, `observations`, `questions`, `reveals`, `sections`.
- Motion for React for animation; Tailwind tokens for the blue/purple system defined in `src/styles.css`.
- Built at `/` (`src/routes/index.tsx`) with its own head metadata; no database, auth, or server functions.
- Contrast drag implemented with pointer events on a clip-path split — works on touch and mouse.
