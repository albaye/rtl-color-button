# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Testing

## Testing Driven Development

- Write tests before writing code
  - then write code accoring to "spec" set by tests
- "red-green" testing
  - tests faile before code if written

### Why TDD?
- Makes a huge difference in how it feels to write tests
  - part of the coding process, not a "chore" to do at the end
- More efficient
  - re-run tests "for free" after changes

## React Testing Library Philosophy
### What does React Testing Library do?
- Creates a virtual DOM for testing
  - and utilities for interacting with DOM
- Allows testing without a browser


## Types of Tests
1. Unit tests: test one unit of code in isolation
1. Integration tests: interaction between components or microservices
1. Functional Tests: Tests a particular function of software
1. Acceptance / End-to-End (E2E) Tests: Use actual browser and server (Cypress, Selenium)

## Unit Testing
Isolated: mock dependencies, test internals
- very easy to pinpoint failures

__Bad__
- Further from how users interact with software
- More likely to breakd with refactoring (it may fail when you change the way your component is written but the behaviour stays the same)

## Functional Testing
Include all relevant units, test behaviour
- Close to how users interact with software
- Robusts tests

__Bad__
- more difficult to debug failing tests

## TDD vs BDD
BDD is very explicitly defined:
- involves follaboration between lots of roles: developers, QA, business partners, ets
- defines process for different groups to interact


## Testing Library
If you want to get an element from the page, but you are not sure about the role, you can use `logRoles` to get the roles of all the elements within a component.
