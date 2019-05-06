var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * body-row.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 * */

import { isEqual, isFunction } from 'lodash-es';
import React from 'react';
import columnsAreEqual from './columns-are-equal';
import evaluateFormatters from './evaluate-formatters';
import evaluateTransforms from './evaluate-transforms';
import mergeProps from './merge-props';
import { tableBodyRowDefaults, tableBodyRowTypes } from './types';

var BodyRow = function (_React$Component) {
  _inherits(BodyRow, _React$Component);

  function BodyRow() {
    _classCallCheck(this, BodyRow);

    return _possibleConstructorReturn(this, (BodyRow.__proto__ || Object.getPrototypeOf(BodyRow)).apply(this, arguments));
  }

  _createClass(BodyRow, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      // eslint-disable-line no-unused-vars
      var previousProps = this.props;

      // Check for row based override.
      var renderers = nextProps.renderers;


      if (renderers && renderers.row && renderers.row.shouldComponentUpdate) {
        if (isFunction(renderers.row.shouldComponentUpdate)) {
          return renderers.row.shouldComponentUpdate.call(this, nextProps);
        }

        return true;
      }

      return !(columnsAreEqual(previousProps.columns, nextProps.columns) && isEqual(previousProps.rowData, nextProps.rowData));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          columns = _props.columns,
          renderers = _props.renderers,
          onRow = _props.onRow,
          rowKey = _props.rowKey,
          rowIndex = _props.rowIndex,
          rowData = _props.rowData;


      return React.createElement(renderers.row, onRow(rowData, { rowIndex: rowIndex, rowKey: rowKey }), columns.map(function (column, columnIndex) {
        var property = column.property,
            cell = column.cell,
            props = column.props;

        var evaluatedProperty = property || cell && cell.property;

        var _ref = cell || {},
            _ref$transforms = _ref.transforms,
            transforms = _ref$transforms === undefined ? [] : _ref$transforms,
            _ref$formatters = _ref.formatters,
            formatters = _ref$formatters === undefined ? [] : _ref$formatters; // TODO: test against this case


        var extraParameters = {
          columnIndex: columnIndex,
          property: evaluatedProperty,
          column: column,
          rowData: rowData,
          rowIndex: rowIndex,
          rowKey: rowKey
        };
        var transformed = evaluateTransforms(transforms, rowData[evaluatedProperty], extraParameters);

        if (!transformed) {
          console.warn('Table.Body - Failed to receive a transformed result'); // eslint-disable-line max-len, no-console
        }

        return React.createElement(renderers.cell, _extends({
          key: columnIndex + '-cell'
        }, mergeProps(props, cell && cell.props, transformed)), transformed.children || evaluateFormatters(formatters)(rowData['_' + evaluatedProperty] || rowData[evaluatedProperty], extraParameters));
      }));
    }
  }]);

  return BodyRow;
}(React.Component);

BodyRow.defaultProps = tableBodyRowDefaults;
BodyRow.propTypes = tableBodyRowTypes;

export default BodyRow;