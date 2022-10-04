# TaskApp FRONTEND

In this project the functionality of login and display of tasks is added by using Hooks and react router. 

IETI - LAB05

2022-2.

## Development

This project is developed following the conditions of the following repository:

[ Hooks / React Router ](https://github.com/CAPJackie/react-hooks-router-task-planner) 


In this development the following repositories were used to call APIs. The Bearer token is used to authenticate the user and obtain his information. For both user and task services, the data is obtained through the API that makes the respective calls to the collections in MongoDB.

[User-Service](https://github.com/ZulyVargas/Users-Microservice-JWT)

[Task-service](https://github.com/ZulyVargas/Tasks-Microservice-RESTFUL-API)

### Prerequisites

* [Node.js and npm command](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - npm is the default package management system for Node.js, a runtime environment for JavaScript.

### Installing

To download the project run:

  ```bash
git clone https://github.com/ZulyVargas/TASKAPP-FRONTEND.git
git checkout hoks_tasks
  ```

Install the required libraries:


  ```bash
npm install @mui/icons-material @mui/material @emotion/styled     @emotion/react
npm install react-router-dom
npm install -g sass
  ```
Run the app:

  ```bash
npm install
npm start      
  ```
***Example view***
  1. The following credentials can be used to log in to the application:
      
      **email**: gabo@gmail.com
      
      **password**: gabo123      
    After the credentials are validated you will be redirected to the home page. 
  2. If invalid credentials are used the following warning message will be displayed:

  ![login-error](/img/loginError.png)

  3. Home page: The home page displays information about each of the user's tasks. For this user the saved tasks are:

 ![tasks](/img/tasks-2324.png)

 **Result:**

   ![home-page](/img/homePage.png)


*The functionality of adding new tasks is in process.*

## Built With

* [Visual Studio Code](https://code.visualstudio.com) -  is a source code editor developed by Microsoft. It is free and multiplatform software, available for Windows, GNU/Linux and macOS.
* [REACT](https://es.reactjs.org)  - is an open source Javascript library designed to create user interfaces to facilitate the development of single-page applications.

* [MUI CORE](https://mui.com/material-ui/getting-started/overview/ )- is an open-source React component library that implements Google's Material Design.

* [SASS](https://sass-lang.com)- Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables to use things like variables, nested rules, inline imports and more.
## Authors

* **Zuly Valentina Vargas Ramírez** 