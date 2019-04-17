'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expandedRow = exports.expandable = exports.collapsible = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyles = require('@patternfly/react-styles');

var _tableCss = require('../../../../@patternfly/patternfly/components/Table/table.css.js');

var _tableCss2 = _interopRequireDefault(_tableCss);

var _CollapseColumn = require('../../CollapseColumn');

var _CollapseColumn2 = _interopRequireDefault(_CollapseColumn);

var _ExpandableRowContent = require('../../ExpandableRowContent');

var _ExpandableRowContent2 = _interopRequireDefault(_ExpandableRowContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collapsible = exports.collapsible = function collapsible(value, _ref) {
  var rowIndex = _ref.rowIndex,
      columnIndex = _ref.columnIndex,
      rowData = _ref.rowData,
      column = _ref.column,
      property = _ref.property;
  var _column$extraParams = column.extraParams,
      onCollapse = _column$extraParams.onCollapse,
      _column$extraParams$r = _column$extraParams.rowLabeledBy,
      rowLabeledBy = _column$extraParams$r === undefined ? 'simple-node' : _column$extraParams$r,
      _column$extraParams$e = _column$extraParams.expandId,
      expandId = _column$extraParams$e === undefined ? 'expand-toggle' : _column$extraParams$e;

  var extraData = {
    rowIndex: rowIndex,
    columnIndex: columnIndex,
    column: column,
    property: property
  };

  function onToggle(event) {
    onCollapse && onCollapse(event, rowIndex, rowData && !rowData.isOpen, rowData, extraData);
  }
  return {
    className: rowData.isOpen !== undefined && (0, _reactStyles.css)(_tableCss2.default.tableToggle),
    isVisible: !rowData.fullWidth,
    children: _react2.default.createElement(
      _CollapseColumn2.default,
      {
        'aria-labelledby': '' + rowLabeledBy + rowIndex + ' ' + expandId + rowIndex,
        onToggle: onToggle,
        id: expandId + rowIndex,
        isOpen: rowData && rowData.isOpen
      },
      value
    )
  };
};

var expandable = exports.expandable = function expandable(value, _ref2) {
  var rowData = _ref2.rowData;
  return rowData.hasOwnProperty('parent') ? _react2.default.createElement(
    _ExpandableRowContent2.default,
    null,
    value
  ) : value;
};

var expandedRow = exports.expandedRow = function expandedRow(colSpan) {
  var expandedRowFormatter = function expandedRowFormatter(value, _ref3) {
    var rowIndex = _ref3.rowIndex,
        rowData = _ref3.rowData,
        _ref3$column$extraPar = _ref3.column.extraParams.contentId,
        contentId = _ref3$column$extraPar === undefined ? 'expanded-content' : _ref3$column$extraPar;
    return rowData.hasOwnProperty('parent') && {
      colSpan: colSpan + !!rowData.fullWidth,
      id: contentId + rowIndex,
      className: rowData.noPadding && (0, _reactStyles.css)(_tableCss2.default.modifiers.noPadding)
    };
  };
  return expandedRowFormatter;
};