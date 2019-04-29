'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableContext = exports.TableVariant = exports.TableGridBreakpoint = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tableCss = require('../../@patternfly/patternfly/components/Table/table.css.js');

var _tableCss2 = _interopRequireDefault(_tableCss);

var _tableGridCss = require('../../@patternfly/patternfly/components/Table/table-grid.css.js');

var _tableGridCss2 = _interopRequireDefault(_tableGridCss);

var _reactabularTable = require('reactabular-table');

var _reactCore = require('@patternfly/react-core');

var _reactStyles = require('@patternfly/react-styles');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SortColumn = require('./SortColumn');

var _BodyCell = require('./BodyCell');

var _BodyCell2 = _interopRequireDefault(_BodyCell);

var _HeaderCell = require('./HeaderCell');

var _HeaderCell2 = _interopRequireDefault(_HeaderCell);

var _RowWrapper = require('./RowWrapper');

var _RowWrapper2 = _interopRequireDefault(_RowWrapper);

var _BodyWrapper = require('./BodyWrapper');

var _BodyWrapper2 = _interopRequireDefault(_BodyWrapper);

var _headerUtils = require('./utils/headerUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableGridBreakpoint = exports.TableGridBreakpoint = {
  grid: 'grid',
  gridMd: 'grid-md',
  gridLg: 'grid-lg',
  gridXl: 'grid-xl'
};

var TableVariant = exports.TableVariant = {
  compact: 'compact'
};

var propTypes = {
  /** Table elements [Head, Body and Footer]. */
  children: _propTypes2.default.node,
  /** Addional classes for Table. */
  className: _propTypes2.default.string,
  /** Function called when user wants to collapse row. */
  onCollapse: _propTypes2.default.func,
  /** Function called when user wants to compound expand row. */
  onExpand: _propTypes2.default.func,
  /** Table variant, defaults to large. */
  variant: _propTypes2.default.oneOf(Object.values(TableVariant)),
  /** Size at which table is broken into tiles. */
  gridBreakPoint: _propTypes2.default.oneOf(Object.values(TableGridBreakpoint)),
  /** Indicates if border is visible on a compacat table.  Note that this can not be applied when using expandable */
  borders: _propTypes2.default.bool,
  /** Settings for sorting, which index and direction is sorted by. */
  sortBy: _propTypes2.default.shape({
    index: _propTypes2.default.number,
    direction: _propTypes2.default.oneOf(Object.values(_SortColumn.SortByDirection))
  }),
  /** Function called when user wants to select row. */
  onSelect: _propTypes2.default.func,
  /** Function called when user wants to sort table. */
  onSort: _propTypes2.default.func,
  /** Additional cell displayed at the end of each row with dropdown of action items. */
  actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    onClick: _propTypes2.default.func,
    title: _propTypes2.default.node
  })),
  /** Function should resolve an array of actions for each row in the same format as actions. */
  actionResolver: _propTypes2.default.func,
  /** Function should resolve if action kebap is disabled for each row */
  areActionsDisabled: _propTypes2.default.func,
  /** Override to the default BodyWrapper renderer */
  bodyWrapper: _propTypes2.default.func,
  /** Override to the default RowWrapper renderer */
  rowWrapper: _propTypes2.default.func,
  /** Actual rows to display in table. Either array of strings or row objects. <br/>
   * If you want to use components in row cells you can pass them as title prop in cells definition. <br/>
   * <pre>Ex: rows:[
   *   {cells:[
   *     {title: &lt;div>Some component&lt;/div>}
   *     ...
   *   ]}
   * ]
   * </pre> */
  rows: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.shape({
    cells: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.shape({
      title: _propTypes2.default.node
    })])),
    isOpen: _propTypes2.default.bool,
    parent: _propTypes2.default.number,
    fullWidth: _propTypes2.default.bool,
    noPadding: _propTypes2.default.bool,
    props: _propTypes2.default.any
  }), _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.shape({
    title: _propTypes2.default.node
  }), _propTypes2.default.node]))])).isRequired,
  /** Header cells to display in table. Either array of strings or array of string or cell object. */
  cells: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.shape({
    title: _propTypes2.default.node,
    transforms: _propTypes2.default.arrayOf(_propTypes2.default.func), // Applies only to header cell
    cellTransforms: _propTypes2.default.arrayOf(_propTypes2.default.func), // Applies only to body cells
    columnTransforms: _propTypes2.default.arrayOf(_propTypes2.default.func), // Applies to both header and body cells
    formatters: _propTypes2.default.arrayOf(_propTypes2.default.func),
    cellFormatters: _propTypes2.default.arrayOf(_propTypes2.default.func)
  })])).isRequired,
  /** Aria labeled by this property collapse and select. */
  rowLabeledBy: _propTypes2.default.string,
  /** Id prefix for expand buttons. */
  expandId: _propTypes2.default.string,
  /** Id prefix for expanded content. */
  contentId: _propTypes2.default.string,
  /** Position of dropdown from actions will be displayed. */
  dropdownPosition: _propTypes2.default.oneOf(Object.values(_reactCore.DropdownPosition)),
  /** Direction of from actions will be displayed. */
  dropdownDirection: _propTypes2.default.oneOf(Object.values(_reactCore.DropdownDirection)),
  /** Header to display above table for accessibility reasons. */
  header: function header(props) {
    if (!props['aria-label'] && !props.caption && !props.header) {
      throw new Error('Specify at least one of: header, caption, aria-label');
    }
    return null;
  },
  /** Caption to display in table for accessibility reasons. */
  caption: function caption(props) {
    if (!props['aria-label'] && !props.caption && !props.header) {
      throw new Error('Specify at least one of: header, caption, aria-label');
    }
    return null;
  },
  /** aria-label in table for accessibility reasons. */
  'aria-label': function ariaLabel(props) {
    if (!props['aria-label'] && !props.caption && !props.header) {
      throw new Error('Specify at least one of: header, caption, aria-label');
    }
    return null;
  }
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
  dropdownPosition: _reactCore.DropdownPosition.right,
  dropdownDirection: _reactCore.DropdownDirection.down,
  gridBreakPoint: TableGridBreakpoint.gridMd
};

