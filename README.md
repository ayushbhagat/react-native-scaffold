# App

## Prerequisites
For macOS:
```
brew install node
brew install watchman
```

For Windows and Linux, check out the official docs [here](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies).

## Development
To install the packages:
```
npm install
```

To build the JS bundle and serve it on `localhost:8081`:
```
npm run start
```

To launch the iOS and Android simulators:
```
npm run ios
npm run android
```
For the iOS simulator, press `Cmd+R` to reload and `Cmd+D` or shake for dev menu.  
For the Android simulator, double tap `R` to reload and press `MENU` or shake for dev menu.

To run tests in the `test` directory:
```
npm run test
```

To run linter on all files:
```
npm run lint
```

To link Android and iOS files from libraries:
```
npm run link
```

## Style Guide
### Imports and Exports
* Prefer to import JS files without using the `.js` file extension.
* Prefer to order all imports from the same file in alphabetical order.
* Prefer to insert a new line between imports of different kinds (i.e. there should be a new line between all public package imports, private package imports and local files).
* Prefer to default export the function with the same name as the file its in and export other functions by their names.

### Naming Convention
* Prefer dashes to separate words in filenames.
* Prefer upper camel case for component names.
* Prefer the `.js` file extension for files that define components (not `.jsx`).
* Prefer lower camel case for variables and function names.
* Prefer to capitalize constants with underscores.
* Prefer `Object.freeze` when creating constant objects, so that accidental changes of values don’t persist.
* Prefer to export inner components by name and suffix the names with the string `Inner` when defining components that use higher-order components (HOC) so that the inner components can be tested separately.

### React
* Prefer property initializer syntax for setting `propTypes`, `defaultProps`, `contextTypes`, `childContextTypes`, `childContext`, and `state`.
* Prefer object rest to get data from objects.
* Prefer using `PureComponent` instead of `Component` to use shallow rendering.
* Prefer to define functions that are passed down as props earlier instead of defining them inline so the same pointer can be passed down to effectively use shallow rendering.
* Prefer `loadash.memoize` to define functions that return functions (based on the parameter) that are passed down as props.

### Redux
* Prefer to dispatch Redux actions as JS objects instead of immutable objects, but store immutable objects in the Redux store when reducing state.
* Prefer containers per screen/activity to pass down a slice of the Redux state, instead of using the state directly in presentational components to decouple the presentational components from the application state.

### JS
* Prefer 2 spaces over tabs.
* Prefer to limit the number of characters to 100 per line.
* Prefer line comments instead of block comments.
* Prefer comments having correct grammar and sentence structure.
* Prefer `let` and `const` over `var`.
* Prefer single quotes over double quotes.
* Prefer `...` instead of `Object.assign`.
* Prefer no spaces before and after curly braces when creating objects on 1 line.
* Prefer arrow functions over ES5 functions when possible with the exception of React component methods and in situations where it would be useful to allow binding its own this.
* Prefer `redux.compose` when composing multiple functions instead of calling them directly.

## Notes
* If you see the error "Attempted to remove more RCTKeyboardObserver listeners than added" when using `react-native@0.42.0`, see https://github.com/facebook/react-native/issues/12223 for more details.
