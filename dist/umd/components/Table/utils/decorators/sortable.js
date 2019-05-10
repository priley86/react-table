"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../SortColumn", "@patternfly/react-styles", "../../../../@patternfly/patternfly/components/Table/table.css.js", "../../../../@patternfly/patternfly/components/Button/button.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../SortColumn"), require("@patternfly/react-styles"), require("../../../../@patternfly/patternfly/components/Table/table.css.js"), require("../../../../@patternfly/patternfly/components/Button/button.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SortColumn, global.reactStyles, global.tableCss, global.buttonCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _SortColumn, _reactStyles, _tableCss, _buttonCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _SortColumn2 = _interopRequireDefault(_SortColumn);

  var _tableCss2 = _interopRequireDefault(_tableCss);

  var _buttonCss2 = _interopRequireDefault(_buttonCss);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports["default"] = function (label, _ref) {
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
      var reversedDirection;

      if (!isSortedBy) {
        reversedDirection = _SortColumn.SortByDirection.asc;
      } else {
        reversedDirection = sortBy.direction === _SortColumn.SortByDirection.asc ? _SortColumn.SortByDirection.desc : _SortColumn.SortByDirection.asc;
      }

      onSort && onSort(event, columnIndex, reversedDirection, extraData);
    }

    return {
      className: (0, _reactStyles.css)(_tableCss2["default"].tableSort, isSortedBy && _tableCss2["default"].modifiers.selected),
      'aria-sort': isSortedBy ? "".concat(sortBy.direction, "ending") : 'none',
      children: _react2["default"].createElement(_SortColumn2["default"], {
        isSortedBy: isSortedBy,
        sortDirection: isSortedBy ? sortBy.direction : '',
        onSort: sortClicked,
        className: (0, _reactStyles.css)(_buttonCss2["default"].button, _buttonCss2["default"].modifiers.plain)
      }, label)
    };
  };
});