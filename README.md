# Rain or Shine v1.0

Rain or Shine is a live weather app that can be accessed online at [tmayesiv.github.io](https://tmayesiv.github.io/). This is accessible in desktop and mobile browsers.


## To Use Our App

Visit [tmayesiv.github.io](https://tmayesiv.github.io/) to access our website.

### Your Current Location

First, we will prompt you through your browser for your current location. Click "Allow" if you wish to see the weather for your current location.

If you do not wish to give your location, that's okay! We have a search feature regardless of this choice. If you deny this request initially but further wish to allow it, you can adjust this setting in your browser for this site.

### Search Bar

At the top is a search bar for searching locations. Typing here will drop down a menu of relevant location names. Select one to change the weater data to this location.

### Units Switch

At the upper right is a switch with "°F" and "°C". Click this switch to alternate between the US Customary units ("°F") and metric system ("°C").

### Results

The results are intentionally kept very simple. The first four cards display the current temperature, wind, precipitation, and UV index.

These are the meanings of the associated icons:
- "Temperature": Cloud coverage, and precipitation (presence and type).
- "Wind": The tip of the arrow is the direction the wind is blowing, on a standard compass.
- "Precipitation": The fraction the drop is filled is the precipitation percentage.
- "UV Index": The meter moves from left to right linearly in the range 0 to 11.

The next two display the forecast over the next few hours ("Hourly") and the forecast over the next few days ("Weekly").

In "Hourly", an icon is provided similar to "Temperature" for each hour along with an estimated temperature and the corresponding hour. "5a" means 5:00 AM, while "5p" means 5:00 PM.

In "Weekly", the estimated high temperature for the day is provided in bold over the estimated low of the day, along with the corresponding day, abbreviated.

### Refresh

Reload the page to refresh the weather data.


## Create React App

This section is for if you want to get our app running with [Create React App](https://github.com/facebook/create-react-app).

### Install Node.js

If you haven't yet installed Node.js:
- Visit [nodejs.org](https://nodejs.org/en) and download Node.js.
- Follow the installation wizard to install.
- You can verify that it is installed by running (in any directory):
```
node -v
npm -v
```
It is installed correctly if this returns version numbers, such as:
```
v20.13.1
10.8.1
```

### Clone Repository

- Navigate to the folder that you want to hold your repo directory.
- To clone our repo, run: `git clone https://github.com/tmayesiv/tmayesiv.github.io.git`. This creates a new folder called `tmayesiv.github.io` within the current directory.
- Navigate to this new folder by running: `cd .\tmayesiv.github.io\`. Everything will be done from this folder.

### Install Dependencies

To install dependencies, run: `npm install`.

### Available Commands

Now you can run these commands (one at a time):

#### `npm start`

To run the app in development mode, run: `npm start`. This opens [http://localhost:3000](http://localhost:3000) for locally hosted viewing in the browser.

When you make and save any changes in the code, this page will automatically reload.

#### `npm test` (Extra)

If you want to run any tests in the interactive watch mode, run: `npm test`.

For more details, see [running tests](https://facebook.github.io/create-react-app/docs/running-tests) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

#### `npm run build` (For creating a production build)

If you want to build the app for production to the `build` folder, run: `npm run build`.

This correctly bundles React in production mode and optimizes the build for the best performance. Your app is now ready to be deployed!

For more details, see [deployment](https://facebook.github.io/create-react-app/docs/deployment).

To deploy the new build, then run the following commands:

cp -R build/ .
git add .
git commit -m "Enter Commit Message Here"
git push origin main

GitHub then uploads the new build to the live site.

### Learn More (Extra)

For more on CRA's, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

For more on React in general, see the [React documentation](https://reactjs.org/).
