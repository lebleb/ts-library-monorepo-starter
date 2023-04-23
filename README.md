# Monorepo + TypeScript + Jest + Eslint

This is a monorepo starter kit with TypeScript, Jest, ESLint, and Commitlint pre-configured. The main purpose of this repository is to provide a zero-config project setup for developers who want to start writing code immediately without worrying about the initial project setup.

## Features

- **Monorepo** structure with [Yarn workspaces](https://yarnpkg.com/features/workspaces)
- **TypeScript** support with [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- **Jest** for unit testing with [ts-jest](https://github.com/kulshekhar/ts-jest)
- **ESLint** for code linting with [StandardJS - JavaScript Standard Style](https://standardjs.com/)
- **Commitlint** for commit message linting with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Getting started

To use this starter kit, you need to follow these simple steps:

1. Clone this repository:

   **HTTPS:**
   ```sh
   git clone https://github.com/lebleb/ts-library-monorepo-starter
   ```
   **SSH:**
   ```sh
   git clone git@github.com:lebleb/ts-library-monorepo-starter.git
   ```

2. Install dependencies using Yarn:

   ```sh
   cd starter-kit
   yarn
   ```

3. Start writing your code!

## Available Scripts

In the project directory, you can run the following scripts:

### `yarn test`

Runs unit tests using Jest.

### `yarn lint`

Runs ESLint on all TypeScript files in the project.

### `yarn format`

Formats all TypeScript files in the project using [StandardJS - JavaScript Standard Style](https://standardjs.com/)

### `yarn build`

Builds the TypeScript code into the `dist` directory.

## Contributing

If you want to contribute to this project, please fork the repository and create a pull request with your changes. Make sure to follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) format for your commit messages.

## License

This project is licensed under the [MIT License](LICENSE).
