# shino-nostalgic-childhood-memory

[![make.fun](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/Xyzar29/shino-nostalgic-childhood-memory/rank.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/Xyzar29/shino-nostalgic-childhood-memory/reward.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)

Entry for the [make.fun](https://make.fun) bounty
[Make the AI Judge Feel Nostalgic: A Childhood Memory](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363).

## The entry

`main.ts` writes a single sentence — one childhood memory, 213 characters — to
`/output/entry.txt`:

> Every August evening, Grandma fried rice in her little kitchen while the radio crackled, and I sat on the cold tile floor stealing the crispy bits from the pan, certain that summer — and she — would never end.

## Run

```sh
node main.ts   # Node 22.18+ (runs TypeScript as-is)
```

The program checks the entry against the competition gate (1–280 characters,
not only whitespace) before writing it, and writes the file with no trailing
newline so the character count is exactly the sentence.

## License

MIT — see [LICENSE](LICENSE).
