"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-icons", "@patternfly/react-styles", "@patternfly/react-core", "../../@patternfly/patternfly/components/Table/table.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-icons"), require("@patternfly/react-styles"), require("@patternfly/react-core"), require("../../@patternfly/patternfly/components/Table/table.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactIcons, global.reactStyles, global.reactCore, global.tableCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactIcons, _reactStyles, _reactCore, _tableCss) {
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

  var propTypes = {
    children: _propTypes2["default"].node,
    onToggle: _propTypes2["default"].func,
    isOpen: _propTypes2["default"].bool
  };
  var defaultProps = {
    children: null,
    isOpen: undefined,
    onToggle: null
  };

  var CollapseColumn = function CollapseColumn(_ref) {
    var children = _ref.children,
        onToggle = _ref.onToggle,
        isOpen = _ref.isOpen,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ["children", "onToggle", "isOpen", "className"]);

    return _react2["default"].createElement(_react2["default"].Fragment, null, isOpen !== undefined && _react2["default"].createElement(_reactCore.Button, _extends({
      className: (0, _reactStyles.css)(className, isOpen && _tableCss2["default"].modifiers.expanded)
    }, props, {
      variant: "plain",
      "aria-label": "Details",
      onClick: onToggle,
      "aria-expanded": isOpen
    }), isOpen ? _react2["default"].createElement(_reactIcons.AngleDownIcon, null) : _react2["default"].createElement(_reactIcons.AngleRightIcon, null)), children);
  };

  CollapseColumn.propTypes = propTypes;
  CollapseColumn.defaultProps = defaultProps;
  exports["default"] = CollapseColumn;
});