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
> pnpm recursive run --sort build

Scope: 6 of 7 workspace projects
packages/v3-postcss-merge build$ tsc && vite build
│ vite v6.0.11 building for production...
│ transforming...
│ ✓ 29 modules transformed.
│ rendering chunks...
│ computing gzip size...
│ dist/index.html                   0.46 kB │ gzip:  0.30 kB
│ dist/assets/index-BovOH-IT.css    4.88 kB │ gzip:  1.44 kB
│ dist/assets/index-8_suku2W.js   206.05 kB │ gzip: 65.48 kB
│ ✓ built in 683ms
└─ Done in 1.7s
packages/v3-postcss-no-merge build$ tsc && vite build
│ vite v6.0.11 building for production...
│ transforming...
│ ✓ 28 modules transformed.
│ rendering chunks...
│ computing gzip size...
│ dist/index.html                   0.46 kB │ gzip:  0.30 kB
│ dist/assets/index-BovOH-IT.css    4.88 kB │ gzip:  1.44 kB
│ dist/assets/index-CEvKYTCf.js   185.80 kB │ gzip: 58.69 kB
│ ✓ built in 688ms
└─ Done in 1.7s
packages/v4-postcss-merge build$ tsc && vite build
│ vite v6.0.11 building for production...
│ transforming...
│ ✓ 29 modules transformed.
│ rendering chunks...
│ computing gzip size...
│ dist/index.html                   0.46 kB │ gzip:  0.30 kB
│ dist/assets/index-FR3ua5OL.css   31.10 kB │ gzip:  7.11 kB
│ dist/assets/index-D3WgZ2kl.js   206.05 kB │ gzip: 65.48 kB
│ ✓ built in 646ms
└─ Done in 1.6s
packages/v4-postcss-no-merge build$ tsc && vite build
│ vite v6.0.11 building for production...
│ transforming...
│ ✓ 28 modules transformed.
│ rendering chunks...
│ computing gzip size...
│ dist/index.html                   0.46 kB │ gzip:  0.30 kB
│ dist/assets/index-DPr78ePj.css   19.15 kB │ gzip:  5.52 kB
│ dist/assets/index-C7q0v3Yp.js   185.80 kB │ gzip: 58.69 kB
│ ✓ built in 645ms
└─ Done in 1.6s
packages/v4-vite-merge build$ tsc && vite build
│ vite v6.0.11 building for production...
│ transforming...
│ ✓ 29 modules transformed.
│ rendering chunks...
│ computing gzip size...
│ dist/index.html                   0.46 kB │ gzip:  0.30 kB
│ dist/assets/index-CylYwV1o.css   32.96 kB │ gzip:  7.38 kB
│ dist/assets/index-B_AoSdp_.js   206.05 kB │ gzip: 65.48 kB
│ ✓ built in 482ms
└─ Done in 1.2s
packages/v4-vite-no-merge build$ tsc && vite build
│ vite v6.0.11 building for production...
│ transforming...
│ ✓ 28 modules transformed.
│ rendering chunks...
│ computing gzip size...
│ dist/index.html                   0.46 kB │ gzip:  0.30 kB
│ dist/assets/index-BJXxG8A1.css   19.76 kB │ gzip:  5.62 kB
│ dist/assets/index-CC0VxMxM.js   185.80 kB │ gzip: 58.69 kB
│ ✓ built in 443ms
└─ Done in 1.2s
```
