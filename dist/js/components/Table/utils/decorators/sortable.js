'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SortColumn = require('../../SortColumn');

var _SortColumn2 = _interopRequireDefault(_SortColumn);

var _reactStyles = require('@patternfly/react-styles');

var _tableCss = require('../../../../@patternfly/patternfly/components/Table/table.css.js');

var _tableCss2 = _interopRequireDefault(_tableCss);

var _buttonCss = require('../../../../@patternfly/patternfly/components/Button/button.css.js');

var _buttonCss2 = _interopRequireDefault(_buttonCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (label, _ref) {
  var columnIndex = _ref.columnIndex,
      column = _ref.column,
      property = _ref.property;
  var _column$extraParams = column.extraParams,
      sortBy = _column$extraParams.sortBy,
      onSort = _column$extraParams.onSort;

  var extraData = {
    columnIndex: columnIndex,
    column: column,
    property: property
  };

  var isSortedBy = sortBy && columnIndex === sortBy.index;
  function sortClicked(event) {
    var reversedDirection = void 0;
    if (!isSortedBy) {
      reversedDirection = _SortColumn.SortByDirection.asc;
    } else {
      reversedDirection = sortBy.direction === _SortColumn.SortByDirection.asc ? _SortColumn.SortByDirection.desc : _SortColumn.SortByDirection.asc;
    }
    onSort && onSort(event, columnIndex, reversedDirection, extraData);
  }

  return {
    className: (0, _reactStyles.css)(_tableCss2.default.tableSort, isSortedBy && _tableCss2.default.modifiers.selected),
    'aria-sort': isSortedBy ? sortBy.direction + 'ending' : 'none',
    children: _react2.default.createElement(
      _SortColumn2.default,
      {
        isSortedBy: isSortedBy,
        sortDirection: isSortedBy ? sortBy.direction : '',
        onSort: sortClicked,
        className: (0, _reactStyles.css)(_buttonCss2.default.button, _buttonCss2.default.modifiers.plain)
      },
      label
    )
  };
};