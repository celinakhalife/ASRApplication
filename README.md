# ASRApplication

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

ASRApplication is responsible for capturing audio input, sending data to i2x service and returning speech transcripts.

### Architecture

#### /public

The `public` directory contains the root html file and the icons folder.   

#### /src/adapters

The `adapters` directory contains the ASR connection adapter.   

#### /src/components

The `components` directory contains the shared components such as buttons, icons, cards, headers, etc.

All components are composed of the below two files: 

- index.jsx: Creates, exports and handles all logic and state updates of the component.
- styled.jsx: Exports the styled components specific to this component.


#### /src/consts

The `consts` directory contains all the constants used in this project.


#### /src/redux

The `redux` directory contains the scripts to create and export the redux store that handles all ASR connection events.

#### /src/renderers

The `renderers` directory contains the components and the logic used to create sections of the application.

#### /src/screens

The `screens` directory contains all the pages of the application (in this case, it only contains the home component).

#### /src/utils

The `utils` directory contains util functions used throughout the application.

### Installation

Open the terminal on your local machine.

Change the working directory to the location where you want the cloned directory to be made.

Clone ASRApplication repository.

`$ git clone https://github.com/celinakhalife/ASRApplication.git`

Change the working directory to ASRApplication.

Install dependencies in the local node_modules folder.

```
# If you're using yarn
yarn install

# If you're using npm
npm install
```

Run the application in the development mode.

```
# If you're using yarn
yarn start

# If you're using npm
npm start
```


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

## Libraries

styled-components
react-redux
normalize.css
