import React from 'react';
import { css } from '@patternfly/react-styles';
import { Button } from '@patternfly/react-core';
import styles from '../../../../@patternfly/patternfly/components/Table/table.css.js';

export var compoundExpand = function compoundExpand(value, _ref) {
  var rowIndex = _ref.rowIndex,
      columnIndex = _ref.columnIndex,
      rowData = _ref.rowData,
      column = _ref.column,
      property = _ref.property;

  if (!value) {
    return null;
  }
  var title = value.title,
      props = value.props;
  var onExpand = column.extraParams.onExpand;

  var extraData = {
    rowIndex: rowIndex,
    columnIndex: columnIndex,
    column: column,
    property: property
  };

  function onToggle(event) {
    onExpand && onExpand(event, rowIndex, columnIndex, props.isOpen, rowData, extraData);
  }
  return {
    className: css(styles.tableCompoundExpansionToggle, props.isOpen && styles.modifiers.expanded),
    children: props.isOpen !== undefined && React.createElement(
      Button,
      { variant: 'link', onClick: onToggle, 'aria-expanded': props.isOpen, 'aria-controls': props.ariaControls },
      title
    )
  };
};