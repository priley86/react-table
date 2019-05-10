"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-styles", "../../@patternfly/patternfly/components/Table/table.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/Table/table.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles, global.tableCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactStyles, _tableCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _tableCss2 = _interopRequireDefault(_tableCss);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
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

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

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
        props = _objectWithoutProperties(_ref, ["data-label", "className", "colSpan", "component", "isVisible", "parentId", "textCenter", "isOpen", "ariaControls"]);

    var mappedProps = _objectSpread({}, dataLabel ? {
      'data-label': dataLabel
    } : {}, props);

    return parentId !== undefined && colSpan === undefined || !isVisible ? null : _react2["default"].createElement(Component, _extends({}, mappedProps, {
      className: (0, _reactStyles.css)(className, textCenter && _tableCss2["default"].modifiers.center),
      colSpan: colSpan
    }));
  };

  BodyCell.propTypes = {
    'data-label': _propTypes2["default"].string,
    className: _propTypes2["default"].string,
    colSpan: _propTypes2["default"].number,
    component: _propTypes2["default"].node,
    isVisible: _propTypes2["default"].bool,
    parentId: _propTypes2["default"].number,
    textCenter: _propTypes2["default"].bool,
    isOpen: _propTypes2["default"].bool,
    ariaControls: _propTypes2["default"].string
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
  exports["default"] = BodyCell;
});