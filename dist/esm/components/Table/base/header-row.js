var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * header-row.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 * */
import React from 'react';
import evaluateFormatters from './evaluate-formatters';
import evaluateTransforms from './evaluate-transforms';
import mergeProps from './merge-props';
import { tableHeaderRowTypes, tableHeaderRowDefaults } from './types';

var HeaderRow = function HeaderRow(_ref) {
  var rowData = _ref.rowData,
      rowIndex = _ref.rowIndex,
      renderers = _ref.renderers,
      onRow = _ref.onRow;
  return React.createElement(renderers.row, onRow(rowData, { rowIndex: rowIndex }), rowData.map(function (column, columnIndex) {
    var property = column.property,
        _column$header = column.header,
        header = _column$header === undefined ? {} : _column$header,
        _column$props = column.props,
        props = _column$props === undefined ? {} : _column$props;

    var evaluatedProperty = property || header && header.property;
    var label = header.label,
        _header$transforms = header.transforms,
        transforms = _header$transforms === undefined ? [] : _header$transforms,
        _header$formatters = header.formatters,
        formatters = _header$formatters === undefined ? [] : _header$formatters;

    var extraParameters = {
      columnIndex: columnIndex,
      property: evaluatedProperty,
      column: column
    };
    var transformedProps = evaluateTransforms(transforms, label, extraParameters);

    if (!transformedProps) {
      console.warn('Table.Header - Failed to receive a transformed result'); // eslint-disable-line max-len, no-console
    }

    return React.createElement(renderers.cell, _extends({
      key: columnIndex + '-header'
    }, mergeProps(props, header && header.props, transformedProps)), transformedProps.children || evaluateFormatters(formatters)(label, extraParameters));
  }));
};
HeaderRow.defaultProps = tableHeaderRowDefaults;
HeaderRow.propTypes = tableHeaderRowTypes;

export default HeaderRow;