"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "../../../../@patternfly/patternfly/components/Table/table.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("../../../../@patternfly/patternfly/components/Table/table.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.tableCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles, _tableCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _tableCss2 = _interopRequireDefault(_tableCss);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports["default"] = function (width) {
    return function () {
      return {
        className: (0, _reactStyles.css)((0, _reactStyles.getModifier)(_tableCss2["default"], "width-".concat(width)))
      };
    };
  };
});