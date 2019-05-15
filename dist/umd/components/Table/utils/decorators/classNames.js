(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '@patternfly/react-styles', '../../../../@patternfly/patternfly/components/Table/table.css.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('@patternfly/react-styles'), require('../../../../@patternfly/patternfly/components/Table/table.css.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.tableCss);
    global.classNames = mod.exports;
  }
})(this, function (exports, _reactStyles, _tableCss) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Visibility = undefined;

  var _tableCss2 = _interopRequireDefault(_tableCss);

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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }

  var pickProperties = function pickProperties(object, properties) {
    return properties.reduce(function (picked, property) {
      return _extends({}, picked, _defineProperty({}, property, object[property]));
    }, {});
  };

  var Visibility = exports.Visibility = pickProperties(_tableCss2.default.modifiers, ['hidden', 'hiddenOnSm', 'hiddenOnMd', 'hiddenOnLg', 'hiddenOnXl', 'visibleOnSm', 'visibleOnMd', 'visibleOnLg', 'visibleOnXl']);

  exports.default = function () {
    for (var _len = arguments.length, classNames = Array(_len), _key = 0; _key < _len; _key++) {
      classNames[_key] = arguments[_key];
    }

    return function () {
      return {
        className: _reactStyles.css.apply(undefined, classNames)
      };
    };
  };
});