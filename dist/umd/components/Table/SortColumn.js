"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-icons", "@patternfly/react-styles", "../../@patternfly/patternfly/components/Table/table.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-icons"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/Table/table.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactIcons, global.reactStyles, global.tableCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactIcons, _reactStyles, _tableCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SortByDirection = undefined;

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
    className: _propTypes2["default"].string,
    isSortedBy: _propTypes2["default"].bool,
    onSort: _propTypes2["default"].func,
    sortDirection: _propTypes2["default"].string
  };
  var defaultProps = {
    children: null,
    className: '',
    isSortedBy: false,
    onSort: null,
    sortDirection: ''
  };
  var SortByDirection = exports.SortByDirection = {
    asc: 'asc',
    desc: 'desc'
  };

  var SortColumn = function SortColumn(_ref) {
    var isSortedBy = _ref.isSortedBy,
        children = _ref.children,
        className = _ref.className,
        onSort = _ref.onSort,
        sortDirection = _ref.sortDirection,
        props = _objectWithoutProperties(_ref, ["isSortedBy", "children", "className", "onSort", "sortDirection"]);

    var SortedByIcon = isSortedBy ? sortDirection === 'asc' ? _reactIcons.LongArrowAltUpIcon : _reactIcons.LongArrowAltDownIcon : _reactIcons.ArrowsAltVIcon;
    return _react2["default"].createElement("button", _extends({}, props, {
      className: (0, _reactStyles.css)(className),
      onClick: function onClick(event) {
        return onSort && onSort(event);
      }
    }), children, _react2["default"].createElement("span", {
      className: (0, _reactStyles.css)(_tableCss2["default"].tableSortIndicator)
    }, _react2["default"].createElement(SortedByIcon, null)));
  };

  SortColumn.propTypes = propTypes;
  SortColumn.defaultProps = defaultProps;
  exports["default"] = SortColumn;
});