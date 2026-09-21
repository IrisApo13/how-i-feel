# The guide's voice — settings of record

These are the exact settings the shipped clips in `public/audio/` were generated
with, on 2026-09-14. **Anything generated later must use them unchanged**, or the
new clips will sound subtly different from the old ones — and a voice that shifts
halfway through a flow is more noticeable than one that is merely plain.

```
voice     bIHbv24MWmeRgasZH58o
model     eleven_multilingual_v2
stability 0.45
similarity 0.8
style     0.25
speed     1.05
pause     0.45s after . ! ?        0.18s after ,
override  "Hi! I hurt sometimes too." → 0.9s
```

All of these are the defaults in `scripts/build-audio.mjs`, so the command below
needs no flags beyond `--live`. Do not pass `ELEVENLABS_STABILITY` and friends
unless you are deliberately re-tuning **everything**.

## Finishing the batch

151 of 192 lines were generated before the free-tier quota ran out; 41 remain,
about 1,595 characters. The script hashes each line and skips any file already
on disk, so re-running generates **only** what is missing:

```sh
cd ~/how-i-feel
ELEVENLABS_API_KEY=sk_... ELEVENLABS_VOICE_ID=bIHbv24MWmeRgasZH58o \
  node scripts/build-audio.mjs --live
```

Check what is still outstanding at any time:

```sh
ls public/audio/*.mp3 | wc -l      # against the 192 in the --live set
```

## Why these numbers

Each was arrived at by listening, and two of them are counter-intuitive enough
to be worth writing down before someone "fixes" them:

- **model** is the quality model, not `eleven_turbo_v2_5`. Turbo is half the
  credits and several times faster, and both are worthless here — this runs once,
  offline, with nobody waiting. What turbo cost was prosody: pauses in odd
  places, so a short question sounded like the voice lost its thread.

- **stability 0.45**, not higher. Stability is an expressiveness dial in
  reverse; at 0.65 the pitch rise on a question mark flattened out, and nearly
  every line in this app is a question. The consistency it buys matters less
  than it sounds, because these are one-sentence clips heard a screen apart.

- **speed 1.05 with a 0.45s pause**, rather than a slower read. Speed and pause
  do different jobs and should not both be used to slow the voice down: silence
  between sentences is what makes speech feel unhurried, while stretching the
  words just makes it drawl. This went 0.95 → 1 → 0.9 → 0.96 → 1.05 before that
  became clear.

- **style 0.25.** Above about 0.4 the voice begins performing, and a question
  read theatrically to a child in pain is worse than one read plainly.

- **the greeting override.** "Hi!" is an opening rather than a sentence, and the
  standard 0.45s after it reads as a stumble where a longer beat reads as warmth.

## Two things that are easy to get wrong

**Break tags never reach the app.** They are added on the way out to the API
only, and the filename is hashed from the plain child-facing text. So pause
lengths can be retuned forever without renaming a single file.

**`--test` costs quota.** Roughly 220 characters a run. Repeated test runs
during tuning are what consumed the difference between the 7,561-character batch
and the 10,000 allowance.
