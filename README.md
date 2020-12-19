# ESX NUI React Template

*This is an internal template created by @Taso and used by the ESX Dev Team 
to easily boilerplate any new NUI modules planned to use React (or
Preact with minor changes). This is also used by the internal `esx-cli`
with the `React` template.*

Although this is an internal ESX Team template, it works perfectly fine
if you wish to use it for any other purpose. 🎉

## Essential Packages
* React - v17.0
* TypeScript - v4.0
* Webpack - v5.10
* Prettier - v2.2
* ESLint - v7.16

## First Install
As with any other Node environment, you must first run one of the following commands:
```
# Yarn
yarn 
# NPM
npm i
```

## Building
To create a build for use in FiveM. Run the two following scripts 
depending on the use-case.

### Development

```
# Yarn:
yarn build:dev

# NPM
npm run build:dev 
```

### Production

```
# Yarn:
yarn build:prod

# NPM
npm run build:prod 
```

After build, these scripts can be found in the build folder of the 
project directory as shown:
```
|-- build
    |-- index.html
    |-- index.js
```

*These builds differ in a couple of ways, most specifically: process.env.NODE_ENV, 
source maps, minification, and the inclusion of a react-devtools module*

## Using React Dev-Tools

When in development mode, the builds include with them a standalone 
React DevTools bundle, that allows access to `react-devtools` comparable
to the browser environment.

First ensure you have `react-devtools` installed globally 
by running one of the following commands:

```
# Yarn
yarn global add react-devtools

# NPM
npm install -g react-devtools
```

Then run this command from your terminal environment:
```
react-devtools
```

Now start your FiveM script with the development build, and you should 
have access to the `react-devtools` just as you would in the browser!

## Linting and Style
This template also comes with a preconfigured ESLint and Prettier config.
Both of these are run when using any of the build scripts. They can 
also be run manually using:

```
# Prettier
yarn format
# ESLint
yarn lint
```

