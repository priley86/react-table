(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash-es", "react", "./types", "./body-row", "./resolve-row-key"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash-es"), require("react"), require("./types"), require("./body-row"), require("./resolve-row-key"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.lodashEs, global.react, global.types, global.bodyRow, global.resolveRowKey);
    global.body = mod.exports;
  }
})(this, function (exports, _lodashEs, _react, _types, _bodyRow, _resolveRowKey) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _bodyRow2 = _interopRequireDefault(_bodyRow);

  var _resolveRowKey2 = _interopRequireDefault(_resolveRowKey);

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

  /**
   * body.js
   *
   * Forked from reactabular-table version 8.14.0
   * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
   * */


  var Body = function (_React$Component) {
    _inherits(Body, _React$Component);

    function Body() {
      _classCallCheck(this, Body);

      return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
    }

    _createClass(Body, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
        // eslint-disable-line no-unused-vars
        // Skip checking props against `onRow` since that can be bound at render().
        // That's not particularly good practice but you never know how the users
        // prefer to define the handler.

        // Check for wrapper based override.
        var renderers = nextContext.renderers;

        if (renderers && renderers.body && renderers.body.wrapper.shouldComponentUpdate) {
          if ((0, _lodashEs.isFunction)(renderers.body.wrapper.shouldComponentUpdate)) {
            return renderers.body.wrapper.shouldComponentUpdate.call(this, nextProps, nextState, nextContext);
          }

          return true;
        }

        return !((0, _lodashEs.isEqual)(omitOnRow(this.props), omitOnRow(nextProps)) && (0, _lodashEs.isEqual)(this.context, nextContext));
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            onRow = _props.onRow,
            rows = _props.rows,
            rowKey = _props.rowKey,
            props = _objectWithoutProperties(_props, ['onRow', 'rows', 'rowKey']);

        var _context = this.context,
            columns = _context.columns,
            renderers = _context.renderers;

        return _react2.default.createElement(renderers.body.wrapper, props, rows.map(function (rowData, index) {
          var rowIndex = rowData._index || index;
          var key = (0, _resolveRowKey2.default)({ rowData: rowData, rowIndex: rowIndex, rowKey: rowKey });

          return _react2.default.createElement(_bodyRow2.default, {
            key: key,
            renderers: renderers.body,
            onRow: onRow,
            rowKey: key,
            rowIndex: rowIndex,
            rowData: rowData,
            columns: columns
          });
        }));
      }
    }]);

    return Body;
  }(_react2.default.Component);

  Body.propTypes = _types.tableBodyTypes;
  Body.defaultProps = _types.tableBodyDefaults;
  Body.contextTypes = _types.tableBodyContextTypes;

  function omitOnRow(props) {
    var onRow = props.onRow,
        ret = _objectWithoutProperties(props, ['onRow']); // eslint-disable-line no-unused-vars

    return ret;
  }

  exports.default = Body;
});