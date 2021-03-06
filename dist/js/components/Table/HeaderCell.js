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

var HeaderCell = function HeaderCell(_ref) {
  var dataLabel = _ref['data-label'],
      className = _ref.className,
      Component = _ref.component,
      isVisible = _ref.isVisible,
      scope = _ref.scope,
      textCenter = _ref.textCenter,
      props = _objectWithoutProperties(_ref, ['data-label', 'className', 'component', 'isVisible', 'scope', 'textCenter']);

  var mappedProps = _extends({}, scope ? { scope: scope } : {}, props);
  return _react2.default.createElement(Component, _extends({}, mappedProps, { className: (0, _reactStyles.css)(className, textCenter && _tableCss2.default.modifiers.center) }));
};

HeaderCell.propTypes = {
  'data-label': _propTypes2.default.string,
  className: _propTypes2.default.string,
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node, _propTypes2.default.number]),
  isVisible: _propTypes2.default.bool,
  scope: _propTypes2.default.string,
  textCenter: _propTypes2.default.bool
};

HeaderCell.defaultProps = {
  'data-label': '',
  className: undefined,
  component: 'th',
  isVisible: undefined,
  scope: '',
  textCenter: false
};

exports.default = HeaderCell;