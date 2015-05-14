# react-native-activity-indicator-ios

# What problem does this solve?
The native ActivityIndicatorIOS shows the spinner immediately (assuming you don't set [`animating`](http://facebook.github.io/react-native/docs/activityindicatorios.html#animating) to `false`), which [other loading indicators don't do](https://github.com/KyleAMathews/react-spinkit#fades-in-spinners-after-one-second) because [research shows feedback is not necessary for about a second](http://www.nngroup.com/articles/response-times-3-important-limits/).

This wrapper will wait the second before showing the spinner.

# Usage

Same api as [ActivityIndicatorIOS](http://facebook.github.io/react-native/docs/activityindicatorios.html#content).
