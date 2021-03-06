var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Header } from './base';
import PropTypes from 'prop-types';
import { TableContext } from './Table';

var propTypes = {
  /** Additional classes for header. */
  className: PropTypes.string
};

var defaultProps = {
  className: ''
};

var ContextHeader = function (_React$Component) {
  _inherits(ContextHeader, _React$Component);

  function ContextHeader() {
    _classCallCheck(this, ContextHeader);

    return _possibleConstructorReturn(this, (ContextHeader.__proto__ || Object.getPrototypeOf(ContextHeader)).apply(this, arguments));
  }

  _createClass(ContextHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          headerRows = _props.headerRows,
          props = _objectWithoutProperties(_props, ['className', 'headerRows']);

      return React.createElement(Header, _extends({}, props, { headerRows: headerRows, className: className }));
    }
  }]);

  return ContextHeader;
}(React.Component);

var TableHeader = function TableHeader(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return React.createElement(
    TableContext.Consumer,
    null,
    function (_ref2) {
      var headerRows = _ref2.headerRows;
      return React.createElement(ContextHeader, _extends({}, props, { headerRows: headerRows }));
    }
  );
};

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;