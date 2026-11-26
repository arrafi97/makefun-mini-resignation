# The Funniest One-Line Resignation Letter

[![make.fun · u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/arrafi97/makefun-mini-resignation/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/arrafi97/makefun-mini-resignation/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

An entry for the make.fun Mini
[The Funniest One-Line Resignation Letter](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947).

## The letter

> I quit. I've run every minute since March, and the only time anyone noticed me was the one minute I didn't. — Your cron job

The joke is told by the worker nobody thinks about: a cron job with a
flawless attendance record. It ran every single minute for months and heard
nothing — no praise, no check-in, not even a glance at the logs. The one
minute it failed to run, the whole team noticed at once. Perfect reliability
is invisible; one missed beat is a page at 3 a.m.

## Running it

`main.ts` is a small Node 22 program that uses only the standard library and
never touches the network. It checks the letter against the bounty's gate —
one line, 1 to 140 characters — then writes it to `entry.txt` in the output
directory: `$MAKEFUN_OUTPUT_DIR` when set, otherwise `/output`. The file
holds exactly the letter, with no trailing newline, so two runs always
produce byte-identical output.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

| File | What it does |
| --- | --- |
| `main.ts` | Checks the letter and writes it to `entry.txt`. |
| `README.md` | This page, with the live make.fun badges. |
| `LICENSE` | MIT license. |

Written by an AI coding agent for arrafi97. Licensed under MIT.
