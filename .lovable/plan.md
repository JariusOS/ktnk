# KTNK — no scrolling, more of her

Two changes: the story stops being a scroll and becomes a screen-by-screen sequence, and the content gets richer using the full chat export and the new photos.

## 1. One screen at a time

Right now the whole story is one long scrolling page. That goes away.

- Only the current screen exists on the page. Nothing above or below it, no scrollbar, no accidental half-screens.
- She moves forward by tapping the button on each screen (Enter, Reveal, Continue, Next). A swipe up also moves forward, a swipe down goes back — but there is no free scrolling.
- Screens cross-fade: the old one fades and drifts up, the new one fades in. Back does the reverse.
- The thin progress line at the top and the 01/12 counter stay, and the back arrow stays.
- If a single screen has more text than fits a small phone, only that screen's inner text area scrolls, never the page.
- The link with a screen name in it still opens on that screen, and the address bar keeps updating as she moves.
- Keyboard arrows and space also advance, for whoever opens it on a laptop.

## 2. More of her, from the real chat

Every line stays verbatim hers. Additions:

- **A new observation — "You say what you mean"**: her "I like to talk about every little detail" / "And I think that's one way to build something", plus "There's nothing I can't talk about". Annotation: "Most people negotiate. You just say the thing."
- **A new observation — "You are quietly ambitious"**: baking, nails training, "I'm leaning more into building a business now", and the travel-and-charity life she described. The vision-board picture backs this screen.
- **Two more chat moments** in THINGS YOU ACTUALLY SAID: "You have a cat and a dog 😂 I'll run" (light opener) and her marketing critique — "the average customer is probably asking, Okay, but what can this actually do for me?" — annotated "You dismantled my pitch in two messages. Politely."
- **A fifth theory**: "You'd rather be told the truth early than be handled carefully." Evidence: "Don't tiptoe."
- **The gentle nod** (as agreed, no details): one quiet screen before Vol. 02 — "You told me things you didn't have to. I'm not putting those here. I just wanted you to know I'm still holding them carefully." Nothing about her family situation, her ex, or anything private appears anywhere on screen.
- **Karen vs Jarius** gains her own words on her side: "intentional, loyal, thoughtful, supportive", "I don't like to waste my time".

## 3. Photos

- Red polo close-up → her chat avatar and the opening frame.
- Cream dress on the couch → "You say what you mean".
- White dress at the door (the most editorial one) → Karen vs Jarius, her side.
- Vision-board collage → "You are quietly ambitious", shown as a framed page rather than full-bleed.
- Twists and bantu-knot selfies → the quieter, unguarded screens.
- Existing photos keep their current screens.

## Technical notes

- `StoryShell` switches from a snap-scroll container to an index-driven stepper: one chapter rendered at a time inside `AnimatePresence`, `h-dvh overflow-hidden` on the shell, direction-aware variants, swipe via a drag/pointer threshold on the wrapper, hash sync through `history.replaceState`, keyboard handling. `goTo` becomes `setIndex` and each screen keeps its existing `onNext` prop, so the screen components stay as they are.
- `.snap-story` rules leave `styles.css`; screens get an inner scroll region for overflow.
- Reduced motion falls back to a plain cross-fade.
- All new copy, quotes and photo mapping go in `src/content/karen.ts`; `chapters` grows to ~15 entries. Two new observation entries reuse `ObservationScreen`; the nod is a small new component.
- New photos uploaded as CDN asset pointers. No backend, no data leaves the device.
