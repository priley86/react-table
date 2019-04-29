'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTable = require('@patternfly/react-table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DemoSortableTable = function (_React$Component) {
  _inherits(DemoSortableTable, _React$Component);

  function DemoSortableTable(props) {
    _classCallCheck(this, DemoSortableTable);

    var _this = _possibleConstructorReturn(this, (DemoSortableTable.__proto__ || Object.getPrototypeOf(DemoSortableTable)).call(this, props));

    _this.state = {
      columns: [{ title: 'Repositories', transforms: [_reactTable.sortable] }, 'Branches', { title: 'Pull requests', transforms: [_reactTable.sortable] }, 'Workspaces', 'Last Commit'],
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
        rows: direction === _reactTable.SortByDirection.asc ? sortedRows : sortedRows.reverse()
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


      return _react2.default.createElement(
        _reactTable.Table,
        {
          'aria-label': 'Sortable Table',
          variant: _reactTable.TableVariant.compact,
          sortBy: sortBy,
          onSort: this.onSort,
          cells: columns,
          rows: rows,
          className: 'pf-m-no-border-rows',
          id: id
        },
        _react2.default.createElement(_reactTable.TableHeader, null),
        _react2.default.createElement(_reactTable.TableBody, null)
      );
    }
  }]);

  return DemoSortableTable;
}(_react2.default.Component);

exports.default = DemoSortableTable;


DemoSortableTable.propTypes = {
  firstColumnRows: _propTypes2.default.array.isRequired,
  id: _propTypes2.default.string.isRequired
};