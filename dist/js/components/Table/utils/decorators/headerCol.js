'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'simple-node';

  var headerCol = function headerCol(value) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        rowIndex = _ref.rowIndex;

    var result = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.title : value;
    return {
      component: 'th',
      children: _react2.default.createElement(
        'div',
        { id: id + rowIndex },
        result
      )
    };
  };

  return headerCol;
};