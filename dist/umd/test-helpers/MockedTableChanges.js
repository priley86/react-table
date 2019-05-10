"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../components/Table/Table", "../components/Table"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../components/Table/Table"), require("../components/Table"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Table, global.Table);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _Table, _Table2) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TableProvider = exports.withContext = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _typeof2(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof2(obj) {
        return typeof obj;
      };
    } else {
      _typeof2 = function _typeof2(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof2(obj);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  var withContext = exports.withContext = function withContext(_ref) {
    var _ref$context = _ref.context,
        context = _ref$context === void 0 ? {} : _ref$context,
        _ref$contextType = _ref.contextType,
        contextType = _ref$contextType === void 0 ? {} : _ref$contextType;
    return function (WrappedComponent) {
      var WithContext =
      /*#__PURE__*/
      function (_Component) {
        _inherits(WithContext, _Component);

        function WithContext() {
          _classCallCheck(this, WithContext);

          return _possibleConstructorReturn(this, _getPrototypeOf(WithContext).apply(this, arguments));
        }

        _createClass(WithContext, [{
          key: "getChildContext",
          value: function getChildContext() {
            return context;
          }
        }, {
          key: "render",
          value: function render() {
            return _react2["default"].createElement(WrappedComponent, null, this.props.children);
          }
        }]);

        return WithContext;
      }(_react.Component);

      WithContext.WrappedComponent = WrappedComponent;
      WithContext.childContextTypes = contextType;
      return WithContext;
    };
  };

  var TableProvider = exports.TableProvider = withContext({
    context: {
      columns: [],
      renderers: {
        header: {
          wrapper: 'thead',
          row: 'tr',
          cell: 'th'
        }
      }
    },
    contextType: {
      columns: _propTypes2["default"].any,
      renderers: _propTypes2["default"].any
    }
  })('table');

  exports["default"] = function (_ref2) {
    var updateFunc = _ref2.updateFunc,
        columns = _ref2.columns;
    return _react2["default"].createElement(_Table.TableContext.Provider, {
      value: {
        updateHeaderData: updateFunc
      }
    }, _react2["default"].createElement(TableProvider, null, _react2["default"].createElement(_Table2.TableHeader, {
      headerRows: columns
    })));
  };
});