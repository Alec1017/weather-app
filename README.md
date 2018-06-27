# Starter code for a react application

This code is meant to be a human-readable base for starting a react application. It's transparent enough to see how the setup of a react app works without getting you lost with too many configuration settings. 

## Usage

Getting started
```
yarn install
yarn start
```

Building a production bundle file
```
yarn build
```

Running tests
```
yarn test
```

Linting code
```
yarn lint
```

## Dependencies
- [react](https://reactjs.org/docs/react-api.html) - The entry point to the React library
- [react-dom](https://reactjs.org/docs/react-api.html) - DOM-specific methods that can be used at the top level of an app

## Dev Dependencies
- [babel-core](https://new.babeljs.io/docs/en/next/babel-core.html) - The main Babel package to perform transformations
- [babel-cli](https://babeljs.io/docs/usage/cli/) - Compiles files from the command line
- [babel-preset-env](https://babeljs.io/docs/plugins/preset-env/) - Preset that transforms ES6 code into traditional javascript
- [babel-preset-react](https://babeljs.io/docs/plugins/preset-react/) - Preset that transforms JSX code into traditional javascript
------
- [webpack](https://webpack.js.org/) - Bundles javascript files for use in a browser
- [webpack-cli](https://github.com/webpack/webpack-cli) - Run Webpack scripts from the command line
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server) - Development server that provides live reloading
------
- [babel-loader](https://github.com/babel/babel-loader) - Transpiles javascript files using Babel and Webpack
- [css-loader](https://github.com/webpack-contrib/css-loader) - Enables Webpack to resolve CSS files into a string
- [style-loader](https://github.com/webpack-contrib/style-loader) - Adds CSS to the DOM by injecting a ```<style>``` tag
------
- [eslint](https://eslint.org/) - A pluggable linting utility
- [babel-eslint](https://github.com/babel/babel-eslint) - Parser to replace eslint default if using class properties, decorators, async/await, types
- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Airbnb style guide based ESLint rules
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Required for linting of ES6 import/export syntax
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Support for accessibility rules on JSX elements
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - React specific linting rules for ESLint
------
- [jest](https://facebook.github.io/jest/) - A zero-configuration react and javascript testing platform
- [babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest) - Transform react syntax using babel into testable javascript
