"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./decorators/selectable", "./decorators/sortable", "./decorators/cellActions", "./decorators/cellWidth", "./decorators/textCenter", "./decorators/collapsible", "./decorators/compoundExpand", "./decorators/headerCol", "./decorators/classNames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./decorators/selectable"), require("./decorators/sortable"), require("./decorators/cellActions"), require("./decorators/cellWidth"), require("./decorators/textCenter"), require("./decorators/collapsible"), require("./decorators/compoundExpand"), require("./decorators/headerCol"), require("./decorators/classNames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.selectable, global.sortable, global.cellActions, global.cellWidth, global.textCenter, global.collapsible, global.compoundExpand, global.headerCol, global.classNames);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _selectable, _sortable, _cellActions, _cellWidth, _textCenter, _collapsible, _compoundExpand, _headerCol, _classNames) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "selectable", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_selectable).default;
    }
  });
  Object.defineProperty(exports, "sortable", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_sortable).default;
    }
  });
  Object.defineProperty(exports, "cellActions", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_cellActions).default;
    }
  });
  Object.defineProperty(exports, "cellWidth", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_cellWidth).default;
    }
  });
  Object.defineProperty(exports, "textCenter", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_textCenter).default;
    }
  });
  Object.defineProperty(exports, "collapsible", {
    enumerable: true,
    get: function () {
      return _collapsible.collapsible;
    }
  });
  Object.defineProperty(exports, "expandedRow", {
    enumerable: true,
    get: function () {
      return _collapsible.expandedRow;
    }
  });
  Object.defineProperty(exports, "expandable", {
    enumerable: true,
    get: function () {
      return _collapsible.expandable;
    }
  });
  Object.defineProperty(exports, "compoundExpand", {
    enumerable: true,
    get: function () {
      return _compoundExpand.compoundExpand;
    }
  });
  Object.defineProperty(exports, "headerCol", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_headerCol).default;
    }
  });
  Object.defineProperty(exports, "classNames", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_classNames).default;
    }
  });
  Object.defineProperty(exports, "Visibility", {
    enumerable: true,
    get: function () {
      return _classNames.Visibility;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var emptyTD = exports.emptyTD = function emptyTD() {
    return {
      scope: '',
      component: 'td'
    };
  };

  var scopeColTransformer = exports.scopeColTransformer = function scopeColTransformer() {
    return {
      scope: 'col'
    };
  };

  var emptyCol = exports.emptyCol = function emptyCol(label) {
    return _objectSpread({}, label ? {} : {
      scope: ''
    });
  };

  var parentId = exports.parentId = function parentId(_value, _ref) {
    var rowData = _ref.rowData;
    return {
      parentId: rowData.parent
    };
  };

  var mapProps = exports.mapProps = function mapProps(_label, _ref2) {
    var property = _ref2.property,
        rowData = _ref2.rowData;
    return _objectSpread({}, rowData[property] && rowData[property].props);
  };
});