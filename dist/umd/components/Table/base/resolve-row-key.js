(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'lodash-es'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('lodash-es'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.lodashEs);
    global.resolveRowKey = mod.exports;
  }
})(this, function (exports, _lodashEs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function resolveRowKey(_ref) {
    var rowData = _ref.rowData,
        rowIndex = _ref.rowIndex,
        rowKey = _ref.rowKey;

    if (typeof rowKey === 'function') {
      return rowKey({ rowData: rowData, rowIndex: rowIndex }) + '-row';
    } else if (process.env.NODE_ENV !== 'production') {
      // Arrays cannot have rowKeys by definition so we have to go by index there.
      if (!(0, _lodashEs.isArray)(rowData) && rowData[rowKey] === undefined) {
        console.warn(
        // eslint-disable-line no-console
        'Table.Body - Missing valid rowKey!', rowData, rowKey);
      }
    }

    if (rowData[rowKey] === 0) {
      return rowData[rowKey] + '-row';
    }

    return (rowData[rowKey] || rowIndex) + '-row';
  } /**
     * resolve-row-key.js
     *
     * Forked from reactabular-table version 8.14.0
     * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
     * */
  exports.default = resolveRowKey;
});