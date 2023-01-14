# dashboard-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


# Dashboard

Crypto/asset dashboard

### Description

Simple front-end app, that is able to calculate real-time scalar values and draw charts for given equations.

### Requirements

- list of possible assets (crypto assets, currencies, comodities).
  Every asset should have distinct ticker e.g.
  * `XBTC`, `XLTC` - Bitcoin, Litecoin
  * `NASDAQ` - stock market
  * `XAU` - gold price
  * `PLN`, `EUR` - currencies
  Every asset is denominated to dollar for convenience
- input field for user equation
- output actual chart for this equation

### Motivation

Possibility to draw simple or more complex charts using markets data.
For example we input `XBTC / XAU`, to see how much Bitcoin is worth in Gold.
To see how much dollar is worth in Bitcoin we can use `1 / XBTC` equation.
Dashboard should also have implemented plenty of functions e.g. `AVG(...)` for average value.
