/**
 * types.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 * */
import PropTypes from 'prop-types';

var arrayOfObjectColumns = PropTypes.arrayOf(PropTypes.shape({
  header: PropTypes.shape({
    label: PropTypes.string,
    transforms: PropTypes.arrayOf(PropTypes.func),
    formatters: PropTypes.arrayOf(PropTypes.func),
    props: PropTypes.object
  }),
  cell: PropTypes.shape({
    property: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    transforms: PropTypes.arrayOf(PropTypes.func),
    formatters: PropTypes.arrayOf(PropTypes.func),
    props: PropTypes.object
  })
}));
var arrayOfArrayColumns = PropTypes.arrayOf(PropTypes.array);
var rowsType = PropTypes.oneOfType([arrayOfObjectColumns, arrayOfArrayColumns]);
var rowKeyType = PropTypes.oneOfType([PropTypes.func, PropTypes.string]);
var rowDataType = PropTypes.oneOfType([PropTypes.array, PropTypes.object]);
var tableTypes = {
  columns: PropTypes.array.isRequired,
  renderers: PropTypes.object,
  components: PropTypes.object // XXXXX: Deprecated in favor of renderers, remove in the next major!
};
var tableContextTypes = {
  columns: PropTypes.array.isRequired,
  renderers: PropTypes.object
};
var tableBodyDefaults = {
  onRow: function onRow() {}
};
var tableBodyTypes = {
  onRow: PropTypes.func,
  rows: rowsType.isRequired,
  rowKey: rowKeyType
};
var tableBodyContextTypes = {
  columns: PropTypes.array.isRequired,
  renderers: PropTypes.object
};
var tableBodyRowDefaults = {
  onRow: function onRow() {
    return {};
  }
};
var tableBodyRowTypes = {
  columns: PropTypes.array.isRequired,
  renderers: PropTypes.object,
  onRow: PropTypes.func,
  rowIndex: PropTypes.number.isRequired,
  rowData: rowDataType.isRequired,
  rowKey: PropTypes.string.isRequired
};
var tableHeaderTypes = {
  headerRows: PropTypes.arrayOf(arrayOfObjectColumns),
  children: PropTypes.any
};
var tableHeaderContextTypes = {
  columns: PropTypes.array.isRequired,
  renderers: PropTypes.object
};
var tableHeaderRowDefaults = {
  onRow: function onRow() {
    return {};
  }
};
var tableHeaderRowTypes = {
  renderers: PropTypes.object,
  onRow: PropTypes.func,
  rowIndex: PropTypes.number.isRequired,
  rowData: rowDataType.isRequired
};
var tableDefaults = {
  renderers: {
    table: 'table',
    header: {
      wrapper: 'thead',
      row: 'tr',
      cell: 'th'
    },
    body: {
      wrapper: 'tbody',
      row: 'tr',
      cell: 'td'
    }
  }
};

export { tableTypes, tableContextTypes, tableBodyTypes, tableBodyDefaults, tableBodyContextTypes, tableBodyRowTypes, tableBodyRowDefaults, tableHeaderTypes, tableHeaderContextTypes, tableHeaderRowTypes, tableHeaderRowDefaults, tableDefaults };