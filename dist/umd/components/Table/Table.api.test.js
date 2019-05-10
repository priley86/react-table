"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./index", "../../test-helpers/data-sets"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./index"), require("../../test-helpers/data-sets"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.index, global.dataSets);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _index, _dataSets) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  describe('Collapsible table', function () {
    test('should call correct function', function () {
      var items = _toConsumableArray(_dataSets.rows);

      items[0].isOpen = false;
      items[1].parent = 0;
      var onCollapse = jest.fn();
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_index.Table, {
        caption: "Collapsible table",
        onCollapse: onCollapse,
        cells: _dataSets.columns,
        rows: _dataSets.rows
      }, _react2["default"].createElement(_index.TableHeader, null), _react2["default"].createElement(_index.TableBody, null)));
      view.find('.pf-c-table__toggle button').first().simulate('click');
      expect(onCollapse.mock.calls).toHaveLength(1);
    });
  });
  describe('Selectable table', function () {
    test('should call correct function', function () {
      var onSelect = jest.fn();
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_index.Table, {
        caption: "Collapsible table",
        onSelect: onSelect,
        cells: _dataSets.columns,
        rows: _dataSets.rows
      }, _react2["default"].createElement(_index.TableHeader, null), _react2["default"].createElement(_index.TableBody, null)));
      view.find('tbody .pf-c-table__check input').first().simulate('change');
      expect(onSelect.mock.calls).toHaveLength(1);
    });
  });
  describe('Action table', function () {
    test('should call correct functions', function () {
      var actionResolver = jest.fn();
      var areActionsDisabled = jest.fn();
      (0, _enzyme.mount)(_react2["default"].createElement(_index.Table, {
        caption: "Collapsible table",
        actionResolver: actionResolver,
        areActionsDisabled: areActionsDisabled,
        cells: _dataSets.columns,
        rows: _dataSets.rows
      }, _react2["default"].createElement(_index.TableHeader, null), _react2["default"].createElement(_index.TableBody, null)));
      var numberOfRenders = _dataSets.rows.length;
      expect(actionResolver.mock.calls).toHaveLength(numberOfRenders);
      expect(areActionsDisabled.mock.calls).toHaveLength(numberOfRenders);
    });
    test('should call action callback', function () {
      var onActionClick = jest.fn();
      var customActions = [{
        title: 'Some',
        onClick: onActionClick
      }].concat(_toConsumableArray(_dataSets.actions));
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_index.Table, {
        caption: "Collapsible table",
        actions: customActions,
        cells: _dataSets.columns,
        rows: _dataSets.rows
      }, _react2["default"].createElement(_index.TableHeader, null), _react2["default"].createElement(_index.TableBody, null)));
      view.find('tbody .pf-c-dropdown button').first().simulate('click');
      var actionElements = view.find('tbody .pf-c-dropdown__menu li');
      expect(actionElements).toHaveLength(customActions.length);
      actionElements.first().find('a').simulate('click');
      expect(onActionClick.mock.calls).toHaveLength(1);
    });
  });
  describe('Sortable table', function () {
    test('should call correct function', function () {
      var onSort = jest.fn();
      var sortBy = {};

      var header = _toConsumableArray(_dataSets.columns);

      header[0].transforms = [_index.sortable];
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_index.Table, {
        caption: "Sortable table",
        onSort: onSort,
        sortBy: sortBy,
        cells: header,
        rows: _dataSets.rows
      }, _react2["default"].createElement(_index.TableHeader, null), _react2["default"].createElement(_index.TableBody, null)));
      view.find('thead .pf-c-table__sort button').first().simulate('click');
      expect(onSort.mock.calls).toHaveLength(1);
    });
  });
});