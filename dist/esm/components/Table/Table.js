var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import styles from '../../@patternfly/patternfly/components/Table/table.css.js';
import stylesGrid from '../../@patternfly/patternfly/components/Table/table-grid.css.js';
import { Provider } from './base';
import { DropdownPosition, DropdownDirection } from '@patternfly/react-core';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { SortByDirection } from './SortColumn';
import BodyCell from './BodyCell';
import HeaderCell from './HeaderCell';
import RowWrapper from './RowWrapper';
import BodyWrapper from './BodyWrapper';
import { calculateColumns } from './utils/headerUtils';

export var TableGridBreakpoint = {
  none: null,
  grid: 'grid',
  gridMd: 'grid-md',
  gridLg: 'grid-lg',
  gridXl: 'grid-xl'
};

export var TableVariant = {
  compact: 'compact'
};

var propTypes = {
  /** Table elements [Head, Body and Footer]. */
  children: PropTypes.node,
  /** Addional classes for Table. */
  className: PropTypes.string,
  /** Function called when user wants to collapse row. */
  onCollapse: PropTypes.func,
  /** Function called when user wants to compound expand row. */
  onExpand: PropTypes.func,
  /** Table variant, defaults to large. */
  variant: PropTypes.oneOf(Object.values(TableVariant)),
  /** Size at which table is broken into tiles. */
  gridBreakPoint: PropTypes.oneOf(Object.values(TableGridBreakpoint)),
  /** Indicates if border is visible on a compacat table.  Note that this can not be applied when using expandable */
  borders: PropTypes.bool,
  /** Settings for sorting, which index and direction is sorted by. */
  sortBy: PropTypes.shape({
    index: PropTypes.number,
    direction: PropTypes.oneOf(Object.values(SortByDirection))
  }),
  /** Function called when user wants to select row. */
  onSelect: PropTypes.func,
  /** Function called when user wants to sort table. */
  onSort: PropTypes.func,
  /** Additional cell displayed at the end of each row with dropdown of action items. */
  actions: PropTypes.arrayOf(PropTypes.shape({
    onClick: PropTypes.func,
    title: PropTypes.node
  })),
  /** Function should resolve an array of actions for each row in the same format as actions. */
  actionResolver: PropTypes.func,
  /** Function should resolve if action kebap is disabled for each row */
  areActionsDisabled: PropTypes.func,
  /** Override to the default BodyWrapper renderer */
  bodyWrapper: PropTypes.func,
  /** Override to the default RowWrapper renderer */
  rowWrapper: PropTypes.func,
  /** Actual rows to display in table. Either array of strings or row objects. <br/>
   * If you want to use components in row cells you can pass them as title prop in cells definition. <br/>
   * <pre>Ex: rows:[
   *   {cells:[
   *     {title: &lt;div>Some component&lt;/div>}
   *     ...
   *   ]}
   * ]
   * </pre> */
  rows: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({
    cells: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.shape({
      title: PropTypes.node
    })])),
    isOpen: PropTypes.bool,
    parent: PropTypes.number,
    fullWidth: PropTypes.bool,
    noPadding: PropTypes.bool,
    props: PropTypes.any
  }), PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({
    title: PropTypes.node
  }), PropTypes.node]))])).isRequired,
  /** Header cells to display in table. Either array of strings or array of string or cell object. */
  cells: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.shape({
    title: PropTypes.node,
    transforms: PropTypes.arrayOf(PropTypes.func), // Applies only to header cell
    cellTransforms: PropTypes.arrayOf(PropTypes.func), // Applies only to body cells
    columnTransforms: PropTypes.arrayOf(PropTypes.func), // Applies to both header and body cells
    formatters: PropTypes.arrayOf(PropTypes.func),
    cellFormatters: PropTypes.arrayOf(PropTypes.func)
  })])).isRequired,
  /** Aria labeled by this property collapse and select. */
  rowLabeledBy: PropTypes.string,
  /** Id prefix for expand buttons. */
  expandId: PropTypes.string,
  /** Id prefix for expanded content. */
  contentId: PropTypes.string,
  /** Position of dropdown from actions will be displayed. */
  dropdownPosition: PropTypes.oneOf(Object.values(DropdownPosition)),
  /** Direction of from actions will be displayed. */
  dropdownDirection: PropTypes.oneOf(Object.values(DropdownDirection)),
  /** Header to display above table for accessibility reasons. */
  header: function header(props) {
    if (!props['aria-label'] && !props.caption && !props.header && !props.role === 'presentation') {
      throw new Error('Specify at least one of: header, caption, aria-label');
    }
    return null;
  },
  /** Caption to display in table for accessibility reasons. */
  caption: function caption(props) {
    if (!props['aria-label'] && !props.caption && !props.header && !props.role === 'presentation') {
      throw new Error('Specify at least one of: header, caption, aria-label');
    }
    return null;
  },
  /** aria-label in table for accessibility reasons. */
  'aria-label': function ariaLabel(props) {
    if (!props['aria-label'] && !props.caption && !props.header && !props.role === 'presentation') {
      throw new Error('Specify at least one of: header, caption, aria-label');
    }
    return null;
  },
  role: PropTypes.string
};

