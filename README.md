# tailwind-v4-example-sizes

This repo contains 6 different tailwindcss projects (to help debug tailwindcss build output from `v3` to `v4`).

See: <https://github.com/tailwindlabs/tailwindcss/issues/15722>

Each project is using tailwindcss, pnpm, vite, typescript, and react (but have slight differences with how tailwind is setup).

I'm comparing:

- v3 vs v4 tailwind
- in v4 tailwind, i'm comparing the "postcss" setup vs "vite-plugin" setup.
- i'm comparing setups that include `tailwind-merge` and setups that don't

## Installation

1. clone: `git clone git@github.com:skratchdot/tailwind-v4-example-sizes.git`
2. install: `pnpm install`
3. build: `pnpm build`

## Build Output

```shell
➜ pnpm build

> tailwind-v4-example-sizes@1.0.0 build /Users/jeff/git/tailwind-v4-example-sizes
> rimraf packages/*/dist; pnpm recursive run --sort --workspace-concurrency 1 build

Scope: 6 of 7 workspace projects

> v3-postcss-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v3-postcss-merge
> tsc && vite build

vite v6.0.11 building for production...
✓ 29 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-BovOH-IT.css    4.88 kB │ gzip:  1.44 kB
dist/assets/index-8_suku2W.js   206.05 kB │ gzip: 65.48 kB
✓ built in 612ms

> v3-postcs-no-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v3-postcss-no-merge
> tsc && vite build

vite v6.0.11 building for production...
✓ 28 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-BovOH-IT.css    4.88 kB │ gzip:  1.44 kB
dist/assets/index-CEvKYTCf.js   185.80 kB │ gzip: 58.69 kB
✓ built in 564ms

> v4-postcss-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v4-postcss-merge
> tsc && vite build

vite v6.0.11 building for production...
✓ 29 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-BO7rpnSk.css   17.98 kB │ gzip:  5.26 kB
dist/assets/index-CKoqq1P6.js   206.05 kB │ gzip: 65.48 kB
✓ built in 553ms

> v4-postcss-no-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v4-postcss-no-merge
> tsc && vite build

vite v6.0.11 building for production...
✓ 28 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-BO7rpnSk.css   17.98 kB │ gzip:  5.26 kB
dist/assets/index-DKFB-sBb.js   185.80 kB │ gzip: 58.69 kB
✓ built in 536ms

> v4-vite-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v4-vite-merge
> tsc && vite build

vite v6.0.11 building for production...
✓ 29 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-CylYwV1o.css   32.96 kB │ gzip:  7.38 kB
dist/assets/index-B_AoSdp_.js   206.05 kB │ gzip: 65.48 kB
✓ built in 428ms

> v4-vite-no-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v4-vite-no-merge
> tsc && vite build

vite v6.0.11 building for production...
✓ 28 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-BJXxG8A1.css   19.76 kB │ gzip:  5.62 kB
dist/assets/index-CC0VxMxM.js   185.80 kB │ gzip: 58.69 kB
✓ built in 446ms
```

## CSS Output

| css file                                                                                                                                                                  |     size | gzip size | build time |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------: | --------: | ---------- |
| [v3-postcss-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v3-postcss-merge/dist/assets/index-BovOH-IT.css)       |  4.88 kB |   1.44 kB | 612ms      |
| [v3-postcss-no-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v3-postcss-no-merge/dist/assets/index-BovOH-IT.css) |  4.88 kB |   1.44 kB | 564ms      |
| [v4-postcss-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v4-postcss-merge/dist/assets/index-BO7rpnSk.css)       | 17.98 kB |   5.26 kB | 553ms      |
| [v4-postcss-no-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v4-postcss-no-merge/dist/assets/index-BO7rpnSk.css) | 17.98 kB |   5.26 kB | 536ms      |
| [v4-vite-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v4-vite-merge/dist/assets/index-CylYwV1o.css)             | 32.96 kB |   7.38 kB | 428ms      |
| [v4-vite-no-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v4-vite-no-merge/dist/assets/index-BJXxG8A1.css)       | 19.76 kB |   5.62 kB | 446ms      |
