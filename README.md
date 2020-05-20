# InfoSec Watcher
 application that watches logs it recieves of various security audit tools & cron jobs & pulls stats from them to alert the user of anomalies

 NODEjs application that watches for certain logs, grabs them, looks for anomalies in them (f.e. update needed, open ports etc) and keeps track of them.

 A user can get notified of anomalies and or og in tothe webpanel to be able to look at the logfiles and or see the dashboard to get info on the watched systems.

 WIP


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode using webpack<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn server`

Runs the NODEjs server, the main component of this app.


### `yarn build`

Builds the app for production with webpack to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


c 2019 DF