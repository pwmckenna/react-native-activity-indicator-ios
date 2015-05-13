/**
 * ActivityIndicator
 *
 * Created by Patrick Williams in beautiful Seattle, WA.
 */
'use strict';

var React = require('react-native');

var {
    ActivityIndicatorIOS
} = React;

var ActivityIndicator = React.createClass({
    propTypes: ActivityIndicatorIOS.propTypes,
    getDefaultProps: function () {
        return ActivityIndicatorIOS.getDefaultProps();
    },
    getInitialState: function () {
        return {
            waiting: true
        }
    },
    startWaiting: function () {
        this._timeout = setTimeout(function () {
            this.setState({
                waiting: false
            });
        }.bind(this), 1000);
    },
    stopWaiting: function () {
        clearTimeout(this._timeout);
    },
    componentWillReceiveProps: function (props) {
        // if we were not animating, but we're going to,
        // we want to wait for the second to pass
        if (!this.props.animating && props.animating) {
            this.stopWaiting();
            this.setState(this.getInitialState());
            this.startWaiting();
        }
    },
    componentDidMount: function () {
        this.startWaiting();
    },
    componentWillUnmount: function () {
        this.stopWaiting();
    },
    render: function () {
        var props = this.props;
        props.animating = props.animating && !this.state.waiting;
        return <ActivityIndicatorIOS {...props} />
    }
});

module.exports = ActivityIndicator;
