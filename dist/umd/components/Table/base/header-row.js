(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './evaluate-formatters', './evaluate-transforms', './merge-props', './types'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./evaluate-formatters'), require('./evaluate-transforms'), require('./merge-props'), require('./types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.evaluateFormatters, global.evaluateTransforms, global.mergeProps, global.types);
    global.headerRow = mod.exports;
  }
})(this, function (exports, _react, _evaluateFormatters, _evaluateTransforms, _mergeProps, _types) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _evaluateFormatters2 = _interopRequireDefault(_evaluateFormatters);

  var _evaluateTransforms2 = _interopRequireDefault(_evaluateTransforms);

  var _mergeProps2 = _interopRequireDefault(_mergeProps);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  /**
   * header-row.js
   *
   * Forked from reactabular-table version 8.14.0
   * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
   * */


  var HeaderRow = function HeaderRow(_ref) {
    var rowData = _ref.rowData,
        rowIndex = _ref.rowIndex,
        renderers = _ref.renderers,
        onRow = _ref.onRow;
    return _react2.default.createElement(renderers.row, onRow(rowData, { rowIndex: rowIndex }), rowData.map(function (column, columnIndex) {
      var property = column.property,
          _column$header = column.header,
          header = _column$header === undefined ? {} : _column$header,
          _column$props = column.props,
          props = _column$props === undefined ? {} : _column$props;

      var evaluatedProperty = property || header && header.property;
      var label = header.label,
          _header$transforms = header.transforms,
          transforms = _header$transforms === undefined ? [] : _header$transforms,
          _header$formatters = header.formatters,
          formatters = _header$formatters === undefined ? [] : _header$formatters;

      var extraParameters = {
        columnIndex: columnIndex,
        property: evaluatedProperty,
        column: column
      };
      var transformedProps = (0, _evaluateTransforms2.default)(transforms, label, extraParameters);

      if (!transformedProps) {
        console.warn('Table.Header - Failed to receive a transformed result'); // eslint-disable-line max-len, no-console
      }

      return _react2.default.createElement(renderers.cell, _extends({
        key: columnIndex + '-header'
      }, (0, _mergeProps2.default)(props, header && header.props, transformedProps)), transformedProps.children || (0, _evaluateFormatters2.default)(formatters)(label, extraParameters));
    }));
  };
  HeaderRow.defaultProps = _types.tableHeaderRowDefaults;
  HeaderRow.propTypes = _types.tableHeaderRowTypes;

  exports.default = HeaderRow;
});