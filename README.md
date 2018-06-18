# RealtyMogul Interview Assignment

## Overview

For this project, I use Webpack to bundle all assets including converting SCSS to plain CSS and ES6 to browser friendly Javascript. I chose not to use Redux to handle state because this demo application is fairly simple. Instead, I placed shared state in the `Dashboard` component, which is the closest common ancestor for every other component (aside from the App component). For testing, I use Jest and Enzyme to perform both unit and integration tests. I use Heroku to handle deployments and Express to serve this demo's static file output.

## Commands

Start dev server
```bash
npm run dev
```

Run tests
```bash
npm run test
```

Deploy
```bash
git push heroku master
```