var TableContext = exports.TableContext = _react2.default.createContext();

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
          props = _objectWithoutProperties(_props, ['caption', 'header', 'className', 'gridBreakPoint', 'onSort', 'onSelect', 'sortBy', 'children', 'actions', 'actionResolver', 'areActionsDisabled', 'onCollapse', 'onExpand', 'rowLabeledBy', 'dropdownPosition', 'dropdownDirection', 'contentId', 'expandId', 'variant', 'rows', 'cells', 'bodyWrapper', 'rowWrapper', 'borders']);

      var headerData = (0, _headerUtils.calculateColumns)(cells, {
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

      return _react2.default.createElement(
        TableContext.Provider,
        {
          value: {
            headerData: headerData,
            rows: rows
          }
        },
        header,
        _react2.default.createElement(
          _reactabularTable.Provider,
          _extends({}, props, {
            renderers: {
              body: {
                wrapper: bodyWrapper || _BodyWrapper2.default,
                row: rowWrapper || _RowWrapper2.default,
                cell: _BodyCell2.default
              },
              header: {
                cell: _HeaderCell2.default
              }
            },
            columns: headerData,
            role: 'grid',
            className: (0, _reactStyles.css)(_tableCss2.default.table, (0, _reactStyles.getModifier)(_tableGridCss2.default, gridBreakPoint), (0, _reactStyles.getModifier)(_tableCss2.default, variant), (onCollapse && variant === TableVariant.compact || onExpand) && _tableCss2.default.modifiers.expandable, variant === TableVariant.compact && borders === false ? _tableCss2.default.modifiers.noBorderRows : null, className)
          }),
          caption && _react2.default.createElement(
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
}(_react2.default.Component);

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

exports.default = Table;