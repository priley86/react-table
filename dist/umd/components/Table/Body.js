"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "reactabular-table", "prop-types", "./Table", "./utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("reactabular-table"), require("prop-types"), require("./Table"), require("./utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactabularTable, global.propTypes, global.Table, global.utils);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactabularTable, _propTypes, _Table, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var propTypes = {
    /** Additional classes for table body. */
    className: _propTypes2["default"].string,

    /** Specify key which should be used for labeling each row. */
    rowKey: _propTypes2["default"].string,

    /** Function that is fired when user clicks on row.  */
    onRowClick: _propTypes2["default"].func
  };
  var defaultProps = {
    rowKey: 'id',
    className: '',
    onRowClick: function onRowClick() {
      return undefined;
    }
  };

  var flagVisibility = function flagVisibility(rows) {
    var visibleRows = rows.filter(function (oneRow) {
      return !oneRow.parent || oneRow.isExpanded;
    });

    if (visibleRows.length > 0) {
      visibleRows[0].isFirstVisible = true;
      visibleRows[visibleRows.length - 1].isLastVisible = true;
    }
  };

  var ContextBody =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ContextBody, _React$Component);

    function ContextBody() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ContextBody);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContextBody)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "onRow", function (row, rowProps) {
        var onRowClick = _this.props.onRowClick;
        return {
          row: row,
          rowProps: rowProps,
          onMouseDown: function onMouseDown(event) {
            var computedData = {
              isInput: event.target.tagName !== 'INPUT',
              isButton: event.target.tagName !== 'BUTTON'
            };
            onRowClick(event, row, rowProps, computedData);
          }
        };
      });

      _defineProperty(_assertThisInitialized(_this), "mapCells", function (headerData, row, rowKey) {
        // column indexes start after generated optional columns
        var additionalColsIndexShift = headerData[0].extraParams.firstUserColumnIndex;
        return _objectSpread({}, row && (row.cells || row).reduce(function (acc, cell, cellIndex) {
          var isCellObject = cell === Object(cell);

          var mappedCell = _defineProperty({}, headerData[cellIndex + additionalColsIndexShift].property, {
            title: isCellObject ? cell.title : cell,
            props: _objectSpread({
              isVisible: true
            }, isCellObject ? cell.props : null)
          }); // increment the shift index when a cell spans multiple columns


          if (isCellObject && cell.props && cell.props.colSpan) {
            additionalColsIndexShift += cell.props.colSpan - 1;
          }

          return _objectSpread({}, acc, mappedCell);
        }, {
          id: row.id !== undefined ? row.id : rowKey
        }));
      });

      return _this;
    }

    _createClass(ContextBody, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            className = _this$props.className,
            headerData = _this$props.headerData,
            rows = _this$props.rows,
            rowKey = _this$props.rowKey,
            children = _this$props.children,
            onRowClick = _this$props.onRowClick,
            props = _objectWithoutProperties(_this$props, ["className", "headerData", "rows", "rowKey", "children", "onRowClick"]);

        var mappedRows;

        if (headerData.length > 0) {
          mappedRows = rows.map(function (oneRow, oneRowKey) {
            return _objectSpread({}, oneRow, _this2.mapCells(headerData, oneRow, oneRowKey), {
              isExpanded: (0, _utils.isRowExpanded)(oneRow, rows),
              isFirst: oneRowKey === 0,
              isLast: oneRowKey === rows.length - 1,
              isFirstVisible: false,
              isLastVisible: false
            });
          });
          flagVisibility(mappedRows);
        }

        return _react2["default"].createElement(_react2["default"].Fragment, null, mappedRows && _react2["default"].createElement(_reactabularTable.Body, _extends({}, props, {
          mappedRows: mappedRows,
          rows: mappedRows,
          onRow: this.onRow,
          rowKey: rowKey,
          className: className
        })));
      }
    }]);

    return ContextBody;
  }(_react2["default"].Component);

  var TableBody = function TableBody(props) {
    return _react2["default"].createElement(_Table.TableContext.Consumer, null, function (_ref) {
      var headerData = _ref.headerData,
          rows = _ref.rows;
      return _react2["default"].createElement(ContextBody, _extends({
        headerData: headerData,
        rows: rows
      }, props));
    });
  };

  TableBody.propTypes = propTypes;
  TableBody.defaultProps = defaultProps;
  exports["default"] = TableBody;
});