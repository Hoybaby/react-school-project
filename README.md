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

### Packages to Install and Deployment
    In order for myself to host website, I use GitHub pages since this application was built just using React. I ran into too many problems that I believe could be solved with more time and a tad of help that I couldn't host it on Heroku with Python Flask.


    Please install the packages below to ensure that all the packages are present for deployment. Also when, cloned, the user can do an npm i to install all required packages.

    npm install react-bootstrap bootstrap@4.6.0

    npm install --save react-chartjs-2 chart.js

    
### The Process
<ol>
    <li>Create the React-App</li>
    <li>Plan out what Components are Needed</li>
    <li>Fetch Data from the API with a proper call</li>
    <li>Use Data to populate components</li>
</ol>

<p>This project was fun to build but yet challenging. This application purpose was to gather information from Data.Gov website API and use that information to build several components for users to visualize the data. The first step in any project is to plan what it will take to get the MVP(Minimal Viable Product) and final product
complete on time. This application needs about another week full of work to be fully completed with a front-end in React.JS and a back-end with Python with emphasis on Flask.
</p> 

<p>In order to handle the responsiveness on any screen, Bootstrap was used. Bootstrap is a great CSS framework and I utilized simple components that were effective to demonstate a greeting and pictures about the University of Wisconsin-Madison. The footer was created by myself without any components from Bootstrap. Every web application should include a footer that has information about the topic at hand. I used props from React to handle the passing of information from my App.JS to my other components. I tried to use props and states as much as I can but I ran into a issue that would cause a problem on refresh. I believe this problem was caused because of the API being called constistenly. At first, I used a ComponentDidMount and a thought occured to me that this was the problem. In order to tackle this problem, I took the apporach of converting class components to functional Components and using a useEffect. However this did not solve the problem and for production, converted back to my orginal route.</p>


<p>In order to get the Doughnut charts applied to the webpage, Charts.JS was utlized. THat way I had to populate these charts is suboptimal but for sake of deadline and production, the way I did works. I was able to use props and deconstruction to make the charts code/components very clean but on page refresh, would run into a prop issue thus having to do more hard coding since I couldn't obtain the API information consistently. On a certain commit, the user will see that I deconstructed the prop so I can call the object from the API with just the race ethnicity. I know of ways to use props and states to make the code DRY for the charts but issues occured. I spent hours trying to fix it to no avail. </p>

### Pictures/Demonstration

Jumbotron I created with React Bootstrap components
![project education](https://user-images.githubusercontent.com/70716786/125314625-5d529680-e304-11eb-8853-ecff22eceda8.PNG)


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
