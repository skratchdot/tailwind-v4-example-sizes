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

vite v6.1.1 building for production...
transforming...
✓ 29 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-BovOH-IT.css    4.88 kB │ gzip:  1.45 kB
dist/assets/index-CHL_247M.js   207.65 kB │ gzip: 65.82 kB
✓ built in 726ms

> v3-postcss-no-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v3-postcss-no-merge
> tsc && vite build

vite v6.1.1 building for production...
transforming...
✓ 28 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-BovOH-IT.css    4.88 kB │ gzip:  1.45 kB
dist/assets/index-CEvKYTCf.js   185.80 kB │ gzip: 58.65 kB
✓ built in 591ms

> v4-postcss-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v4-postcss-merge
> tsc && vite build

vite v6.1.1 building for production...
transforming...
✓ 29 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-hJ248yrd.css    4.49 kB │ gzip:  1.45 kB
dist/assets/index-9BHv8Z4X.js   207.65 kB │ gzip: 65.82 kB
✓ built in 776ms

> v4-postcss-no-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v4-postcss-no-merge
> tsc && vite build

vite v6.1.1 building for production...
transforming...
✓ 28 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-hJ248yrd.css    4.49 kB │ gzip:  1.45 kB
dist/assets/index-CGBbNVZu.js   185.80 kB │ gzip: 58.65 kB
✓ built in 517ms

> v4-vite-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v4-vite-merge
> tsc && vite build

vite v6.1.1 building for production...
transforming...
✓ 29 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-hJ248yrd.css    4.49 kB │ gzip:  1.45 kB
dist/assets/index-9BHv8Z4X.js   207.65 kB │ gzip: 65.82 kB
✓ built in 443ms

> v4-vite-no-merge@0.0.0 build /Users/jeff/git/tailwind-v4-example-sizes/packages/v4-vite-no-merge
> tsc && vite build

vite v6.1.1 building for production...
transforming...
✓ 28 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-hJ248yrd.css    4.49 kB │ gzip:  1.45 kB
dist/assets/index-CGBbNVZu.js   185.80 kB │ gzip: 58.65 kB
✓ built in 419ms
```

## CSS Output

| css file                                                                                                                                                                  |    size | gzip size | build time |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------: | --------: | ---------: |
| [v3-postcss-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v3-postcss-merge/dist/assets/index-BovOH-IT.css)       | 4.88 kB |   1.45 kB |      726ms |
| [v3-postcss-no-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v3-postcss-no-merge/dist/assets/index-BovOH-IT.css) | 4.88 kB |   1.45 kB |      591ms |
| [v4-postcss-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v4-postcss-merge/dist/assets/index-hJ248yrd.css)       | 4.49 kB |   1.45 kB |      776ms |
| [v4-postcss-no-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v4-postcss-no-merge/dist/assets/index-hJ248yrd.css) | 4.49 kB |   1.45 kB |      517ms |
| [v4-vite-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v4-vite-merge/dist/assets/index-hJ248yrd.css)             | 4.49 kB |   1.45 kB |      443ms |
| [v4-vite-no-merge](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/v4-vite-no-merge/dist/assets/index-hJ248yrd.css)       | 4.49 kB |   1.45 kB |      419ms |
