(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-up-icon', '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-down-icon', '@patternfly/react-icons/dist/esm/icons/arrows-alt-v-icon', '@patternfly/react-styles', '../../@patternfly/patternfly/components/Table/table.css.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('@patternfly/react-icons/dist/esm/icons/long-arrow-alt-up-icon'), require('@patternfly/react-icons/dist/esm/icons/long-arrow-alt-down-icon'), require('@patternfly/react-icons/dist/esm/icons/arrows-alt-v-icon'), require('@patternfly/react-styles'), require('../../@patternfly/patternfly/components/Table/table.css.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.longArrowAltUpIcon, global.longArrowAltDownIcon, global.arrowsAltVIcon, global.reactStyles, global.tableCss);
    global.SortColumn = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _longArrowAltUpIcon, _longArrowAltDownIcon, _arrowsAltVIcon, _reactStyles, _tableCss) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SortByDirection = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _longArrowAltUpIcon2 = _interopRequireDefault(_longArrowAltUpIcon);

  var _longArrowAltDownIcon2 = _interopRequireDefault(_longArrowAltDownIcon);

  var _arrowsAltVIcon2 = _interopRequireDefault(_arrowsAltVIcon);

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
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    isSortedBy: _propTypes2.default.bool,
    onSort: _propTypes2.default.func,
    sortDirection: _propTypes2.default.string
  };
  var defaultProps = {
    children: null,
    className: '',
    isSortedBy: false,
    onSort: null,
    sortDirection: ''
  };

  var SortByDirection = exports.SortByDirection = {
    asc: 'asc',
    desc: 'desc'
  };

  var SortColumn = function SortColumn(_ref) {
    var isSortedBy = _ref.isSortedBy,
        children = _ref.children,
        className = _ref.className,
        onSort = _ref.onSort,
        sortDirection = _ref.sortDirection,
        props = _objectWithoutProperties(_ref, ['isSortedBy', 'children', 'className', 'onSort', 'sortDirection']);

    var SortedByIcon = isSortedBy ? sortDirection === 'asc' ? _longArrowAltUpIcon2.default : _longArrowAltDownIcon2.default : _arrowsAltVIcon2.default;
    return _react2.default.createElement('button', _extends({}, props, { className: (0, _reactStyles.css)(className), onClick: function onClick(event) {
        return onSort && onSort(event);
      } }), children, _react2.default.createElement('span', { className: (0, _reactStyles.css)(_tableCss2.default.tableSortIndicator) }, _react2.default.createElement(SortedByIcon, null)));
  };

  SortColumn.propTypes = propTypes;
  SortColumn.defaultProps = defaultProps;

  exports.default = SortColumn;
});