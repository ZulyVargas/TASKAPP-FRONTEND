# TaskApp FRONTEND - React-TDD-jest-enzyme

IETI - LAB08

2022-2.

## Development

This project is developed following the conditions of the following repository:

[ react-tdd-jest-enzyme ](https://github.com/CAPJackie/react-tdd-jest-enzyme)

### Prerequisites

- [Node.js and npm command](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - npm is the default package management system for Node.js, a runtime environment for JavaScript.

### Installing

To download the project run:

```bash
git clone https://github.com/ZulyVargas/TASKAPP-FRONTEND.git
git checkout react-tdd-jest-enzyme
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


1. Add the following dependencies:
   ```
	  npm i -D jest enzyme @wojtekmaj/enzyme-adapter-react-17 @types/jest
	```
![install-jest-enzyme](/img/step1.png)

2. Add an Enzyme Adapter to work with React ( Create a file on the root called setupTests.js, this will run before each test you write ):

![setupTests](/img/setupStep2.png)


3. Configure jest so it knows where is the configuration file created in step 2 ( add the following value to your package.json ):
:
```json
   "jest": {
      "setupFilesAfterEnv": [
         "<rootDir>/setupTests.js"
      ]
   }
```
![json](/img/step3.png)

4. Create a simple test ( I'll create a test file for my App.js file ), if there is an existing App.test.js delete the content inside of it and replace it by the following:


![test](/img/step4.png)


5. Read further documentation on how to use enzyme and Jest to test your components (Avoid Snapshot testing, it's better instead to validate if a wrapper is in the DOM as the previous example does)

6. Modify your existing test script like this: npm set-script test "jest"

![jest](/img/step5.png)

7. Install the following dev dependencies: npm i -D @babel/preset-env babel-jest, those are useful to support EcmaScript modules on your jest files.

![test](/img/step7.png)

8. Create a file called .babelrc at the root directory and add the following lines:

![babel](/img/step8.png)

9. Create a folder on the root directory called styleMock.js ( To mock every imported stylesheet )


## Built With

- [Visual Studio Code](https://code.visualstudio.com) - is a source code editor developed by Microsoft. It is free and multiplatform software, available for Windows, GNU/Linux and macOS.
- [REACT](https://es.reactjs.org) - is an open source Javascript library designed to create user interfaces to facilitate the development of single-page applications.

- [MUI CORE](https://mui.com/material-ui/getting-started/overview/)- is an open-source React component library that implements Google's Material Design.

- [SASS](https://sass-lang.com)- Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables to use things like variables, nested rules, inline imports and more.

## Authors

- **Zuly Valentina Vargas Ramírez**
