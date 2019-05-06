'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodashEs = require('lodash-es');

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