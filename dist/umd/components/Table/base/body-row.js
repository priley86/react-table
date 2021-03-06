(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash-es", "react", "./columns-are-equal", "./evaluate-formatters", "./evaluate-transforms", "./merge-props", "./types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash-es"), require("react"), require("./columns-are-equal"), require("./evaluate-formatters"), require("./evaluate-transforms"), require("./merge-props"), require("./types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.lodashEs, global.react, global.columnsAreEqual, global.evaluateFormatters, global.evaluateTransforms, global.mergeProps, global.types);
    global.bodyRow = mod.exports;
  }
})(this, function (exports, _lodashEs, _react, _columnsAreEqual, _evaluateFormatters, _evaluateTransforms, _mergeProps, _types) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _columnsAreEqual2 = _interopRequireDefault(_columnsAreEqual);

  var _evaluateFormatters2 = _interopRequireDefault(_evaluateFormatters);

  var _evaluateTransforms2 = _interopRequireDefault(_evaluateTransforms);

  var _mergeProps2 = _interopRequireDefault(_mergeProps);

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
   * body-row.js
   *
   * Forked from reactabular-table version 8.14.0
   * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
   * */

  var BodyRow = function (_React$Component) {
    _inherits(BodyRow, _React$Component);

    function BodyRow() {
      _classCallCheck(this, BodyRow);

      return _possibleConstructorReturn(this, (BodyRow.__proto__ || Object.getPrototypeOf(BodyRow)).apply(this, arguments));
    }

    _createClass(BodyRow, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        // eslint-disable-line no-unused-vars
        var previousProps = this.props;

        // Check for row based override.
        var renderers = nextProps.renderers;

        if (renderers && renderers.row && renderers.row.shouldComponentUpdate) {
          if ((0, _lodashEs.isFunction)(renderers.row.shouldComponentUpdate)) {
            return renderers.row.shouldComponentUpdate.call(this, nextProps);
          }

          return true;
        }

        return !((0, _columnsAreEqual2.default)(previousProps.columns, nextProps.columns) && (0, _lodashEs.isEqual)(previousProps.rowData, nextProps.rowData));
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            columns = _props.columns,
            renderers = _props.renderers,
            onRow = _props.onRow,
            rowKey = _props.rowKey,
            rowIndex = _props.rowIndex,
            rowData = _props.rowData;

        return _react2.default.createElement(renderers.row, onRow(rowData, { rowIndex: rowIndex, rowKey: rowKey }), columns.map(function (column, columnIndex) {
          var property = column.property,
              cell = column.cell,
              props = column.props;

          var evaluatedProperty = property || cell && cell.property;

          var _ref = cell || {},
              _ref$transforms = _ref.transforms,
              transforms = _ref$transforms === undefined ? [] : _ref$transforms,
              _ref$formatters = _ref.formatters,
              formatters = _ref$formatters === undefined ? [] : _ref$formatters; // TODO: test against this case


          var extraParameters = {
            columnIndex: columnIndex,
            property: evaluatedProperty,
            column: column,
            rowData: rowData,
            rowIndex: rowIndex,
            rowKey: rowKey
          };
          var transformed = (0, _evaluateTransforms2.default)(transforms, rowData[evaluatedProperty], extraParameters);

          if (!transformed) {
            console.warn('Table.Body - Failed to receive a transformed result'); // eslint-disable-line max-len, no-console
          }

          return _react2.default.createElement(renderers.cell, _extends({
            key: columnIndex + '-cell'
          }, (0, _mergeProps2.default)(props, cell && cell.props, transformed)), transformed.children || (0, _evaluateFormatters2.default)(formatters)(rowData['_' + evaluatedProperty] || rowData[evaluatedProperty], extraParameters));
        }));
      }
    }]);

    return BodyRow;
  }(_react2.default.Component);

  BodyRow.defaultProps = _types.tableBodyRowDefaults;
  BodyRow.propTypes = _types.tableBodyRowTypes;

  exports.default = BodyRow;
});