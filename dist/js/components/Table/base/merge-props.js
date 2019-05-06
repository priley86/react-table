'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodashEs = require('lodash-es');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * merge-props.js
                                                                                                                                                                                                     *
                                                                                                                                                                                                     * Forked from reactabular-table version 8.14.0
                                                                                                                                                                                                     * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
                                                                                                                                                                                                     * */


function mergePropPair() {
  for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
    props[_key] = arguments[_key];
  }

  var firstProps = props[0];
  var restProps = props.slice(1);

  if (!restProps.length) {
    return (0, _lodashEs.mergeWith)({}, firstProps);
  }

  // Avoid mutating the first prop collection
  return _lodashEs.mergeWith.apply(undefined, [(0, _lodashEs.mergeWith)({}, firstProps)].concat(_toConsumableArray(restProps), [function (a, b, key) {
    if (key === 'children') {
      // Children have to be merged in reverse order for Reactabular
      // logic to work.
      return _extends({}, b, a);
    }

    if (key === 'className') {
      // Process class names through classNames to merge properly
      // as a string.
      return (0, _classnames2.default)(a, b);
    }

    return undefined;
  }]));
}

exports.default = mergePropPair;