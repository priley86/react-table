var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Body } from './base';
import PropTypes from 'prop-types';
import { TableContext } from './Table';
import { isRowExpanded } from './utils';

var propTypes = {
  /** Additional classes for table body. */
  className: PropTypes.string,
  /** Specify key which should be used for labeling each row. */
  rowKey: PropTypes.string,
  /** Function that is fired when user clicks on row.  */
  onRowClick: PropTypes.func
};

var defaultProps = {
  rowKey: 'id',
  className: '',
  onRowClick: function onRowClick() {
    return undefined;
  }
};

var flagVisibility = function flagVisibility(rows) {
  var visibleRows = rows.filter(function (oneRow) {
    return !oneRow.parent || oneRow.isExpanded;
  });
  if (visibleRows.length > 0) {
    visibleRows[0].isFirstVisible = true;
    visibleRows[visibleRows.length - 1].isLastVisible = true;
  }
};

var ContextBody = function (_React$Component) {
  _inherits(ContextBody, _React$Component);

  function ContextBody() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ContextBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContextBody.__proto__ || Object.getPrototypeOf(ContextBody)).call.apply(_ref, [this].concat(args))), _this), _this.onRow = function (row, rowProps) {
      var _this$props = _this.props,
          onRowClick = _this$props.onRowClick,
          onRow = _this$props.onRow;

      var extendedRowProps = _extends({}, rowProps, onRow ? onRow(row, rowProps) : {});
      return {
        row: row,
        rowProps: extendedRowProps,
        onMouseDown: function onMouseDown(event) {
          var computedData = {
            isInput: event.target.tagName !== 'INPUT',
            isButton: event.target.tagName !== 'BUTTON'
          };
          onRowClick(event, row, rowProps, computedData);
        }
      };
    }, _this.mapCells = function (headerData, row, rowKey) {
      // column indexes start after generated optional columns
      var additionalColsIndexShift = headerData[0].extraParams.firstUserColumnIndex;

      return _extends({}, row && (row.cells || row).reduce(function (acc, cell, cellIndex) {
        var isCellObject = cell === Object(cell);

        var mappedCell = _defineProperty({}, headerData[cellIndex + additionalColsIndexShift].property, {
          title: isCellObject ? cell.title : cell,
          props: _extends({
            isVisible: true
          }, isCellObject ? cell.props : null)
        });

        // increment the shift index when a cell spans multiple columns
        if (isCellObject && cell.props && cell.props.colSpan) {
          additionalColsIndexShift += cell.props.colSpan - 1;
        }
        return _extends({}, acc, mappedCell);
      }, { id: row.id !== undefined ? row.id : rowKey }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContextBody, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          headerData = _props.headerData,
          rows = _props.rows,
          rowKey = _props.rowKey,
          children = _props.children,
          onRowClick = _props.onRowClick,
          props = _objectWithoutProperties(_props, ['className', 'headerData', 'rows', 'rowKey', 'children', 'onRowClick']);

      var mappedRows = void 0;
      if (headerData.length > 0) {
        mappedRows = rows.map(function (oneRow, oneRowKey) {
          return _extends({}, oneRow, _this2.mapCells(headerData, oneRow, oneRowKey), {
            isExpanded: isRowExpanded(oneRow, rows),
            isFirst: oneRowKey === 0,
            isLast: oneRowKey === rows.length - 1,
            isFirstVisible: false,
            isLastVisible: false
          });
        });
        flagVisibility(mappedRows);
      }

      return React.createElement(
        React.Fragment,
        null,
        mappedRows && React.createElement(Body, _extends({}, props, {
          mappedRows: mappedRows,
          rows: mappedRows,
          onRow: this.onRow,
          rowKey: rowKey,
          className: className
        }))
      );
    }
  }]);

  return ContextBody;
}(React.Component);

var TableBody = function TableBody(props) {
  return React.createElement(
    TableContext.Consumer,
    null,
    function (_ref2) {
      var headerData = _ref2.headerData,
          rows = _ref2.rows;
      return React.createElement(ContextBody, _extends({ headerData: headerData, rows: rows }, props));
    }
  );
};

TableBody.propTypes = propTypes;
TableBody.defaultProps = defaultProps;

export default TableBody;