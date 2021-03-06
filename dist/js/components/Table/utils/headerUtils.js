'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateColumns = exports.mapOpenedRows = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _transformers = require('./transformers');

var _formatters = require('./formatters');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Generate header with transforms and formatters from custom header object.
 * @param {*} header with transforms, formatters, columnTransforms, and rest of header object.
 * @param {*} title to be used as label in header config.
 * @return {*} header, label, transforms: Array, formatters: Array.
 */
var generateHeader = function generateHeader(_ref, title) {
  var origTransforms = _ref.transforms,
      origFormatters = _ref.formatters,
      columnTransforms = _ref.columnTransforms,
      header = _ref.header;
  return _extends({}, header, {
    label: title,
    transforms: [_transformers.scopeColTransformer, _transformers.emptyCol].concat(_toConsumableArray(origTransforms || []), _toConsumableArray(columnTransforms || []), _toConsumableArray(header && header.hasOwnProperty('transforms') ? header.transforms : [])),
    formatters: [].concat(_toConsumableArray(origFormatters || []), _toConsumableArray(header && header.hasOwnProperty('formatters') ? header.formatters : []))
  });
};

/**
 * Function to generate cell for header config to change look of each cell.
 * @param {*} customCell config with cellFormatters, cellTransforms, columnTransforms and rest of cell config.
 * @returns {*} cell, transforms: Array, formatters: Array.
 */
var generateCell = function generateCell(_ref2) {
  var cellFormatters = _ref2.cellFormatters,
      cellTransforms = _ref2.cellTransforms,
      columnTransforms = _ref2.columnTransforms,
      cell = _ref2.cell;
  return _extends({}, cell, {
    transforms: [].concat(_toConsumableArray(cellTransforms || []), _toConsumableArray(columnTransforms || []), _toConsumableArray(cell && cell.hasOwnProperty('transforms') ? cell.transforms : []), [_transformers.mapProps // This transform should be applied last so that props that are manually defined at the cell level will override all other transforms.
    ]),
    formatters: [_formatters.defaultTitle].concat(_toConsumableArray(cellFormatters || []), _toConsumableArray(cell && cell.hasOwnProperty('formatters') ? cell.formatters : []))
  });
};

/**
 * Function to map custom simple object properties to expected format with property, header, cell, extra params
 * and props.
 * @param {*} column to be shown in header - either string or object with title, transformers and formatters (for cels as well).
 * @param {*} extra additional object with callbacks for specific formatters.
 * @param {*} key cell key to be shown in data-key.
 * @param {*} props additional props for each cell.
 * @returns {*} object with property, extraParams, header, cell and props.
 */
var mapHeader = function mapHeader(column, extra, key) {
  for (var _len = arguments.length, props = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    props[_key - 3] = arguments[_key];
  }

  var title = column.hasOwnProperty('title') ? column.title : column;
  return {
    property: typeof title === 'string' && title.toLowerCase().trim().replace(/\s/g, '-') || 'column-' + key,
    extraParams: extra,
    data: column.data,
    header: generateHeader(column, title),
    cell: generateCell(column, extra),
    props: _extends({
      'data-label': typeof title === 'string' ? title : 'column-' + key,
      'data-key': key
    }, column.hasOwnProperty('props') ? column.props : {}, props)
  };
};

/**
 * Function to define select cell in first column.
 * @param {*} extraObject with onSelect callback.
 * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
 */
var selectableTransforms = function selectableTransforms(_ref3) {
  var onSelect = _ref3.onSelect;
  return [].concat(_toConsumableArray(onSelect ? [{
    title: '',
    transforms: [_transformers.selectable],
    cellTransforms: [_transformers.selectable]
  }] : []));
};

/**
 * Function to define actions in last column.
 * @param {*} extraObject with actions array.
 * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
 */
var actionsTransforms = function actionsTransforms(_ref4) {
  var actions = _ref4.actions,
      actionResolver = _ref4.actionResolver,
      areActionsDisabled = _ref4.areActionsDisabled;
  return [].concat(_toConsumableArray(actionResolver || actions ? [{
    title: '',
    transforms: [_transformers.emptyTD],
    cellTransforms: [(0, _transformers.cellActions)(actions, actionResolver, areActionsDisabled)]
  }] : []));
};

/**
 * Function to define collapsible in first column.
 * @param {*}  extraObject with onCollapse callback.
 * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
 */
var collapsibleTransfroms = function collapsibleTransfroms(_ref5) {
  var onCollapse = _ref5.onCollapse;
  return [].concat(_toConsumableArray(onCollapse ? [{
    title: '',
    transforms: [_transformers.emptyTD],
    cellTransforms: [_transformers.collapsible]
  }] : []));
};

/**
 * Function to add additional cell transforms to object.
 * @param {*} cell to be expanded.
 * @param {*} additional thing to be added to cellTransforms.
 * @returns {*} object with title from cell and cellTransforms with additional in.
 */
var addAdditionalCellTranforms = function addAdditionalCellTranforms(cell, additional) {
  return _extends({}, cell.hasOwnProperty('title') ? cell : { title: cell }, {
    cellTransforms: [].concat(_toConsumableArray(cell.hasOwnProperty('cellTransforms') ? cell.cellTransforms : []), [additional])
  });
};

/**
 * Function to change expanded row with additional transforms.
 * @param {*} header info with cellTransforms.
 * @param {*} extraObject with onCollapse function.
 */
var expandContent = function expandContent(header, _ref6) {
  var onCollapse = _ref6.onCollapse;

  if (!onCollapse) {
    return header;
  }

  return header.map(function (cell, key) {
    var parentIdCell = addAdditionalCellTranforms(cell, _transformers.parentId);
    return key === 0 ? addAdditionalCellTranforms(parentIdCell, (0, _transformers.expandedRow)(header.length)) : parentIdCell;
  });
};

/**
 * Function to join parent and their children so they can be rendered in tbody.
 * @param {*} rows raw data to find out if it's child or parent.
 * @param {*} children data to render (array of react children).
 */
var mapOpenedRows = exports.mapOpenedRows = function mapOpenedRows(rows, children) {
  return rows.reduce(function (acc, curr, key) {
    if (curr.hasOwnProperty('parent')) {
      var parent = acc.length > 0 && acc[acc.length - 1];
      if (parent) {
        acc[acc.length - 1].rows = [].concat(_toConsumableArray(acc[acc.length - 1].rows), [children[key]]);
        if (curr.hasOwnProperty('compoundParent')) {
          // if this is compound expand, check for any open child cell
          acc[acc.length - 1].isOpen = acc[acc.length - 1].rows.some(function (oneRow) {
            return oneRow.props.rowData.cells.some(function (oneCell) {
              return oneCell.props && oneCell.props.isOpen;
            });
          });
        }
      }
    } else {
      acc = [].concat(_toConsumableArray(acc), [_extends({}, curr, { rows: [children[key]] })]);
    }
    return acc;
  }, []);
};

/**
 * Function to calculate columns based on custom config.
 * It adds some custom cells for collapse, select, if expanded row and actions.
 * @param {*} headerRows custom object with described table header cells.
 * @param {*} extra object with custom callbacks.
 * @return {*} expected object for react tabular table.
 */
var calculateColumns = exports.calculateColumns = function calculateColumns(headerRows, extra) {
  return headerRows && [].concat(_toConsumableArray(collapsibleTransfroms(extra)), _toConsumableArray(selectableTransforms(extra)), _toConsumableArray(expandContent(headerRows, extra)), _toConsumableArray(actionsTransforms(extra))).map(function (oneCol, key) {
    return _extends({}, mapHeader(oneCol, extra, key));
  });
};