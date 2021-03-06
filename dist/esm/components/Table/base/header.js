var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * header.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 * */
import React from 'react';
import { tableHeaderTypes, tableHeaderContextTypes } from './types';
import HeaderRow from './header-row';

// eslint-disable-next-line react/prefer-stateless-function

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          headerRows = _props.headerRows,
          onRow = _props.onRow,
          props = _objectWithoutProperties(_props, ['children', 'headerRows', 'onRow']);

      var _context = this.context,
          renderers = _context.renderers,
          columns = _context.columns;

      // If headerRows aren't passed, default to bodyColumns as header rows

      return React.createElement(renderers.header.wrapper, props, [(headerRows || [columns]).map(function (rowData, rowIndex) {
        return React.createElement(HeaderRow, {
          key: rowIndex + '-header-row',
          renderers: renderers.header,
          onRow: onRow,
          rowData: rowData,
          rowIndex: rowIndex
        });
      })].concat(children));
    }
  }]);

  return Header;
}(React.Component);

Header.propTypes = tableHeaderTypes;
Header.contextTypes = tableHeaderContextTypes;

export default Header;