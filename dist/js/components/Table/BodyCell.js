'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStyles = require('@patternfly/react-styles');

var _tableCss = require('../../@patternfly/patternfly/components/Table/table.css.js');

var _tableCss2 = _interopRequireDefault(_tableCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BodyCell = function BodyCell(_ref) {
  var dataLabel = _ref['data-label'],
      className = _ref.className,
      colSpan = _ref.colSpan,
      Component = _ref.component,
      isVisible = _ref.isVisible,
      parentId = _ref.parentId,
      textCenter = _ref.textCenter,
      isOpen = _ref.isOpen,
      ariaControls = _ref.ariaControls,
      props = _objectWithoutProperties(_ref, ['data-label', 'className', 'colSpan', 'component', 'isVisible', 'parentId', 'textCenter', 'isOpen', 'ariaControls']);

  var mappedProps = _extends({}, dataLabel ? { 'data-label': dataLabel } : {}, props);
  return parentId !== undefined && colSpan === undefined || !isVisible ? null : _react2.default.createElement(Component, _extends({}, mappedProps, { className: (0, _reactStyles.css)(className, textCenter && _tableCss2.default.modifiers.center), colSpan: colSpan }));
};

BodyCell.propTypes = {
  'data-label': _propTypes2.default.string,
  className: _propTypes2.default.string,
  colSpan: _propTypes2.default.number,
  component: _propTypes2.default.node,
  isVisible: _propTypes2.default.bool,
  parentId: _propTypes2.default.number,
  textCenter: _propTypes2.default.bool,
  isOpen: _propTypes2.default.bool,
  ariaControls: _propTypes2.default.string
};

BodyCell.defaultProps = {
  'data-label': '',
  className: undefined,
  colSpan: undefined,
  component: 'td',
  isVisible: undefined,
  parentId: undefined,
  textCenter: false,
  isOpen: undefined,
  ariaControls: ''
};

exports.default = BodyCell;