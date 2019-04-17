import React from 'react';
import SortColumn, { SortByDirection } from '../../SortColumn';
import { css } from '@patternfly/react-styles';
import styles from '../../../../@patternfly/patternfly/components/Table/table.css.js';
import buttonStyles from '../../../../@patternfly/patternfly/components/Button/button.css.js';

export default (function (label, _ref) {
  var columnIndex = _ref.columnIndex,
      column = _ref.column,
      property = _ref.property;
  var _column$extraParams = column.extraParams,
      sortBy = _column$extraParams.sortBy,
      onSort = _column$extraParams.onSort;

  var extraData = {
    columnIndex: columnIndex,
    column: column,
    property: property
  };

  var isSortedBy = sortBy && columnIndex === sortBy.index;
  function sortClicked(event) {
    var reversedDirection = void 0;
    if (!isSortedBy) {
      reversedDirection = SortByDirection.asc;
    } else {
      reversedDirection = sortBy.direction === SortByDirection.asc ? SortByDirection.desc : SortByDirection.asc;
    }
    onSort && onSort(event, columnIndex, reversedDirection, extraData);
  }

  return {
    className: css(styles.tableSort, isSortedBy && styles.modifiers.selected),
    'aria-sort': isSortedBy ? sortBy.direction + 'ending' : 'none',
    children: React.createElement(
      SortColumn,
      {
        isSortedBy: isSortedBy,
        sortDirection: isSortedBy ? sortBy.direction : '',
        onSort: sortClicked,
        className: css(buttonStyles.button, buttonStyles.modifiers.plain)
      },
      label
    )
  };
});