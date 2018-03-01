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

exports.default = function () {
    for (var _len = arguments.length, servicesToConsume = Array(_len), _key = 0; _key < _len; _key++) {
        servicesToConsume[_key] = arguments[_key];
    }

    return function (Component) {
        var mapStateToProps = function mapStateToProps(state) {
            if (!state.pluginbot) {
                console.error("pluginbot not initialized, try adding pluginbot provider");
                return { services: {} };
            }
            var services = servicesToConsume.reduce(function (acc, service) {
                acc[service] = state.pluginbot.services[service];
                return acc;
            }, {});

            return { services: services };
        };

        var ServiceConsumerWrapper = function (_React$Component) {
            (0, _inherits3.default)(ServiceConsumerWrapper, _React$Component);

            function ServiceConsumerWrapper() {
                (0, _classCallCheck3.default)(this, ServiceConsumerWrapper);
                return (0, _possibleConstructorReturn3.default)(this, (ServiceConsumerWrapper.__proto__ || Object.getPrototypeOf(ServiceConsumerWrapper)).apply(this, arguments));
            }

            (0, _createClass3.default)(ServiceConsumerWrapper, [{
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(Component, this.props);
                }
            }]);
            return ServiceConsumerWrapper;
        }(_react2.default.Component);

        return (0, _reactRedux.connect)(mapStateToProps)(ServiceConsumerWrapper);
    };
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }