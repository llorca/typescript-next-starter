# TypeScript Next Starter

A starter kit for developing web applications with TypeScript and Next.

* **[TypeScript](https://github.com/Microsoft/TypeScript)** for scalable, statically typed JavaScript.
* **[TSLint](https://github.com/palantir/tslint)** for TypeScript linting.
* **[Next](https://github.com/zeit/next.js)** for effortless server-side development.
* **[HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)** for providing a basic HTML structure.
* **[Normalize](https://github.com/necolas/normalize.css)** for normalizing HTML elements across browsers.
* **[commitlint](https://github.com/marionebl/commitlint)** for commit linting via **[Husky](https://github.com/typicode/husky)** Git hooks.
* **[Commitizen](https://github.com/commitizen/cz-cli)** for standardized commit messages.

## Installation

Clone this repository and delete the Git history:

```
git clone https://github.com/llorca/typescript-next-starter && rm -rf typescript-next-starter/.git
```

Search for the `TNS_CONFIG` string in the project, then replace each occurrence with your desired configuration.

Initialize as a new repository:

```
git init
```

Install the dependencies:

```
npm install
```

## Usage

Start the Next development server:

```
npm run dev
```

Commit changes with Commitizen:

```
npm run commit
```

Export a static React application:

```
npm run export
```

## License

[MIT](./LICENSE)
