"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var buildExpandableRows = exports.buildExpandableRows = function buildExpandableRows() {
    var relationships = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var openIndexes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var rowCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var rows = [];

    for (var i = 0; i < rowCount; i++) {
      var row = {
        data: {
          mockData: 'mock'
        }
      };

      if (openIndexes.indexOf(i) >= 0) {
        row.isOpen = true;
      }

      if (relationships[i] >= 0) {
        row.parent = relationships[i];
      }

      rows.push(row);
    }

    return rows;
  };
});