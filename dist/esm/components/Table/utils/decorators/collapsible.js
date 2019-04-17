import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '../../../../@patternfly/patternfly/components/Table/table.css.js';
import CollapseColumn from '../../CollapseColumn';
import ExpandableRowContent from '../../ExpandableRowContent';

export var collapsible = function collapsible(value, _ref) {
  var rowIndex = _ref.rowIndex,
      columnIndex = _ref.columnIndex,
      rowData = _ref.rowData,
      column = _ref.column,
      property = _ref.property;
  var _column$extraParams = column.extraParams,
      onCollapse = _column$extraParams.onCollapse,
      _column$extraParams$r = _column$extraParams.rowLabeledBy,
      rowLabeledBy = _column$extraParams$r === undefined ? 'simple-node' : _column$extraParams$r,
      _column$extraParams$e = _column$extraParams.expandId,
      expandId = _column$extraParams$e === undefined ? 'expand-toggle' : _column$extraParams$e;

  var extraData = {
    rowIndex: rowIndex,
    columnIndex: columnIndex,
    column: column,
    property: property
  };

  function onToggle(event) {
    onCollapse && onCollapse(event, rowIndex, rowData && !rowData.isOpen, rowData, extraData);
  }
  return {
    className: rowData.isOpen !== undefined && css(styles.tableToggle),
    isVisible: !rowData.fullWidth,
    children: React.createElement(
      CollapseColumn,
      {
        'aria-labelledby': '' + rowLabeledBy + rowIndex + ' ' + expandId + rowIndex,
        onToggle: onToggle,
        id: expandId + rowIndex,
        isOpen: rowData && rowData.isOpen
      },
      value
    )
  };
};

export var expandable = function expandable(value, _ref2) {
  var rowData = _ref2.rowData;
  return rowData.hasOwnProperty('parent') ? React.createElement(
    ExpandableRowContent,
    null,
    value
  ) : value;
};

export var expandedRow = function expandedRow(colSpan) {
  var expandedRowFormatter = function expandedRowFormatter(value, _ref3) {
    var rowIndex = _ref3.rowIndex,
        rowData = _ref3.rowData,
        _ref3$column$extraPar = _ref3.column.extraParams.contentId,
        contentId = _ref3$column$extraPar === undefined ? 'expanded-content' : _ref3$column$extraPar;
    return rowData.hasOwnProperty('parent') && {
      colSpan: colSpan + !!rowData.fullWidth,
      id: contentId + rowIndex,
      className: rowData.noPadding && css(styles.modifiers.noPadding)
    };
  };
  return expandedRowFormatter;
};