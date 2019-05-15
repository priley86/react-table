(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './provider', './header', './body', './body-row', './evaluate-formatters', './evaluate-transforms', './merge-props', './columns-are-equal', './resolve-row-key'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./provider'), require('./header'), require('./body'), require('./body-row'), require('./evaluate-formatters'), require('./evaluate-transforms'), require('./merge-props'), require('./columns-are-equal'), require('./resolve-row-key'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.provider, global.header, global.body, global.bodyRow, global.evaluateFormatters, global.evaluateTransforms, global.mergeProps, global.columnsAreEqual, global.resolveRowKey);
    global.index = mod.exports;
  }
})(this, function (exports, _provider, _header, _body, _bodyRow, _evaluateFormatters, _evaluateTransforms, _mergeProps, _columnsAreEqual, _resolveRowKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'Provider', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_provider).default;
    }
  });
  Object.defineProperty(exports, 'Header', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_header).default;
    }
  });
  Object.defineProperty(exports, 'Body', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_body).default;
    }
  });
  Object.defineProperty(exports, 'BodyRow', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_bodyRow).default;
    }
  });
  Object.defineProperty(exports, 'evaluateFormatters', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_evaluateFormatters).default;
    }
  });
  Object.defineProperty(exports, 'evaluateTransforms', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_evaluateTransforms).default;
    }
  });
  Object.defineProperty(exports, 'mergeProps', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_mergeProps).default;
    }
  });
  Object.defineProperty(exports, 'columnsAreEqual', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_columnsAreEqual).default;
    }
  });
  Object.defineProperty(exports, 'resolveRowKey', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_resolveRowKey).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});