'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PluginbotProvider = function (_React$Component) {
    (0, _inherits3.default)(PluginbotProvider, _React$Component);

    function PluginbotProvider(props) {
        (0, _classCallCheck3.default)(this, PluginbotProvider);
        return (0, _possibleConstructorReturn3.default)(this, (PluginbotProvider.__proto__ || Object.getPrototypeOf(PluginbotProvider)).call(this, props));
    }

    (0, _createClass3.default)(PluginbotProvider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return { pluginbot: this.props.pluginbot };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: this.props.pluginbot.store },
                this.props.children
            );
        }
    }]);
    return PluginbotProvider;
}(_react2.default.Component);

PluginbotProvider.childContextTypes = {
    pluginbot: _propTypes2.default.object
};

PluginbotProvider.propTypes = {
    pluginbot: _propTypes2.default.object.isRequired
};

exports.default = PluginbotProvider;