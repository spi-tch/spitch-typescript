# Changelog

## 1.49.0 (2026-04-30)

Full Changelog: [v1.48.0...v1.49.0](https://github.com/spi-tch/spitch-typescript/compare/v1.48.0...v1.49.0)

### Features

* **api:** manual updates ([4a94645](https://github.com/spi-tch/spitch-typescript/commit/4a946455673b1eff357a1c7b793f24c173ed6baf))
* **api:** new features ([c4bf950](https://github.com/spi-tch/spitch-typescript/commit/c4bf9505337f09ddece28c0965c3b26259c5480c))
* support setting headers via env ([f34c4cd](https://github.com/spi-tch/spitch-typescript/commit/f34c4cd6bc54c3938f1103eb4c547ae6c9630652))


### Chores

* **format:** run eslint and prettier separately ([6fef537](https://github.com/spi-tch/spitch-typescript/commit/6fef537019aee8be0e4a9c54ea8325eaae77cf60))
* **internal:** codegen related update ([958f081](https://github.com/spi-tch/spitch-typescript/commit/958f081393bcab79e039f27b991db5d2ec111c32))
* **internal:** more robust bootstrap script ([bff841e](https://github.com/spi-tch/spitch-typescript/commit/bff841e4f29daf987d411a2b5a2cf1780ccd19dc))
* **tests:** bump steady to v0.22.1 ([af2f8b0](https://github.com/spi-tch/spitch-typescript/commit/af2f8b07acd5e4623fcdec2d2d15a3d6e74d980c))

## 1.48.0 (2026-04-17)

Full Changelog: [v1.47.0...v1.48.0](https://github.com/spi-tch/spitch-typescript/compare/v1.47.0...v1.48.0)

### Features

* **api:** manual updates ([ddaa9ff](https://github.com/spi-tch/spitch-typescript/commit/ddaa9ff9458ed9e1fa2782d1cf01398ae4c05f63))
* **api:** manual updates ([2bb8f63](https://github.com/spi-tch/spitch-typescript/commit/2bb8f633814e33b41a9ae9aa2afccabbe87662c9))


### Bug Fixes

* **client:** avoid removing abort listener too early ([6cdd6c9](https://github.com/spi-tch/spitch-typescript/commit/6cdd6c9a8e0e20605f7a3c5b0bf8b4a99bb18f4f))
* **client:** preserve URL params already embedded in path ([bab9984](https://github.com/spi-tch/spitch-typescript/commit/bab99843eadea910d35b0856731fd3f2613af3e8))
* **client:** use higher retry delay precision ([006c90f](https://github.com/spi-tch/spitch-typescript/commit/006c90fc01c9ec689ecd3cc2d170a434afdc1e1a))
* **docs/contributing:** correct pnpm link command ([174bdb9](https://github.com/spi-tch/spitch-typescript/commit/174bdb911924342c1194e25386b4cc4739c963f2))
* **internal:** skip tests that depend on mock server ([10c511f](https://github.com/spi-tch/spitch-typescript/commit/10c511fc5c52ca964a352e84fbd88f8f728d0bca))


### Chores

* **ci:** skip lint on metadata-only changes ([aff9520](https://github.com/spi-tch/spitch-typescript/commit/aff95204bb0a6ad744d9a4cf1bf38e84ed634348))
* **ci:** skip uploading artifacts on stainless-internal branches ([30df5a5](https://github.com/spi-tch/spitch-typescript/commit/30df5a5904e89434320f59f60f29b29d898eedd5))
* **client:** restructure abort controller binding ([cc59e7e](https://github.com/spi-tch/spitch-typescript/commit/cc59e7ecb9d2d88c06452f3722238738e86dda7b))
* **internal/client:** fix form-urlencoded requests ([f167f6a](https://github.com/spi-tch/spitch-typescript/commit/f167f6abf973e4b16c9a978fc865901f09b6d22f))
* **internal:** avoid type checking errors with ts-reset ([c801ce2](https://github.com/spi-tch/spitch-typescript/commit/c801ce2f79d3fe2c6535803d25a741c61e58e520))
* **internal:** codegen related update ([d89c3f0](https://github.com/spi-tch/spitch-typescript/commit/d89c3f0f4cd84b49012e57121d0dd0c8f84dc315))
* **internal:** codegen related update ([031cb2d](https://github.com/spi-tch/spitch-typescript/commit/031cb2d86acd7e851b94cad2085eaf315b3e3c56))
* **internal:** fix pagination internals not accepting option promises ([1737108](https://github.com/spi-tch/spitch-typescript/commit/1737108fdd1fafdab8f621d1d10b415381851dd4))
* **internal:** move stringifyQuery implementation to internal function ([01f5673](https://github.com/spi-tch/spitch-typescript/commit/01f5673314381c827acf1f1a966947d78c86a5f9))
* **internal:** tweak CI branches ([7c91860](https://github.com/spi-tch/spitch-typescript/commit/7c918606efe229ffd9ef8af2b8be8c3b369f7caa))
* **internal:** update dependencies to address dependabot vulnerabilities ([1e3aa39](https://github.com/spi-tch/spitch-typescript/commit/1e3aa3984789b2f505006330fc52962f7cacb154))
* **internal:** update gitignore ([ecef029](https://github.com/spi-tch/spitch-typescript/commit/ecef0291ef2d878e8aa1865bd6498d5ee0737b99))
* **internal:** update multipart form array serialization ([5f701dc](https://github.com/spi-tch/spitch-typescript/commit/5f701dc3ff8fb6e85178e011a580bed8056cd097))
* **test:** do not count install time for mock server timeout ([78e07b5](https://github.com/spi-tch/spitch-typescript/commit/78e07b56dcf1f20271e017149a6b96d9addd9c19))
* **tests:** bump steady to v0.19.4 ([6c0c3b6](https://github.com/spi-tch/spitch-typescript/commit/6c0c3b6dd20661da196eda2c15399996cb95eabf))
* **tests:** bump steady to v0.19.5 ([b4bdba6](https://github.com/spi-tch/spitch-typescript/commit/b4bdba68d5213c9d46da15f1c2e19705ff634ab0))
* **tests:** bump steady to v0.19.6 ([d1e1fc6](https://github.com/spi-tch/spitch-typescript/commit/d1e1fc61d519a70cafdb0a4ce9d49c8dc4eac890))
* **tests:** bump steady to v0.19.7 ([90530ab](https://github.com/spi-tch/spitch-typescript/commit/90530ab91735251859adb5769f0f0a23ae98541b))
* **tests:** bump steady to v0.20.1 ([0aa61e1](https://github.com/spi-tch/spitch-typescript/commit/0aa61e13e3dafcd262c8bbb77096e331e1d8c9e4))
* **tests:** bump steady to v0.20.2 ([acfb6c3](https://github.com/spi-tch/spitch-typescript/commit/acfb6c30381addd397a6bc17fc37eff7ed7ad657))
* update mock server docs ([851d4e6](https://github.com/spi-tch/spitch-typescript/commit/851d4e671c828a173bca439e97c88e8392b54291))
* update placeholder string ([3af8498](https://github.com/spi-tch/spitch-typescript/commit/3af8498a2fda2af26ab2ba838ed943647a9cdba3))


### Refactors

* **tests:** switch from prism to steady ([fbebf72](https://github.com/spi-tch/spitch-typescript/commit/fbebf7256c33b8e0d21fe25f2a464892da34fcca))

## 1.47.0 (2026-02-04)

Full Changelog: [v1.45.0...v1.47.0](https://github.com/spi-tch/spitch-typescript/compare/v1.45.0...v1.47.0)

### Features

* **api:** manual updates ([7260b8c](https://github.com/spi-tch/spitch-typescript/commit/7260b8c0e9d6007e98623c835eb8da792e7fe9b3))
* **api:** manual updates ([a0f115d](https://github.com/spi-tch/spitch-typescript/commit/a0f115de9482d016ad005c3e3b4d48a7959b76af))
* **api:** manual updates ([1d85ffe](https://github.com/spi-tch/spitch-typescript/commit/1d85ffefd09a416610517cd5b7465297f0038796))
* **api:** manual updates ([a2cc6f9](https://github.com/spi-tch/spitch-typescript/commit/a2cc6f9d2e5084314873d5a2b0f0913850b685a9))

## 1.45.0 (2026-02-03)

Full Changelog: [v1.26.0...v1.45.0](https://github.com/spi-tch/spitch-typescript/compare/v1.26.0...v1.45.0)

### Bug Fixes

* **client:** avoid memory leak with abort signals ([f828d8a](https://github.com/spi-tch/spitch-typescript/commit/f828d8a50752ef3f2cc78a16f16d1534e81f35ba))


### Chores

* **ci:** upgrade `actions/github-script` ([55e152b](https://github.com/spi-tch/spitch-typescript/commit/55e152b414c7a6c607ce85bfa76e1a8795040579))
* **client:** do not parse responses with empty content-length ([6359a76](https://github.com/spi-tch/spitch-typescript/commit/6359a769314f4915f681cbc74640b64a4d7eca3b))

## 1.26.0 (2026-01-22)

Full Changelog: [v1.25.0...v1.26.0](https://github.com/spi-tch/spitch-typescript/compare/v1.25.0...v1.26.0)

### Features

* **api:** manual updates ([252036e](https://github.com/spi-tch/spitch-typescript/commit/252036ed3b25339df3addfa87dfe01b9f6cb961b))
* **api:** manual updates ([7422139](https://github.com/spi-tch/spitch-typescript/commit/74221397a5cafeb7994c2f48407a1c2585b08c44))
* **api:** manual updates ([8ec3097](https://github.com/spi-tch/spitch-typescript/commit/8ec30975d5a3d2a57fdf275ddbb54126fbf9b748))
* **api:** manual updates ([4c5ce22](https://github.com/spi-tch/spitch-typescript/commit/4c5ce2282077efc1422313991eb76979dfb1be93))
* **api:** manual updates ([07cd487](https://github.com/spi-tch/spitch-typescript/commit/07cd4876a5ea9e441a7283052fb4e0bb46eed76a))
* **api:** manual updates ([42f9e9a](https://github.com/spi-tch/spitch-typescript/commit/42f9e9a0c516ce707d82a0669e92874cf7b4e5e8))
* **api:** manual updates ([b2430c5](https://github.com/spi-tch/spitch-typescript/commit/b2430c5fafc92e5ed7624c0ce5b2c65502484fe3))
* **api:** manual updates ([21374e2](https://github.com/spi-tch/spitch-typescript/commit/21374e2085569c5f0ac1d9c94dded8156064d12c))
* **files:** add support for string alternative to file upload type ([b668757](https://github.com/spi-tch/spitch-typescript/commit/b668757cd07b6925ab5743a2474b39c61248da96))


### Bug Fixes

* **mcp:** correct code tool API endpoint ([0c41fc8](https://github.com/spi-tch/spitch-typescript/commit/0c41fc8ec6fad7c1acef18fb06004c2c449b9eb1))
* **mcp:** return correct lines on typescript errors ([1f0b125](https://github.com/spi-tch/spitch-typescript/commit/1f0b125ea4ccba27c1aa082455491c5385e9d9b4))


### Chores

* **client:** fix logger property type ([3d70a93](https://github.com/spi-tch/spitch-typescript/commit/3d70a93fa5b3b0d0b415b3cb6f454370369e1059))
* configure new SDK language ([5d0134a](https://github.com/spi-tch/spitch-typescript/commit/5d0134a9c1049f4aa36c89d4ecb886d5654c8b88))
* **internal:** codegen related update ([2ebf0f1](https://github.com/spi-tch/spitch-typescript/commit/2ebf0f10301e32fdbabbaf62c12b12483e85fac9))
* **internal:** codegen related update ([c78d93d](https://github.com/spi-tch/spitch-typescript/commit/c78d93d3dde3934686a97747dfa815a91adf6ff1))
* **internal:** codegen related update ([451a63a](https://github.com/spi-tch/spitch-typescript/commit/451a63a30fb6f9870fa391ed20f6217a34b2319e))
* **internal:** codegen related update ([e4418bf](https://github.com/spi-tch/spitch-typescript/commit/e4418bfdd569a13b8701d570fd092ef4423bf132))
* **internal:** codegen related update ([d880014](https://github.com/spi-tch/spitch-typescript/commit/d88001492af3c2d681a6bb80286d5e345c8e7114))
* **internal:** upgrade eslint ([04953d8](https://github.com/spi-tch/spitch-typescript/commit/04953d89286bdbd2746fb4c88b3c7926c207a002))

## 1.25.0 (2025-11-04)

Full Changelog: [v1.24.0...v1.25.0](https://github.com/spi-tch/spitch-typescript/compare/v1.24.0...v1.25.0)

### Features

* **api:** manual updates ([a4116f0](https://github.com/spi-tch/spitch-typescript/commit/a4116f00c3073a3144a281f7a1604b2712903831))

## 1.24.0 (2025-10-16)

Full Changelog: [v1.23.0...v1.24.0](https://github.com/spi-tch/spitch-typescript/compare/v1.23.0...v1.24.0)

### Features

* **api:** manual updates ([daf1ee3](https://github.com/spi-tch/spitch-typescript/commit/daf1ee31ab03f31493b6330f9081fe4f69c15a64))

## 1.23.0 (2025-10-07)

Full Changelog: [v1.22.0...v1.23.0](https://github.com/spi-tch/spitch-typescript/compare/v1.22.0...v1.23.0)

### Features

* **api:** manual updates ([dbedd94](https://github.com/spi-tch/spitch-typescript/commit/dbedd941bac81123de666324338d80b703155a7f))


### Chores

* **internal:** use npm pack for build uploads ([d4b493c](https://github.com/spi-tch/spitch-typescript/commit/d4b493c6d8fa942b2635359e240d751c9b5bccc7))

## 1.22.0 (2025-10-06)

Full Changelog: [v1.21.0...v1.22.0](https://github.com/spi-tch/spitch-typescript/compare/v1.21.0...v1.22.0)

### Features

* **api:** update via SDK Studio ([7a00c7f](https://github.com/spi-tch/spitch-typescript/commit/7a00c7f914ee0b5c7561b1b1a82df1718b5fc8ad))
* **api:** update via SDK Studio ([ce17d2f](https://github.com/spi-tch/spitch-typescript/commit/ce17d2f0347935cdc6ab70e97ae74010f2c19df3))
* **api:** update via SDK Studio ([737a0bc](https://github.com/spi-tch/spitch-typescript/commit/737a0bc7b4b28723e725474844fa85bfc926e092))
* **api:** update via SDK Studio ([2e7d18d](https://github.com/spi-tch/spitch-typescript/commit/2e7d18d58f7263095303fc6e809289fe45674f80))
* **api:** update via SDK Studio ([7a1064a](https://github.com/spi-tch/spitch-typescript/commit/7a1064a21ff0f29a22de6f366d83cbeba0737154))
* **api:** update via SDK Studio ([f73d00e](https://github.com/spi-tch/spitch-typescript/commit/f73d00ee3d5701d1f1904402353ef7f70c70f93d))
* **api:** update via SDK Studio ([a34386f](https://github.com/spi-tch/spitch-typescript/commit/a34386f023f82cb9cea023b634fd2bc422845015))
* **api:** update via SDK Studio ([034dd1d](https://github.com/spi-tch/spitch-typescript/commit/034dd1df081f1590dfeaeef4e57baf849bbc6e9e))


### Chores

* sync repo ([58d95ba](https://github.com/spi-tch/spitch-typescript/commit/58d95ba27cc553cce62c7398351872a18e80de1e))
* update SDK settings ([f9860e3](https://github.com/spi-tch/spitch-typescript/commit/f9860e3f6ec93c5698445574b3b43b3c373a61f4))
* update SDK settings ([62b07a3](https://github.com/spi-tch/spitch-typescript/commit/62b07a379a86104a2ed9fd8fbeb459f352b13071))
* update SDK settings ([fa5033d](https://github.com/spi-tch/spitch-typescript/commit/fa5033d84fcf7235a201072b965b65fcf771b492))

## 0.1.0 (2025-10-06)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/spi-tch/spitch-typescript/compare/v0.0.1...v0.1.0)

### Features

* **api:** update via SDK Studio ([7a00c7f](https://github.com/spi-tch/spitch-typescript/commit/7a00c7f914ee0b5c7561b1b1a82df1718b5fc8ad))
* **api:** update via SDK Studio ([ce17d2f](https://github.com/spi-tch/spitch-typescript/commit/ce17d2f0347935cdc6ab70e97ae74010f2c19df3))
* **api:** update via SDK Studio ([737a0bc](https://github.com/spi-tch/spitch-typescript/commit/737a0bc7b4b28723e725474844fa85bfc926e092))
* **api:** update via SDK Studio ([2e7d18d](https://github.com/spi-tch/spitch-typescript/commit/2e7d18d58f7263095303fc6e809289fe45674f80))
* **api:** update via SDK Studio ([7a1064a](https://github.com/spi-tch/spitch-typescript/commit/7a1064a21ff0f29a22de6f366d83cbeba0737154))
* **api:** update via SDK Studio ([f73d00e](https://github.com/spi-tch/spitch-typescript/commit/f73d00ee3d5701d1f1904402353ef7f70c70f93d))
* **api:** update via SDK Studio ([a34386f](https://github.com/spi-tch/spitch-typescript/commit/a34386f023f82cb9cea023b634fd2bc422845015))
* **api:** update via SDK Studio ([034dd1d](https://github.com/spi-tch/spitch-typescript/commit/034dd1df081f1590dfeaeef4e57baf849bbc6e9e))


### Chores

* sync repo ([58d95ba](https://github.com/spi-tch/spitch-typescript/commit/58d95ba27cc553cce62c7398351872a18e80de1e))
* update SDK settings ([f9860e3](https://github.com/spi-tch/spitch-typescript/commit/f9860e3f6ec93c5698445574b3b43b3c373a61f4))
* update SDK settings ([62b07a3](https://github.com/spi-tch/spitch-typescript/commit/62b07a379a86104a2ed9fd8fbeb459f352b13071))
* update SDK settings ([fa5033d](https://github.com/spi-tch/spitch-typescript/commit/fa5033d84fcf7235a201072b965b65fcf771b492))
