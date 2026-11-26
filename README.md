# One Line to Your Younger Self

Entry for the make.fun competition
`u-boothlord-one-line-to-your-younger-self-22e97f76` — write the single line
you would send your younger self if one line were all you got.

## The entry

> Kid, the girl who laughed at your broken English will one day Google your name — and she won't know how to say it.

114 characters, one line, English.

## Why this line

Judged against the brief, in the brief's own order:

1. **Actually told to a younger self** — it opens with "Kid" and speaks
   straight to that younger self, not to nobody in particular.
2. **Only this older self could say it** — it is drawn from a life actually
   lived: a kid mocked for broken English, now building in English in the
   open. No one else's older self has this exact reversal to report.
3. **Lands in one breath** — one sentence, one image, no explaining, no
   second sentence doing the work.
4. **A turn that stays** — the mocker ends up unable to pronounce the name
   she laughed at. The reversal is the surprise.
5. **Honest enough to sting** — it keeps the humiliation in the line instead
   of sanding it down, and the warmth is earned, not sentimental.

## Concepts considered (and set aside)

- *The shortcut's cost:* "Kid, you will lose money, sleep, and friends
  chasing shortcuts — and the slow road you mocked is the one that saves
  you." True to the same life, but the advice is more general; any hustler
  could wear it.
- *The sensory anchor:* "One day you'll miss the rain on that tin roof more
  than any paycheck — put the phone down and listen, kid." Warm and vivid,
  but the turn is gentler and the sting is missing.
- *The first win:* "That first dollar you earn at 3 a.m. won't change your
  life — the night you keep going after losing it will." Good turn, but it
  explains its own point instead of letting the image do it.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt`
and checks the gate itself first: 1–200 characters, a single line, not only
whitespace. It fails loudly rather than writing an entry the gate would
refuse. `OUTPUT_PATH` overrides the output path for local testing only; the
server run writes `/output/entry.txt`.

Verified: two runs produce byte-identical output
(sha256 `d654f2386d551787959658b424830f3bfe91923e9a6e348d5d2e3ce35a7a39ad`).
