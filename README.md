# Chuck Norris Facts searcher

## Urls

### Production URL

[https://chuck-norris-facts-netojose.vercel.app](https://chuck-norris-facts-netojose.vercel.app)

### Code source repository

[https://github.com/netojose/chuck-norris-facts](https://github.com/netojose/chuck-norris-facts)

## Used technologies

-   [React](https://reactjs.org)
-   [TypeScript](https://www.typescriptlang.org)
-   [Emotion](https://emotion.sh)
-   [Dotenv](https://www.npmjs.com/package/dotenv-webpack)
-   [Eslint](https://eslint.org)
-   [Enzyme](https://enzymejs.github.io/enzyme)
-   [Prettier](https://prettier.io)
-   [Cypress](https://www.cypress.io)
-   [Jest](https://jestjs.io)

> > I installed `jest` and `enzyme`, but according to test requirements, only e2e tests using `cypress` was made.

## Useful information

I'm not using ay famous **boilerplate** for this test. Since is a simple project, with a few features, I focused on the project needs.

The jest and enzyme packages are installed for unit testing, but aren't used. The test specs says to test in Cypress, for e2e testing. Jest and enzyme are installed and configured, and ready to be used.

I'm using TypesCript instead of Javascript, because of Static Type-checking (there are other reasons, but this for me, it's the most important).

This project was made with **accessibility** in mind. All [a11y](https://www.a11yproject.com/checklist) items was approved, and the Eslint is also validating. The interface is **responsive** too.

The application has **RTL support**. I added a toggle button on the top left, to change the content direction.

For **styles**, I'm using emotion. I love to use CSS-in-JS, because this approach avoid some css problems (dead code elimination, scope isolation) and gives me some benefits, like linting, the power a programming language, pass information between layers (from the behavior to presentation layer), code reusing, dynamic styling, specificity, avoid naming conventions, minification, etc. I chose emotion because is simple and I like to have styles close to the components.

I didn't **comment** the code, because the project is very simple. The code is self-explanatory (split into small blocks, methods and variables with meaningful names, etc.). If a code needs to be commented, it is because it is complex. And if it is complex, there is something wrong.

About the **state management**, wasn't necessary (I like to avoid over engineering). I used the _React context API_ just to manage the form fields. This is useful to avoid take care about each form field. Everything is wrapped inside a form, and I have full control, perfect for big forms. Also is useful to other form implementations (error messages, validation, etc.). I decided to implement by myself for this application, but some some react packages can be used also.

## Available npm scripts

### Building the `bundle`

```shell
npm run build
```

### Run development mode

```shell
npm start
```

### Building the `bundle` and run server

```shell
npm start:prod
```

### Type-Checking the repo

```shell
npm run type-check
```

### Type-Checking the repo in --watch mode:

```shell
npm run type-check:watch
```

### Linting

```shell
npm lint
```

### Run unit tests (jest)

```shell
npm test:unit
```

### Run e2e tests (cypress)

```shell
npm test:e2e
```

### Run e2e tests (cypress) opening browser

```shell
npm test:e2e:open
```
