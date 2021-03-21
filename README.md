This is simple app, with 3 view. First view show list if pictures, one can click on the picture to see the detail of that picture (this is the second view), one can upload new picture by clicking "upload cake" (this is the third view).

This project demonstrate how easy it is to create any fully functional applications in matter of hours.
Technology have made immense development, now any development can be done in 10% cost. Computing speed is doubling
every year and now it more than millions times faster than when we began. This has led to development of
front end centric applications, using next generation technology like React & Angular.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## API, it takes 5min to create a robust backend rest api..
The api is developed using jsonserver. And guess what, we just need to create a json file and bingo, all apis are automatically made 
available for you. If you want to add security the same can be added via proxy, the proxy server can do the validation/authorization
before calling the jsonserver. For secured application jsonserver is not available outside your organization network. 
Please refer to https://github.com/srestcom/react/blob/main/src/db.json for that json file.

Installation is very easy, just run the following command: npm install -g json-server
more details at https://www.npmjs.com/package/json-server

Now start the server using the following command after copying the db.json, where data will be persisted: json-server --watch db.json

Once server is started, check all rest apis available @ http://localhost:3000


## Available Scripts

In the project directory, you can run:
first run npm install (check node_modules folder)

### `npm start` 
accept to start in new port

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
