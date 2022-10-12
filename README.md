# TaskApp FRONTEND - PWA - STATE MANAGEMENT

In this project the tasks web app is converted into a PWA. Also, useContext is used to add the light and dark theme functionality to the application.

IETI - LAB07

2022-2.

## Development

This project is developed following the conditions of the following repository:

[ react-state-management-pwa ](https://github.com/CAPJackie/react-state-management-pwa)

### Prerequisites

- [Node.js and npm command](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - npm is the default package management system for Node.js, a runtime environment for JavaScript.

### Installing

To download the project run:

```bash
git clone https://github.com/ZulyVargas/TASKAPP-FRONTEND.git
git checkout state-management-pwa
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

### Part 1: PWA

1. Run the application. Lighthouse Tab -> Configuration:

   ![lighthouse-config](/img/lighthouse-config.png)

2. Generate report. Result:

   ![report](/img/report.png)

3. File worker.js in the public folder. In line 4 the application paths were added:

   ![worker](/img/worker.png)

4. Script in index.html:

   ![index-script](/img/indexhtml.png)

5. serviceWorkerRegistration.js with the register function:

   ![serviceWorkerReg](/img/serviceWorkerReg.png)

   Calling the function:

   ![](/img/registerFunc.png)

6. Running the app again with **npm start**:

   ![](/img/installableOk.png)
   ![](/img/installableOk2.png)

### Part 2: State Management

## Built With

- [Visual Studio Code](https://code.visualstudio.com) - is a source code editor developed by Microsoft. It is free and multiplatform software, available for Windows, GNU/Linux and macOS.
- [REACT](https://es.reactjs.org) - is an open source Javascript library designed to create user interfaces to facilitate the development of single-page applications.

- [MUI CORE](https://mui.com/material-ui/getting-started/overview/)- is an open-source React component library that implements Google's Material Design.

- [SASS](https://sass-lang.com)- Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables to use things like variables, nested rules, inline imports and more.

## Authors

- **Zuly Valentina Vargas Ramírez**
