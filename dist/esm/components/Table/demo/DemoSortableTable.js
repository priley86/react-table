var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableHeader, TableBody, TableVariant, sortable, SortByDirection } from '@patternfly/react-table';

var DemoSortableTable = function (_React$Component) {
  _inherits(DemoSortableTable, _React$Component);

  function DemoSortableTable(props) {
    _classCallCheck(this, DemoSortableTable);

    var _this = _possibleConstructorReturn(this, (DemoSortableTable.__proto__ || Object.getPrototypeOf(DemoSortableTable)).call(this, props));

    _this.state = {
      columns: [{ title: 'Repositories', transforms: [sortable] }, 'Branches', { title: 'Pull requests', transforms: [sortable] }, 'Workspaces', 'Last Commit'],
      rows: [props.firstColumnRows, ['a', 'two', 'k', 'four', 'five'], ['p', 'two', 'b', 'four', 'five']],
      sortBy: {}
    };
    _this.onSort = _this.onSort.bind(_this);
    return _this;
  }

  _createClass(DemoSortableTable, [{
    key: 'onSort',
    value: function onSort(_event, index, direction) {
      var sortedRows = this.state.rows.sort(function (a, b) {
        return a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0;
      });
      this.setState({
        sortBy: {
          index: index,
          direction: direction
        },
        rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var id = this.props.id;
      var _state = this.state,
          columns = _state.columns,
          rows = _state.rows,
          sortBy = _state.sortBy;


      return React.createElement(
        Table,
        {
          'aria-label': 'Sortable Table',
          variant: TableVariant.compact,
          sortBy: sortBy,
          onSort: this.onSort,
          cells: columns,
          rows: rows,
          className: 'pf-m-no-border-rows',
          id: id
        },
        React.createElement(TableHeader, null),
        React.createElement(TableBody, null)
      );
    }
  }]);

  return DemoSortableTable;
}(React.Component);

export default DemoSortableTable;


DemoSortableTable.propTypes = {
  firstColumnRows: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
};