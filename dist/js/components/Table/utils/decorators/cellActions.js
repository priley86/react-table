'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyles = require('@patternfly/react-styles');

var _tableCss = require('../../../../@patternfly/patternfly/components/Table/table.css.js');

var _tableCss2 = _interopRequireDefault(_tableCss);

var _ActionsColumn = require('../../ActionsColumn');

var _ActionsColumn2 = _interopRequireDefault(_ActionsColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolveOrDefault = function resolveOrDefault(resolver, defaultValue) {
  for (var _len = arguments.length, data = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    data[_key - 2] = arguments[_key];
  }

  return typeof resolver === 'function' ? resolver.apply(undefined, data) : defaultValue;
};

exports.default = function (actions, actionResolver, areActionsDisabled) {
  return function (label, _ref) {
    var rowData = _ref.rowData,
        column = _ref.column,
        rowIndex = _ref.rowIndex,
        columnIndex = _ref.columnIndex,
        _ref$column$extraPara = _ref.column.extraParams,
        dropdownPosition = _ref$column$extraPara.dropdownPosition,
        dropdownDirection = _ref$column$extraPara.dropdownDirection,
        property = _ref.property;

    var extraData = {
      rowIndex: rowIndex,
      columnIndex: columnIndex,
      column: column,
      property: property
    };
    var resolvedActions = resolveOrDefault(actionResolver, actions, rowData, extraData);
    var resolvedIsDisabled = resolveOrDefault(areActionsDisabled, rowData && rowData.disableActions, rowData, extraData);

    var renderProps = resolvedActions && resolvedActions.length > 0 ? {
      children: _react2.default.createElement(
        _ActionsColumn2.default,
        {
          items: resolvedActions,
          dropdownPosition: dropdownPosition,
          dropdownDirection: dropdownDirection,
          isDisabled: resolvedIsDisabled,
          rowData: rowData,
          extraData: extraData
        },
        label
      )
    } : {};

    return _extends({
      className: (0, _reactStyles.css)(_tableCss2.default.tableAction),
      isVisible: true
    }, renderProps);
  };
};