"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "../../../../@patternfly/patternfly/components/Table/table.css.js", "../../ActionsColumn"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("../../../../@patternfly/patternfly/components/Table/table.css.js"), require("../../ActionsColumn"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.tableCss, global.ActionsColumn);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _tableCss, _ActionsColumn) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _tableCss2 = _interopRequireDefault(_tableCss);

  var _ActionsColumn2 = _interopRequireDefault(_ActionsColumn);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var resolveOrDefault = function resolveOrDefault(resolver, defaultValue) {
    for (var _len = arguments.length, data = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      data[_key - 2] = arguments[_key];
    }

    return typeof resolver === 'function' ? resolver.apply(void 0, data) : defaultValue;
  };

  exports["default"] = function (actions, actionResolver, areActionsDisabled) {
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
        children: _react2["default"].createElement(_ActionsColumn2["default"], {
          items: resolvedActions,
          dropdownPosition: dropdownPosition,
          dropdownDirection: dropdownDirection,
          isDisabled: resolvedIsDisabled,
          rowData: rowData,
          extraData: extraData
        }, label)
      } : {};
      return _objectSpread({
        className: (0, _reactStyles.css)(_tableCss2["default"].tableAction),
        isVisible: true
      }, renderProps);
    };
  };
});