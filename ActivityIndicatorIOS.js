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
    _startWaiting: function () {
        this._timeout = setTimeout(function () {
            this.setState({
                waiting: false
            });
        }.bind(this), 1000);
    },
    _stopWaiting: function () {
        clearTimeout(this._timeout);
    },
    componentWillReceiveProps: function (props) {
        // if we were not animating, but we're going to,
        // we want to wait for the second to pass
        if (!this.props.animating && props.animating) {
            this._stopWaiting();
            this.setState(this.getInitialState());
            this._startWaiting();
        }
    },
    componentDidMount: function () {
        this._startWaiting();
    },
    componentWillUnmount: function () {
        this._stopWaiting();
    },
    render: function () {
        var {
            animating,
            ...other
        } = this.props;
        return <ActivityIndicatorIOS
            animating={animating && !this.state.waiting}
            {...other} />
    }
});

module.exports = ActivityIndicator;
