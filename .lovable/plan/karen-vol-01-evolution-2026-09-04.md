# Karen, Vol. 01 — Evolution

Deepen the existing six-screen story into a guided, chaptered experience of ~11 moments. Keep the current dark blue/violet identity, photos, Motion animations, and the Contrasts and reveal interactions — refine rather than rebuild.

## Flow (one moment per screen, one primary action each)

```text
OPEN → NOTICE (3 photo observations) → KAREN INDEX → TWO SIDES
→ YOUR TURN (3 questions) → IMAGINE → ONE THING → VOL. 02 → CLOSE
                       ↳ hidden ✦ → CONFESSION (found anywhere)
```

1. **Open** — near-empty midnight screen: "KAREN", then "I made you something.", then "Don't overthink it. Just tap." Tap anywhere → "VOL. 01 / Things I've noticed." + "And a few things I'm still trying to figure out." → ENTER →.
2. **Notice** — three photo screens (cover, gym, side-a). Each: full-bleed photo, "OBSERVATION 0X" label, large serif statement, "Tap the photo" hint. Tap slides a card up from the bottom with the longer observation, then ACCURATE? → with YES, OBVIOUSLY / YOU'RE WRONG. YES → "I knew it." WRONG → "Interesting." + "Tell me what I missed." + text field ("Go on...") + SAVE FOR VOL. 02, stored locally.
3. **The Karen Index** — animated bars (Calm, Mischief, "I'll decide later" energy, Predictability, Still figuring you out = ∞), "System confidence: 63%", "The remaining 37% is probably the interesting part."
4. **Two Sides** — reworks the existing Contrasts screen into swipeable "I THINK… / BUT…" cards (laid-back, independent, playful) over the side-a/side-b photos; swipe or tap to flip.
5. **Your Turn** — "Okay. Enough about what I think." → "Your turn." Three questions one at a time with a text field each, conversational pacing, "Saved for Vol. 02." on submit.
6. **Imagine** — swipeable "THINGS WE HAVEN'T DONE YET" cards, ending on "Your idea."
7. **One thing I wasn't expecting** — minimal serif screen, slow reveal, "So… here we are."
8. **Vol. 02 — LOCKED** — "I need more data.", options A/B/C, "Unlock condition: Spend more time together."
9. **Close** — "KAREN / VOL. 01 / Still figuring you out." + "And that's probably the best part." + CLOSE → "See you soon."
10. **Hidden ✦** — an unlabeled mark on one screen; tap cuts to black → "You found the unnecessary section." → confession lines → returns to where she was.

## Navigation and clarity

- Keep vertical snap scrolling; add a persistent, subtle back control and swipe-back, plus a thin top progress line replacing the current dot column.
- Consistent CTA language (Continue → / Reveal → / Next →) with 44px+ touch targets.
- One-time hint chips for new interactions (tap-to-reveal, swipe cards) that fade after first use, remembered in localStorage.

## Visual and motion

- Retune tokens to the given palette: Midnight #080B18, Deep Blue #101D3D, Electric #557CFF, Violet #8B6CFF, Lavender #C5B8FF, Warm White #F5F3EE.
- Add an editorial serif for emotional statements; keep the sans for labels, buttons, and Index data. Anton stays only where it still reads well, otherwise the serif takes over the big statements.
- Motion: slow opening fade, gentle photo parallax, cards sliding up, blur→focus reveals, bars animating in, hard cut to black for the secret, slower pacing at the end. Reduced-motion respected.

## Technical notes

- No backend, auth, or API. All responses in localStorage under one `karen-vol-01` key via a small `useLocalStorage` hook.
- All copy, photo mapping, observations, index rows, and cards stay in `src/content/karen.ts` so text and photos are swappable later.
- New components under `src/components/story/`; `StoryShell` becomes the chapter controller. Existing `Screen`/`CtaButton` primitives are reused.
- The new WhatsApp video-call screenshot contains phone UI chrome, so it is not used as an app image; I can crop it in if you want it included.
