<div id="top"></div>
<!--
*** Thanks for checking out this README. If you have a suggestion
*** that would make this project better, please fork the repo
*** and create a pull request or simply open an issue with the
*** tag "enhancement". Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SCREENSHOT -->

<div align="center">

[![base][screenshot]][screenshot-url]

## BASE

  <p align="center">
    A Minimalistic Webpack/React Boilerplate for TypeScript projects.
  </p>

![Version][version-shield]
![Commit][commit-shield]
[![Issues][issues-shield]][issues-url]
[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]

  <p align="center">
    <a href="https://base.moquette.us">View Demo</a>
    <a href="https://github.com/moquette/base/issues">Report Bug</a>
    <a href="https://github.com/moquette/base/issues">Request Feature</a>
    <br />
        <a href="https://github.com/moquette/base"><strong>Explore the docs »</strong></a>
  </p>
</div>
<br/>
<br/>

<!-- ABOUT -->

# About The Project

I use React.js for almost every front-end project I create. Here's a solid boilerplate I use for modern React TypeScript based projects.

- Base is a lean and simple alternative for CRA (Create React App);
- We can eliminate all of its disadvantages by setting up dependencies and configs ourselves (add dependencies as needed) making it easier to add/modify build configs;
- Minimal webpack and babel configs required to run a react application;
- Production-ready build set up, with linters and pre-commit hooks.
- Support for both TSX and JSX
<br/>
<br/>
<p align="right">(<a href="#top">back to top</a>)</p>
<br/>
<br/>

<!-- BUILT WITH -->

# Built With

- [React](https://reactjs.org/) / [React Router](https://reactrouter.com)
- [Webpack](https://webpack.js.org) / [Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer/)
- [TailwindCSS](https://tailwindcss.com) / [Automatic Class Sorting](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier/)
- [Sass](https://sass-lang.com/) / [Less](https://lesscss.org/) / [PostCSS](https://postcss.org/)
- [TypeScript](https://www.typescriptlang.org) / [Babel](https://babeljs.io/)
- [Prettier](https://prettier.io) / [ESLint](http://eslint.org) / [Airbnb](https://github.com/airbnb/javascript)
- [Husky](https://typicode.github.io/husky/#/) / [Lint-staged](https://github.com/okonet/lint-staged#readme)
<br/>
<br/>
<p align="right">(<a href="#top">back to top</a>)</p>
<br/>
<br/>

<!-- USAGE -->

# Usage

Clone:

```bash
git clone https://github.com/moquette/base.git
```

<br/>
<br/>

<!-- DEVELOPMENT -->

## Development

1: Change to project directory

```bash
cd base
```

2: Install dependencies

```
yarn
```

3: Start development server

```
yarn start
```

Pages served from http://localhost:3000.

**NOTE:**
Auto type checking, linting and formatting performed on pre-commit.
<br/>
<br/>

<!-- PRODUCTION -->

## Production

Build:

```bash
yarn build
```

The build will be placed in the `build` directory. You can change the build directory in the webpack config.

<br/>
<br/>
<p align="right">(<a href="#top">back to top</a>)</p>
<br/>
<br/>

<!-- SCRIPTS -->

# Scripts

**yarn start:**

Start development server and lanches default browser.

**yarn build:**

Builds and bundles resources for production.

**yarn lint:**

Lints, formats and typechecks all files in the `src` directory.

**yarn profile:**

Visualize size of webpack output files with an interactive zoomable treemap.
**Note:** Make sure to build project (`yarn build`) prior to analyzing.

<br/>
<br/>
<p align="right">(<a href="#top">back to top</a>)</p>
<br/>
<br/>

<!-- EXTRAS -->

# Extras

## Universal Alias

(Absolute Path Importing)

File import can use either relative or absolute paths with the **@/** universal alias:

**Relative Importing**

```typescript
import { EmailJS } from '../../components/EmailJS'
```

**Universal Alias Importing**

```typescript
import { EmailJS } from '@components/EmailJS'
```

**Preconfigured Aliases:**
(src/tsconfig.json)

```
"@src/*" : ["src/*"],
"@images/*" : ["src/assets/images/*"],
"@styles/*" : ["src/assets/styles/*"],
"@pages/*" : ["src/pages/*"],
"@hooks/*" : ["src/hooks/*"],
"@components/*" : ["src/components/*"]
```

<br/>
<br/>

## TailwindCSS / SASS

TailwindCSS / Sass and PostCSS support.

`tailwind.config.js` is located in the project's root an initialzed in `styles/global.scss` . Visit [TailwindCSS](https://tailwindcss.com/docs/configuration) for more information.

<br/>
<br/>

## Yarn / NPM

This boilerplate uses [Yarn 3](https://yarnpkg.com) by default. Nonetheless, you may switch to npm by deleting the `yarn.lock` file, and installing dependencies with `npm install`. Remember to change any CI workflows, Husky Git hooks, and lint-staged steps to use npm commands.

<br/>
<br/>
<p align="right">(<a href="#top">back to top</a>)</p>
<br/>
<br/>

<!-- CONTRIBUTING -->

# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br/>
<br/>
<p align="right">(<a href="#top">back to top</a>)</p>
<br/>
<br/>

<!-- LICENSE -->

# License

This project is open source and available under the [MIT License](LICENSE).

<br/>
<br/>
<p align="right">(<a href="#top">back to top</a>)</p>
<br/>
<br/>

  <!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!--
  https://simpleicons.org/
  https://github.com/simple-icons/simple-icons/blob/develop/slugs.md
  https://shields.io/category/platform-support
-->

[version-shield]: https://img.shields.io/github/package-json/v/moquette/base?style=for-the-badge&color=blue
[commit-shield]: https://img.shields.io/github/last-commit/moquette/base?style=for-the-badge&color=blue
[contributors-shield]: https://img.shields.io/github/contributors/moquette/base.svg?style=for-the-badge&color=blue
[contributors-url]: https://github.com/moquette/base/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/moquette/base.svg?style=for-the-badge
[forks-url]: https://github.com/moquette/base/network/members
[stars-shield]: https://img.shields.io/github/stars/moquette/base.svg?style=for-the-badge
[stars-url]: https://github.com/moquette/base/stargazers
[issues-shield]: https://img.shields.io/github/issues/moquette/base.svg?style=for-the-badge
[issues-url]: https://github.com/moquette/base/issues
[license-shield]: https://img.shields.io/github/license/moquette/base.svg?style=for-the-badge
[license-url]: https://github.com/moquette/base/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jmoquette/
[screenshot]: docs/images/screenshot.png
[screenshot-url]: https://base.moquette.us
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
[webpack.js.com]: https://img.shields.io/badge/Webpack-000?style=for-the-badge&logo=webpack
[webpack-url]: https://webpack.js.org
[react.js]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=fff
[react-url]: https://reactjs.org/
[reactrouter.com]: https://img.shields.io/badge/react_router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=fff
[reactrouter-url]: https://reactrouter.com
[tailwindcss.com]: https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[tailwind-url]: https://tailwindcss.com
[sass-lang.com]: https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white
[sass-url]: https://sass-lang.com
[postcss.org]: https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white
[postcss-url]: https://postcss.org
[typescriptlang.org]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://typescriptlang.org/
[prettier.io]: https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white
[prettier-url]: https://prettier.io/
