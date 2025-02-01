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
➜ pnpm run build

> tailwind-v4-example-sizes@1.0.0 clean /Users/jeff/git/tailwind-v4-example-sizes
> rimraf packages/*/dist

Scope: 6 of 7 workspace projects

> v3-postcss-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v3-postcss-merge
> tsc && vite build

vite v6.0.11 building for production...
transforming...
✓ 29 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-BovOH-IT.css    4.88 kB │ gzip:  1.44 kB
dist/assets/index-ByHR-Ygr.js   207.71 kB │ gzip: 65.97 kB
✓ built in 613ms

> v3-postcs-no-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v3-postcss-no-merge
> tsc && vite build

vite v6.0.11 building for production...
transforming...
✓ 28 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-BovOH-IT.css    4.88 kB │ gzip:  1.44 kB
dist/assets/index-CEvKYTCf.js   185.80 kB │ gzip: 58.69 kB
✓ built in 650ms

> v4-postcss-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v4-postcss-merge
> tsc && vite build

vite v6.0.11 building for production...
transforming...
✓ 29 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-Bt43YFai.css   17.99 kB │ gzip:  5.26 kB
dist/assets/index-Dqh69FLN.js   207.71 kB │ gzip: 65.97 kB
✓ built in 557ms

> v4-postcss-no-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v4-postcss-no-merge
> tsc && vite build

vite v6.0.11 building for production...
transforming...
✓ 28 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-Bt43YFai.css   17.99 kB │ gzip:  5.26 kB
dist/assets/index-DsQGksks.js   185.80 kB │ gzip: 58.69 kB
✓ built in 547ms

> v4-vite-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v4-vite-merge
> tsc && vite build

vite v6.0.11 building for production...
transforming...
✓ 29 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-CLPKK-T9.css   19.77 kB │ gzip:  5.62 kB
dist/assets/index-DNAAdbYt.js   207.71 kB │ gzip: 65.97 kB
✓ built in 431ms

> v4-vite-no-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v4-vite-no-merge
> tsc && vite build

vite v6.0.11 building for production...
transforming...
✓ 28 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-CLPKK-T9.css   19.77 kB │ gzip:  5.62 kB
dist/assets/index-BbuEXANm.js   185.80 kB │ gzip: 58.69 kB
✓ built in 408ms
```

## CSS Output

| css file                                                                                                                                                                  |     size | gzip size | build time |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------: | --------: | ---------: |
| [v3-postcss-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v3-postcss-merge/dist/assets/index-BovOH-IT.css)       |  4.88 kB |   1.44 kB |      613ms |
| [v3-postcs-no-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v3-postcs-no-merge/dist/assets/index-BovOH-IT.css)   |  4.88 kB |   1.44 kB |      650ms |
| [v4-postcss-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v4-postcss-merge/dist/assets/index-Bt43YFai.css)       | 17.99 kB |   5.26 kB |      557ms |
| [v4-postcss-no-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v4-postcss-no-merge/dist/assets/index-Bt43YFai.css) | 17.99 kB |   5.26 kB |      547ms |
| [v4-vite-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v4-vite-merge/dist/assets/index-CLPKK-T9.css)             | 19.77 kB |   5.62 kB |      431ms |
| [v4-vite-no-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v4-vite-no-merge/dist/assets/index-CLPKK-T9.css)       | 19.77 kB |   5.62 kB |      408ms |
