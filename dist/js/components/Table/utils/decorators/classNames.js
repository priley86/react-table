'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Visibility = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactStyles = require('@patternfly/react-styles');

var _tableCss = require('../../../../@patternfly/patternfly/components/Table/table.css.js');

var _tableCss2 = _interopRequireDefault(_tableCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var pickProperties = function pickProperties(object, properties) {
  return properties.reduce(function (picked, property) {
    return _extends({}, picked, _defineProperty({}, property, object[property]));
  }, {});
};

var Visibility = exports.Visibility = pickProperties(_tableCss2.default.modifiers, ['hidden', 'hiddenOnSm', 'hiddenOnMd', 'hiddenOnLg', 'hiddenOnXl', 'visibleOnSm', 'visibleOnMd', 'visibleOnLg', 'visibleOnXl']);

exports.default = function () {
  for (var _len = arguments.length, classNames = Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  return function () {
    return {
      className: _reactStyles.css.apply(undefined, classNames)
    };
  };
};