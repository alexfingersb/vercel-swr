# :page_with_curl: Vercel SWR

This is a simple project for study proposals. It was developed by [Rocketseat](https://rocketseat.com.br) and you can watch the tutorial [Consumindo APIs no React com SWR](https://www.youtube.com/watch?v=Pbs1VIwPoRA&feature=em-uploademail) on the YouTube channel.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Team Members
[!members](public/index.html)

### Tech

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses open source projects to work properly:

- [Yarn] - Yarn is a package manager that doubles down as project manager.
- [ReactJS] - A JavaScript library for building user interfaces.
- [Styled Components] - Use the best bits of ES6 and CSS to style your apps without stress.
- [JSON Server] - Get a full fake REST API with zero coding in less than 30 seconds (seriously)
- [Axios] - Promise based HTTP client for the browser and node.js
- [SWR] - Is a React Hooks library for remote data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.
- [React Router Dom] - Is a collection of navigational components that compose declaratively with your application.
- [TypeScript] - Is a typed superset of JavaScript that compiles to plain JavaScript.

## Available Scripts

In the project directory, you can run:

### `yarn server`

Runs the REST API server. <br />
Open [http://localhost:3333/users](http://localhost:3333/users) to view the users in json format.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Configuring your project

- Use YARN to initialize your project and create package.json to store project dependencies.

#### Create the project and into them

```
yarn create react-app vercel-swr --template typescript
cd vercel-swr
```

#### Add Styled Component

```
yarn add styled-components
```

#### Add Axios

```
yarn add axios
```

#### Add JSON Server

```
yarn add json-server
```

#### Add SWR

```
yarn add swr
```

#### Add React Router Dom

```
yarn add react-router-dom
```

[yarn]: https://yarnpkg.com
[reactjs]: https://reactjs.org
[styled components]: https://github.com/typicode/json-server
[json server]: https://github.com/typicode/json-server
[axios]: https://github.com/axios/axios
[swr]: https://github.com/vercel/swr
[react router dom]: https://reactrouter.com
[typescript]: https://www.typescriptlang.org
