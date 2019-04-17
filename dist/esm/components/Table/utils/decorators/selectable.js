var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '../../../../@patternfly/patternfly/components/Table/table.css.js';
import SelectColumn from '../../SelectColumn';

export default (function (label, _ref) {
  var rowIndex = _ref.rowIndex,
      columnIndex = _ref.columnIndex,
      rowData = _ref.rowData,
      column = _ref.column,
      property = _ref.property;
  var _column$extraParams = column.extraParams,
      onSelect = _column$extraParams.onSelect,
      allRowsSelected = _column$extraParams.allRowsSelected,
      _column$extraParams$r = _column$extraParams.rowLabeledBy,
      rowLabeledBy = _column$extraParams$r === undefined ? 'simple-node' : _column$extraParams$r;

  var extraData = {
    rowIndex: rowIndex,
    columnIndex: columnIndex,
    column: column,
    property: property
  };

  if (rowData && rowData.hasOwnProperty('parent') && !rowData.showSelect) {
    return {
      component: 'td',
      isVisible: true,
      scope: ''
    };
  }
  var rowId = rowIndex !== undefined ? rowIndex : -1;

  function selectClick(event) {
    var selected = rowIndex === undefined ? event.target.checked : rowData && !rowData.selected;
    onSelect && onSelect(event, selected, rowId, rowData, extraData);
  }
  var customProps = _extends({}, rowId !== -1 ? {
    checked: rowData && !!rowData.selected,
    'aria-labelledby': rowLabeledBy + rowIndex
  } : {
    checked: allRowsSelected,
    'aria-label': 'Select all rows'
  });

  return {
    className: css(styles.tableCheck),
    component: 'td',
    scope: '',
    isVisible: true,
    children: React.createElement(
      SelectColumn,
      _extends({}, customProps, { onSelect: selectClick, name: rowId !== -1 ? 'checkrow' + rowIndex : 'check-all' }),
      label
    )
  };
});