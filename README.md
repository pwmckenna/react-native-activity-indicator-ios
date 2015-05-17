# react-native-activity-indicator-ios

ActivityIndicatorIOS wrapper that waits a second.

## What problem does this solve?
The native ActivityIndicatorIOS shows the spinner immediately (assuming you don't set [`animating`](http://facebook.github.io/react-native/docs/activityindicatorios.html#animating) to `false`), which [other loading indicators don't do](https://github.com/KyleAMathews/react-spinkit#fades-in-spinners-after-one-second) because [research shows feedback is not necessary for about a second](http://www.nngroup.com/articles/response-times-3-important-limits/).

This wrapper will wait the second before showing the spinner.

## Installation
```bash
npm install react-native-activity-indicator-ios
```


## Usage

Same api as [ActivityIndicatorIOS](http://facebook.github.io/react-native/docs/activityindicatorios.html#content).


```js
var ActivityIndicatorIOS = require('react-native-activity-indicator-ios');

React.createClass({
  render: function () {
    return (
      <ActivityIndicatorIOS animating={this.state.loading} />
    );
  }
});
```

## Demo

![](https://cloud.githubusercontent.com/assets/295678/7669058/0c5f3726-fc13-11e4-9ed6-05fa07d3066a.gif)

[appetize.io](https://appetize.io/) is magic for demos. Check it out!

## Acknowledgements

After using [@kylemathews](https://twitter.com/kylemathews)'s [spinkit](https://github.com/KyleAMathews/react-spinkit) library for loading icons, everything else felt unpolished. I wanted to use the native iOS activity indicator, but with all the polish I had grown accustomed to. Many thanks for the inspiration.
