# TaskApp FRONTEND - Good coding practices

In this project different plugins and tools are installed and used to format and improve the developed code.

IETI - LAB06

2022-2.

## Development

This project is developed following the conditions of the following repository:

[ eslint-formatter ](https://github.com/CAPJackie/react-eslint-formatter)

### Prerequisites

- [Node.js and npm command](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - npm is the default package management system for Node.js, a runtime environment for JavaScript.

### Installing

To download the project run:

```bash
git clone https://github.com/ZulyVargas/TASKAPP-FRONTEND.git
git checkout eslint_formatter
```

Install the required libraries:

```bash
npm install @mui/icons-material @mui/material @emotion/styled     @emotion/react
npm install react-router-dom
npm install -g sass
```

If you have problems with prettier install:

```bash
npm install --save-dev eslint-config-prettier
```

Run the app:

```bash
npm install
npm start
```

## Step by step:

1. Install Prettier plugin:

![prettier](/img/prettier.png)

2. Install Eslint plugin:

![eslint](/img/eslint.png)

### ESLint:

1. Open your package.json, go down there on the eslintConfig and leave it as the next is:

![p.json](/img/package-json.png)

2. Run npm i -D eslint:

![run](/img/run.png)

3. Add this 2 new scripts to the package.json:

![run](/img/lint.png)

4. If you installed eslint plugin the eslint errors will popup when you hover on warning messages on your code, for instance:

![run](/img/prettierOk.png)

### Prettier

1. Add a new key down below eslintConfig, like this:

![prettier](/img/newPrettier.png)

2. Go to file/preferences/settings another alternative is pressing on windows ctrl +, On the User configuration open Text Editor / Formatting. Click on Format On Save checkbox:

![onSave](/img/formatOnSave.png)

### Husky

1. Run
   npm i -D husky
   npm set-script prepare "husky install"
   npm run prepare
   npm i -D prettier
   npm set-script format "prettier --write ."
   npx husky add .husky/pre-commit "npm run lint:fix && npm format"


## Built With

- [Visual Studio Code](https://code.visualstudio.com) - is a source code editor developed by Microsoft. It is free and multiplatform software, available for Windows, GNU/Linux and macOS.
- [REACT](https://es.reactjs.org) - is an open source Javascript library designed to create user interfaces to facilitate the development of single-page applications.

- [MUI CORE](https://mui.com/material-ui/getting-started/overview/)- is an open-source React component library that implements Google's Material Design.

- [SASS](https://sass-lang.com)- Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables to use things like variables, nested rules, inline imports and more.

## Authors

- **Zuly Valentina Vargas Ramírez**
