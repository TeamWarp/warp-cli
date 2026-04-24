# Changelog

## 0.4.0 (2026-04-24)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/TeamWarp/warp-cli/compare/v0.3.0...v0.4.0)

### Features

* allow `-` as value representing stdin to binary-only file parameters in CLIs ([c89d51f](https://github.com/TeamWarp/warp-cli/commit/c89d51faff98a96134a25ca4250b2fab0944f343))
* **api:** fix go edition ([2c2b64c](https://github.com/TeamWarp/warp-cli/commit/2c2b64c8bd19328a1721d954a0f69f7c9909faee))
* better error message if scheme forgotten in CLI `*_BASE_URL`/`--base-url` ([7a84031](https://github.com/TeamWarp/warp-cli/commit/7a840313a64f5125b048c3d2cbf008333a59ec39))
* binary-only parameters become CLI flags that take filenames only ([b402e99](https://github.com/TeamWarp/warp-cli/commit/b402e991cd25fccd9fb8f33c988256fe75ab451b))
* **cli:** add `--raw-output`/`-r` option to print raw (non-JSON) strings ([fa4b6ee](https://github.com/TeamWarp/warp-cli/commit/fa4b6ee181757b9b0000a97dcf85522c412ff5f8))
* **cli:** alias parameters in data with `x-stainless-cli-data-alias` ([0c0a4dd](https://github.com/TeamWarp/warp-cli/commit/0c0a4dd00c0080f2d7e2bc19c9c11af537cfbd0a))
* **cli:** send filename and content type when reading input from files ([bdb8fb7](https://github.com/TeamWarp/warp-cli/commit/bdb8fb71e4e77552d2028cdf9bf09e53ba8081cc))


### Bug Fixes

* **cli:** fix incompatible Go types for flag generated as array of maps ([10b9c42](https://github.com/TeamWarp/warp-cli/commit/10b9c42f00e3030f510c5aef5ba50708b91dd268))
* fall back to main branch if linking fails in CI ([d84b60a](https://github.com/TeamWarp/warp-cli/commit/d84b60a5ca39b44e94ffe09f52053406bed85f00))
* fix for failing to drop invalid module replace in link script ([2fdea9b](https://github.com/TeamWarp/warp-cli/commit/2fdea9b51ef1193f624f44c97c1e7dac7604fa43))
* fix for off-by-one error in pagination logic ([ada968e](https://github.com/TeamWarp/warp-cli/commit/ada968ecbb15d89390026f6341126855a4244ede))
* fix quoting typo ([e5524bf](https://github.com/TeamWarp/warp-cli/commit/e5524bfa89b3b44522a6bac5aef2abfef57db451))
* handle empty data set using `--format explore` ([7b1f206](https://github.com/TeamWarp/warp-cli/commit/7b1f2069445754c08545ee04f8f0019be1bb9f81))
* use `RawJSON` when iterating items with `--format explore` in the CLI ([79841d6](https://github.com/TeamWarp/warp-cli/commit/79841d6678285f5542c7adadd5c1fcfddab33683))


### Chores

* add documentation for ./scripts/link ([6925d95](https://github.com/TeamWarp/warp-cli/commit/6925d9577c537e300eec209c42165e6cbc18127d))
* **ci:** support manually triggering release workflow ([e78a32b](https://github.com/TeamWarp/warp-cli/commit/e78a32b29ae9f46dbd719506310568c3e6b3bdc2))
* **cli:** additional test cases for `ShowJSONIterator` ([de552f1](https://github.com/TeamWarp/warp-cli/commit/de552f1f8a3ce2dd596deb4e6b9ebb79dca68bbf))
* **cli:** fall back to JSON when using default "explore" with non-TTY ([6024dc6](https://github.com/TeamWarp/warp-cli/commit/6024dc6d3aa641ac3c1748def9c2868a0508032b))
* **cli:** let `--format raw` be used in conjunction with `--transform` ([d3be46e](https://github.com/TeamWarp/warp-cli/commit/d3be46e8d6f443e139904a3badbb5a2c56665483))
* **cli:** switch long lists of positional args over to param structs ([7644f5b](https://github.com/TeamWarp/warp-cli/commit/7644f5b2cc70b5d3c01ad16b0228709de54cf826))
* **cli:** use `ShowJSONOpts` as argument to `formatJSON` instead of many positionals ([8415de7](https://github.com/TeamWarp/warp-cli/commit/8415de7f92c10435998882978ca4fa8b12aa266e))
* **internal:** codegen related update ([1f3d83e](https://github.com/TeamWarp/warp-cli/commit/1f3d83e8106846c829b2f0c13190a2a679e7a103))
* **internal:** more robust bootstrap script ([9bf4221](https://github.com/TeamWarp/warp-cli/commit/9bf4221608d65b2a23ff264e87d8be1089ca57d8))
* mark all CLI-related tests in Go with `t.Parallel()` ([c71ca2e](https://github.com/TeamWarp/warp-cli/commit/c71ca2e8d14da48a36e983159d7b8c5d462fc27e))
* modify CLI tests to inject stdout so mutating `os.Stdout` isn't necessary ([f47ef05](https://github.com/TeamWarp/warp-cli/commit/f47ef05de36837ed7c2da89032e267ee60ee0bdd))
* switch some CLI Go tests from `os.Chdir` to `t.Chdir` ([261cda0](https://github.com/TeamWarp/warp-cli/commit/261cda0c18b4807771fe7b943a772eb7c6643685))

## 0.3.0 (2026-03-27)

Full Changelog: [v0.2.1...v0.3.0](https://github.com/TeamWarp/warp-cli/compare/v0.2.1...v0.3.0)

### Features

* **api:** update import names to warp ([f24fb41](https://github.com/TeamWarp/warp-cli/commit/f24fb413c7c1b24764782e8d7759a12fb74bf445))

## 0.2.1 (2026-03-27)

Full Changelog: [v0.2.0...v0.2.1](https://github.com/TeamWarp/warp-cli/compare/v0.2.0...v0.2.1)

## 0.2.0 (2026-03-27)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/TeamWarp/warp-cli/compare/v0.1.0...v0.2.0)

### Features

* **api:** update contact email ([23d4b66](https://github.com/TeamWarp/warp-cli/commit/23d4b66de7df979530942a11d2fd0aa9815efd74))

## 0.1.0 (2026-03-27)

Full Changelog: [v0.0.2...v0.1.0](https://github.com/TeamWarp/warp-cli/compare/v0.0.2...v0.1.0)

### Features

* **api:** add homebrew config ([7725152](https://github.com/TeamWarp/warp-cli/commit/7725152b0a3cc179eaf234d9dcea546c88a49b02))

## 0.0.2 (2026-03-27)

Full Changelog: [v0.0.1...v0.0.2](https://github.com/TeamWarp/warp-cli/compare/v0.0.1...v0.0.2)

### Chores

* configure new SDK language ([fe58288](https://github.com/TeamWarp/warp-cli/commit/fe58288d3125300426964e841ffa7902a2dc4090))
* update SDK settings ([1a479e0](https://github.com/TeamWarp/warp-cli/commit/1a479e0d867579238eea02cd0e805a864e5a435d))
* update SDK settings ([2efd1bb](https://github.com/TeamWarp/warp-cli/commit/2efd1bb638fdf06491301f09a4be557b9beb5fa0))
