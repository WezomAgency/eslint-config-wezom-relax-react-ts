# eslint-config-wezom-relax

[![license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/WezomAgency/eslint-config-wezom-relax/blob/master/LICENSE)
[![npm](https://img.shields.io/badge/npm-install-orange.svg)](https://www.npmjs.com/package/eslint-config-wezom-relax)
[![WezomAgency](https://img.shields.io/badge/wezom-agency-red.svg)](https://github.com/WezomAgency)


> An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs).


## What is under the hood?

- parser: _[babel-eslint](https://github.com/babel/babel-eslint)_
- extends:
	- _[eslint-config-standard](https://github.com/standard/eslint-config-standard)_
	- _[eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)_
- rules:
	- no-tabs: _off_
	- import/no-unresolved: _off_
	- import/namespace: _off_
	- indent: _tabs_
	- semi: _on_

---

## Install

```bash
npm i eslint-config-wezom-relax
```

---

## Usage

Add this to your [.eslintrc file](https://eslint.org/docs/user-guide/configuring#configuration-file-formats):

```json
{
  "extends": "eslint-config-wezom-relax"
}
```

_Note: You can omitted the `eslint-config-` prefix since it is automatically assumed by ESLint._


---

## Readme badges

[![Javascript Style Guide](https://img.shields.io/badge/code_style-wezom_relax-red.svg)](https://github.com/WezomAgency/eslint-config-wezom-relax)

```md
[![Javascript Style Guide](https://img.shields.io/badge/code_style-wezom_relax-red.svg)](https://github.com/WezomAgency/eslint-config-wezom-relax)
```

[![Javascript Style Guide](https://raw.githubusercontent.com/WezomAgency/eslint-config-wezom-relax/master/assets/badge.jpg)](https://github.com/WezomAgency/eslint-config-wezom-relax)

```md
[![Javascript Style Guide](https://raw.githubusercontent.com/WezomAgency/eslint-config-wezom-relax/master/assets/badge.jpg)](https://github.com/WezomAgency/eslint-config-wezom-relax)
```
