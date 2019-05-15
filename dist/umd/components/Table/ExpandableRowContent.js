(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@patternfly/react-styles', '../../@patternfly/patternfly/components/Table/table.css.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@patternfly/react-styles'), require('../../@patternfly/patternfly/components/Table/table.css.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles, global.tableCss);
    global.ExpandableRowContent = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactStyles, _tableCss) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }

  var propTypes = {
    children: _propTypes2.default.node
  };
  var defaultProps = {
    children: null
  };

  var ExpandableRowContent = function ExpandableRowContent(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement('div', _extends({}, props, { className: (0, _reactStyles.css)(_tableCss2.default.tableExpandableRowContent) }), children);
  };

  ExpandableRowContent.propTypes = propTypes;
  ExpandableRowContent.defaultProps = defaultProps;

  exports.default = ExpandableRowContent;
});