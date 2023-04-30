# Monorepo + TypeScript + Jest + Eslint

**This starter kit includes a TypeScript build that optimizes the build for speed, eliminating the need to build each project individually.**

This is a monorepo starter kit with TypeScript, Jest, ESLint, and Commitlint pre-configured. The main purpose of this repository is to provide a zero-config project setup for developers who want to start writing code immediately without worrying about the initial project setup.


## Features

- **Yarn 2+** package manager [Yarn](https://yarnpkg.com/)
- **Monorepo** structure with [Yarn workspaces](https://yarnpkg.com/features/workspaces)
- **TypeScript** support with [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- **Jest** for unit testing with [ts-jest](https://github.com/kulshekhar/ts-jest)
- **ESLint** for code linting with [StandardJS - JavaScript Standard Style](https://standardjs.com/)
- **Commitlint** for commit message linting with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- **CI/CD** process for each PR with [GutHub Workflow](https://docs.github.com/en/actions/using-workflows/about-workflows)
- **Automatic versioning** with [Changesets](https://github.com/changesets/changesets)
- **Publishing** each package to the [NPM](https://www.npmjs.com/)

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

### `yarn clean`

Cleans the compiled codes and ts schema files.

## Steps to Publish a New Version of Packages Using Changesets

1. Make the necessary changes to your code and create a pull request.

2. Before the pull request is merged, run the following command to create a new changeset:

   ```sh
   yarn changeset
   ```
3. Answer the questions that are prompted to describe the changes you made. The changeset will be added to the changesets/ directory.

4. Push the changeset commit to your branch.

5. When you're ready to release the new version of your package, merge your PR into the main branch.

6. The changeset library will automatically create a new pull request titled "Release [VERSION]" to release the new version of your package. Review the changes and merge the pull request.

7. Once the pull request is merged, the changeset library will automatically publish the new version of your package to the npm registry.

Using changesets makes it easy to manage package versions in your GitHub repository, and automates the process of releasing new versions to the npm registry. By following these steps, you can publish new versions of your packages quickly and efficiently, with minimal manual intervention.

## Contributing

If you want to contribute to this project, please fork the repository and create a pull request with your changes. Make sure to follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) format for your commit messages.

## License

This project is licensed under the [MIT License](LICENSE).