var defaultProps = {
  children: null,
  onCollapse: null,
  onExpand: null,
  className: '',
  variant: null,
  borders: true,
  rowLabeledBy: 'simple-node',
  expandId: 'expandable-toggle',
  contentId: 'expanded-content',
  dropdownPosition: DropdownPosition.right,
  dropdownDirection: DropdownDirection.down,
  gridBreakPoint: TableGridBreakpoint.gridMd,
  role: 'grid'
};

export var TableContext = React.createContext();

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.state = {
      headerData: []
    };
    _this.isSelected = _this.isSelected.bind(_this);
    _this.areAllRowsSelected = _this.areAllRowsSelected.bind(_this);
    return _this;
  }

  _createClass(Table, [{
    key: 'isSelected',
    value: function isSelected(row) {
      return row.selected === true;
    }
  }, {
    key: 'areAllRowsSelected',
    value: function areAllRowsSelected(rows) {
      var _this2 = this;

      return rows.every(function (row) {
        return _this2.isSelected(row) || row.hasOwnProperty('parent') && !row.showSelect;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          caption = _props.caption,
          header = _props.header,
          className = _props.className,
          gridBreakPoint = _props.gridBreakPoint,
          onSort = _props.onSort,
          onSelect = _props.onSelect,
          sortBy = _props.sortBy,
          children = _props.children,
          actions = _props.actions,
          actionResolver = _props.actionResolver,
          areActionsDisabled = _props.areActionsDisabled,
          onCollapse = _props.onCollapse,
          onExpand = _props.onExpand,
          rowLabeledBy = _props.rowLabeledBy,
          dropdownPosition = _props.dropdownPosition,
          dropdownDirection = _props.dropdownDirection,
          contentId = _props.contentId,
          expandId = _props.expandId,
          variant = _props.variant,
          rows = _props.rows,
          cells = _props.cells,
          bodyWrapper = _props.bodyWrapper,
          rowWrapper = _props.rowWrapper,
          borders = _props.borders,
          role = _props.role,
          props = _objectWithoutProperties(_props, ['caption', 'header', 'className', 'gridBreakPoint', 'onSort', 'onSelect', 'sortBy', 'children', 'actions', 'actionResolver', 'areActionsDisabled', 'onCollapse', 'onExpand', 'rowLabeledBy', 'dropdownPosition', 'dropdownDirection', 'contentId', 'expandId', 'variant', 'rows', 'cells', 'bodyWrapper', 'rowWrapper', 'borders', 'role']);

      var headerData = calculateColumns(cells, {
        sortBy: sortBy,
        onSort: onSort,
        onSelect: onSelect,
        allRowsSelected: onSelect ? this.areAllRowsSelected(rows) : false,
        actions: actions,
        actionResolver: actionResolver,
        areActionsDisabled: areActionsDisabled,
        onCollapse: onCollapse,
        onExpand: onExpand,
        rowLabeledBy: rowLabeledBy,
        expandId: expandId,
        contentId: contentId,
        dropdownPosition: dropdownPosition,
        dropdownDirection: dropdownDirection,
        firstUserColumnIndex: [onCollapse, onSelect].filter(function (callback) {
          return callback;
        }).length
      });

      return React.createElement(
        TableContext.Provider,
        {
          value: {
            headerData: headerData,
            rows: rows
          }
        },
        header,
        React.createElement(
          Provider,
          _extends({}, props, {
            renderers: {
              body: {
                wrapper: bodyWrapper || BodyWrapper,
                row: rowWrapper || RowWrapper,
                cell: BodyCell
              },
              header: {
                cell: HeaderCell
              }
            },
            columns: headerData,
            role: role,
            className: css(styles.table, gridBreakPoint && getModifier(stylesGrid, gridBreakPoint), getModifier(styles, variant), (onCollapse && variant === TableVariant.compact || onExpand) && styles.modifiers.expandable, variant === TableVariant.compact && borders === false ? styles.modifiers.noBorderRows : null, className)
          }),
          caption && React.createElement(
            'caption',
            null,
            caption
          ),
          children
        )
      );
    }
  }]);

  return Table;
}(React.Component);

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;