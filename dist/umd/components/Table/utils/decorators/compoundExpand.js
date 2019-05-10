"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "@patternfly/react-core", "../../../../@patternfly/patternfly/components/Table/table.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("@patternfly/react-core"), require("../../../../@patternfly/patternfly/components/Table/table.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.reactCore, global.tableCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _reactCore, _tableCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.compoundExpand = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _tableCss2 = _interopRequireDefault(_tableCss);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var compoundExpand = exports.compoundExpand = function compoundExpand(value, _ref) {
    var rowIndex = _ref.rowIndex,
        columnIndex = _ref.columnIndex,
        rowData = _ref.rowData,
        column = _ref.column,
        property = _ref.property;

    if (!value) {
      return null;
    }

    var title = value.title,
        props = value.props;
    var onExpand = column.extraParams.onExpand;
    var extraData = {
      rowIndex: rowIndex,
      columnIndex: columnIndex,
      column: column,
      property: property
    };

    function onToggle(event) {
      onExpand && onExpand(event, rowIndex, columnIndex, props.isOpen, rowData, extraData);
    }

    return {
      className: (0, _reactStyles.css)(_tableCss2["default"].tableCompoundExpansionToggle, props.isOpen && _tableCss2["default"].modifiers.expanded),
      children: props.isOpen !== undefined && _react2["default"].createElement(_reactCore.Button, {
        variant: "link",
        onClick: onToggle,
        "aria-expanded": props.isOpen,
        "aria-controls": props.ariaControls
      }, title)
    };
  };
});