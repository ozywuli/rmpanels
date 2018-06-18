# RealtyMogul Interview Assignment

## Overview

For this project, I used Webpack to bundle all assets including converting SCSS to plain CSS and ES6 to browser friendly Javascript. I chose not to use Redux to handle state because this demo application is fairly simple. Instead, I placed shared state in the `Dashboard` component, which is the closest common ancestor for every other component (aside from the App component). For testing, I used Jest and Enzyme to perform both unit and integration tests. For deployment and hosting, I chose Heroku because it's simple to use and offers a free tier. Lastly, a small Express server is used to serve this demo's static file output.

[https://enigmatic-badlands-26636.herokuapp.com/](https://enigmatic-badlands-26636.herokuapp.com/)

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