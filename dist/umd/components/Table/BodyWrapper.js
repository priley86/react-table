(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Table/table.css.js", "@patternfly/react-styles", "./utils/headerUtils", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Table/table.css.js"), require("@patternfly/react-styles"), require("./utils/headerUtils"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.tableCss, global.reactStyles, global.headerUtils, global.propTypes);
    global.BodyWrapper = mod.exports;
  }
})(this, function (exports, _react, _tableCss, _reactStyles, _headerUtils, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _tableCss2 = _interopRequireDefault(_tableCss);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var BodyWrapper = function (_Component) {
    _inherits(BodyWrapper, _Component);

    function BodyWrapper() {
      _classCallCheck(this, BodyWrapper);

      return _possibleConstructorReturn(this, (BodyWrapper.__proto__ || Object.getPrototypeOf(BodyWrapper)).apply(this, arguments));
    }

    _createClass(BodyWrapper, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            mappedRows = _props.mappedRows,
            tbodyRef = _props.tbodyRef,
            props = _objectWithoutProperties(_props, ['mappedRows', 'tbodyRef']);

        if (mappedRows && mappedRows.some(function (row) {
          return row.hasOwnProperty('parent');
        })) {
          return _react2.default.createElement(_react.Fragment, null, (0, _headerUtils.mapOpenedRows)(mappedRows, this.props.children).map(function (oneRow, key) {
            return _react2.default.createElement('tbody', _extends({}, props, {
              className: (0, _reactStyles.css)(oneRow.isOpen && _tableCss2.default.modifiers.expanded),
              key: 'tbody-' + key,
              ref: tbodyRef
            }), oneRow.rows);
          }));
        }
        return _react2.default.createElement('tbody', _extends({}, props, { ref: tbodyRef }));
      }
    }]);

    return BodyWrapper;
  }(_react.Component);

  BodyWrapper.propTypes = {
    rows: _propTypes2.default.array,
    onCollapse: _propTypes2.default.func,
    tbodyRef: _propTypes2.default.func
  };

  BodyWrapper.defaultProps = {
    rows: [],
    tbodyRef: null
  };

  exports.default = BodyWrapper;
});