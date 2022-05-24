# Value Finder

## Motivation

This Project was created to experiment and test concepts, technologies and structures. And to have some fun. This includes:

- React Basics
  - useState
  - useEffect
  - useReducer
  - Router
  - Context
  - Experimenting on folder and component structures
  - Creating a "layout" component
  - custom hooks
  - ...
- Tailwindcss
  - Understanding the basics of component design and css
  - Mobile First Design
  - How to get rid of tailwindcss??? I like the approach for its speed and look BUT the mix of style and code makes the tsx code a mess...
  - Alternative: CSS
- Storybook
  - I like the design of components from botton to top storybook seems a good choice for that
  - However, the mix with tailwind sucks (also because of some bugs)

## Content

You can choose values from a big list and then sort the chosen value by a 1-1 comparison of the chosen values. I implemented it in a way that two values will not be compared twice to reduce the number of iterations.

## Project Setup Step by Step

- create react app with typscipt template
- Add tailwindcss
- Add Storybook
- Configure Storybook to work with tailwind / postcss

  ```javascript
  const path = require('path');

  module.exports = {
    stories: [
      '../src/**/*.stories.mdx',
      '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/preset-create-react-app',
    ],
    webpackFinal: async (config) => {
      config.module.rules.push({
        test: /\,css&/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        ],
        include: path.resolve(\_\_\_dirname, "../"),
        ),
      });
      return config;
    },
  };
  ```

- Remove padding from storybook
  `javascript export const parameters = { layout: 'fullscreen', actions: { argTypesRegex: "^on[A-Z].*" }, controls: { matchers: { color: /(background|color)$/i, date: /Date$/, }, }, } `

## Warnings

- Activating JIT breaks styling in Storybook

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Runs storybook development server.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

```

```
