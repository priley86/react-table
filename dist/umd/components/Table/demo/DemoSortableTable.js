"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-table"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-table"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactTable);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactTable) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _typeof2(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof2(obj) {
        return typeof obj;
      };
    } else {
      _typeof2 = function _typeof2(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof2(obj);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  var DemoSortableTable =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DemoSortableTable, _React$Component);

    function DemoSortableTable(props) {
      var _this;

      _classCallCheck(this, DemoSortableTable);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DemoSortableTable).call(this, props));
      _this.state = {
        columns: [{
          title: 'Repositories',
          transforms: [_reactTable.sortable]
        }, 'Branches', {
          title: 'Pull requests',
          transforms: [_reactTable.sortable]
        }, 'Workspaces', 'Last Commit'],
        rows: [props.firstColumnRows, ['a', 'two', 'k', 'four', 'five'], ['p', 'two', 'b', 'four', 'five']],
        sortBy: {}
      };
      _this.onSort = _this.onSort.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(DemoSortableTable, [{
      key: "onSort",
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
      key: "render",
      value: function render() {
        var id = this.props.id;
        var _this$state = this.state,
            columns = _this$state.columns,
            rows = _this$state.rows,
            sortBy = _this$state.sortBy;
        return _react2["default"].createElement(_reactTable.Table, {
          "aria-label": "Sortable Table",
          variant: _reactTable.TableVariant.compact,
          sortBy: sortBy,
          onSort: this.onSort,
          cells: columns,
          rows: rows,
          className: "pf-m-no-border-rows",
          id: id
        }, _react2["default"].createElement(_reactTable.TableHeader, null), _react2["default"].createElement(_reactTable.TableBody, null));
      }
    }]);

    return DemoSortableTable;
  }(_react2["default"].Component);

  exports.default = DemoSortableTable;
  DemoSortableTable.propTypes = {
    firstColumnRows: _propTypes2["default"].array.isRequired,
    id: _propTypes2["default"].string.isRequired
  };
});