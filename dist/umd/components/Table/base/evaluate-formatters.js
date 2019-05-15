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
    global.evaluateFormatters = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * evaluate-formatters.js
   *
   * Forked from reactabular-table version 8.14.0
   * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
   * */
  function evaluateFormatters(formatters) {
    return function (value, extra) {
      return formatters.reduce(function (parameters, formatter) {
        return {
          value: formatter(parameters.value, parameters.extra),
          extra: extra
        };
      }, { value: value, extra: extra }).value;
    };
  }

  exports.default = evaluateFormatters;
});