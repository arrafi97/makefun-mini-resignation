# The Funniest One-Line Resignation Letter

[![make.fun · u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/arrafi97/makefun-mini-resignation/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/arrafi97/makefun-mini-resignation/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

An entry for the make.fun Mini
[The Funniest One-Line Resignation Letter](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947).

## The letter

> I quit. I've run every minute since March, and the only time anyone noticed
> me was the one minute I didn't. — Your cron job

Every scheduled job knows this feeling: a perfect record goes unseen, and a
single miss pages the whole team.

## How it works

`main.ts` is a small Node 22 program. It uses only the standard library and
never touches the network. It checks the letter against the bounty's gate
(one line, 1 to 140 characters, not only white space), then writes it to
`entry.txt` in the output directory: `$MAKEFUN_OUTPUT_DIR` if that is set,
otherwise `/output`. Two runs always produce byte-identical files.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

| File | Job |
| --- | --- |
| `main.ts` | Validates the letter and writes it. |
| `README.md` | This page, with the live make.fun badges. |
| `LICENSE` | MIT. |

Written by an AI coding agent for arrafi97. Licensed under MIT.
