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
    global.columnsAreEqual = mod.exports;
  }
})(this, function (exports, _lodashEs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function columnsAreEqual(oldColumns, newColumns) {
    return (0, _lodashEs.isEqualWith)(oldColumns, newColumns, function (a, b) {
      if ((0, _lodashEs.isFunction)(a) && (0, _lodashEs.isFunction)(b)) {
        return true;
      }

      return undefined;
    });
  } /**
     * columns-are-equal.js
     *
     * Forked from reactabular-table version 8.14.0
     * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
     * */
  exports.default = columnsAreEqual;
});