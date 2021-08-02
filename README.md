## OLT Oompa-tool
[![react version](https://img.shields.io/badge/react-17.0.2-blue.svg)](https://www.npmjs.com/package/react/v/17.0.2) 
[![react version](https://img.shields.io/badge/reactrouter-5.2.0-blue.svg)](https://www.npmjs.com/package/react/v/5.2.0) 
[![react version](https://img.shields.io/badge/SASS-6.0.1-purple.svg)](https://www.npmjs.com/package/react/v/6.0.1)

<p align="center">

<img src="https://media.giphy.com/media/xIna8nqTTk3x6/giphy.gif" >

## Introduction

This application was made with React, using some provided API's to make an Oompa loompa crew manager, users can navigate through pages to see the list of employees, click an Oompa loompa to see the details (such like gender, profession, etc), filter using the search bar, and navigate via URL's

## [Deployed Live demo](https://oltool.surge.sh/)

deployed live demo using surge.sh

## Functional Description
Users can:

* See full paginated Oompa loompa list

* Click on details

* Navigate through diferent pages using the pagination element (via url also)

* Everything above from mobile as well


## Aplication Description
The aplication initializes (and is the default page in not declared routes) in the first page of the oompa loompa list, in there you can go to the details of any oompa loompa displayed, or navigate to other pages, or filter using the search bar

NOTE: the application api wrapper was tested using Jest performing TDD (see further in commits)

### Landing
![Login](/doc/images/landing.png)

### Filter
![Login](/doc/images/filter.png)

### Pagination
![Login](/doc/images/pagination.png)

### Details
![Login](/doc/images/pagination.png)

### *RESPONSIVE*
![Login](/doc/images/responsive.png)


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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
