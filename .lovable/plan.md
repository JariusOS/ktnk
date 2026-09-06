# KTNK — Vol. 01: The Investigation

Evolve the existing app: same midnight blue/violet identity, same serif/sans type, same snap-scroll chapters and motion. Replace the generic observation content with real evidence, and add three new chapters.

## New flow

```text
OPEN → VOL. 01 → 5 OBSERVATIONS → THINGS YOU ACTUALLY SAID
→ I HAVE A THEORY → KAREN VS JARIUS → STILL FIGURING YOU OUT → VOL. 02 → CLOSE
                                              ↳ hidden ✦ confession
```

## 1. Five observations (replaces the current three)

Each is a full-bleed photo screen, tappable to reveal its evidence card.

1. **LAID-BACK** — "You seem very comfortable just being yourself."
2. **FAMILY IS A BIG DEAL** — quote: "I literally have 15 other siblings." / "That sentence required considerably more processing than you probably intended."
3. **PLAYFULLY UNPREDICTABLE** — the transport saga / "I have learned that getting you from A to B may require its own logistics department."
4. **THERE'S MORE UNDERNEATH** — "You can make something serious sound casual. I don't think that means it isn't important to you."
5. **STILL FIGURING YOU OUT** — "I have theories. I don't have conclusions." Ends with CONFIDENCE 63% / REMAINING UNKNOWN 37% and "Probably the interesting part." The existing Karen Index bars fold into this screen.

## 2. THINGS YOU ACTUALLY SAID

A new chapter styled as a private chat inside the app — rounded bubbles, her avatar, soft timestamps, read ticks, violet-tinted glass, typing indicator before each line lands. Not a WhatsApp screenshot; clearly part of KTNK. Bubbles animate in one at a time as you tap to uncover the conversation, each followed by a short Jarius annotation in the app's own type.

Five moments, using only her real words:

1. "You know what that means" → "This was approximately where I realised there was significantly more going on underneath the calm exterior."
2. "I literally have 15 other siblings" → "I still don't know whether to laugh or ask for a family tree."
3. Transport saga, her real words: "The park is really far from my house" / "Well I guess this is not happening" / "Money is always a deal breaker" → "Operational complexity: unnecessarily high."
4. "Lol please say it" / "Don't tiptoe" → "Noted. Permanently."
5. "Being present" / "I like to talk about every little detail" / "And I think that's one way to build something" → "You said that lightly. I wrote it down."

A sixth, quieter one: "And I didn't tell my dad before leaving o" / "Maybe my sisters will come up with something" → "Family logistics, handled with alarming confidence."

Nothing about the crying line or the past relationship goes on screen — too private for an artifact she may show someone. Every quote is hers, verbatim.


## 3. I HAVE A THEORY

One theory at a time, large editorial layout. VERDICT? → ACCURATE ("Noted.") or YOU'RE WRONG ("Excellent. That's useful information." + "Correct the record →" with a text field). Four theories: laid-back but not simple; family matters more than she lets on; playful/unpredictable streak; still figuring things out and not wanting to be defined early. Answers save locally.

## 4. KAREN VS JARIUS

Brings back the V1 draggable divider. Her photo on the left, his side on the right, a slider that wipes between them and reveals each list as it moves. Subtitle: "I've been investigating you. Unfortunately, the evidence suggests I should investigate myself too." Bottom: COMPATIBILITY ASSESSMENT / INCONCLUSIVE / Further investigation required. Then "Fortunately, I have a few ideas for the next experiment."

## 5. Photos

The two new photos join the set: the close-up becomes her chat avatar (and the "more underneath" observation), the pink-dress photo backs her side of the comparison. Existing photos keep their screens.

## 6. Tone and polish

Dry, observational, self-aware throughout — no romantic filler. Progress line, back control, consistent Continue → / Reveal → CTAs, 44px targets, reduced-motion respected.

## Technical notes

- All copy, quotes, chat scripts, theories and photo mapping stay in `src/content/karen.ts`.
- New components: `ChatArchive`, `Theories`, `VersusSlider`; `ObservationScreen` extended for evidence quotes; `KarenIndex` merged into observation 05; `TwoSides` retired in favour of the theories + versus screens.
- Responses persist in localStorage under the existing `karen-vol-01` key. No backend, auth, or API.
- New photos uploaded as CDN asset pointers alongside the existing ones.
