'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BodyCell = function BodyCell(_ref) {
  var dataLabel = _ref['data-label'],
      parentId = _ref.parentId,
      isVisible = _ref.isVisible,
      Component = _ref.component,
      colSpan = _ref.colSpan,
      props = _objectWithoutProperties(_ref, ['data-label', 'parentId', 'isVisible', 'component', 'colSpan']);

  var mappedProps = _extends({}, dataLabel ? { 'data-label': dataLabel } : {}, props);
  return parentId !== undefined && colSpan === undefined || !isVisible ? null : _react2.default.createElement(Component, _extends({}, mappedProps, { colSpan: colSpan }));
};

BodyCell.propTypes = {
  'data-label': _propTypes2.default.string,
  component: _propTypes2.default.node
};

BodyCell.defaultProps = {
  component: 'td',
  'data-label': ''
};

exports.default = BodyCell;