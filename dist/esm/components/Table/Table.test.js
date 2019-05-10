function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { mount } from 'enzyme';
import { Table, TableHeader, TableBody, TableGridBreakpoint, TableVariant, cellWidth, headerCol, sortable, expandable, compoundExpand } from './index';
import { rows, columns, actions } from '../../test-helpers/data-sets';
describe('Simple table', function () {
  test('caption', function () {
    var view = mount(React.createElement(Table, {
      caption: "Simple Table",
      cells: columns,
      rows: rows
    }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
    expect(view).toMatchSnapshot();
  });
  test('header', function () {
    var view = mount(React.createElement(Table, {
      header: React.createElement("h4", null, "Header title"),
      cells: columns,
      rows: rows
    }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
    expect(view).toMatchSnapshot();
  });
  test('aria-label', function () {
    var view = mount(React.createElement(Table, {
      "aria-label": "Aria labeled",
      cells: columns,
      rows: rows
    }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
    expect(view).toMatchSnapshot();
  });
});
test('Sortable table', function () {
  var onSortCall = function onSortCall() {
    return undefined;
  };

  columns[0] = _objectSpread({}, columns[0], {
    transforms: [sortable]
  });
  var view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    onSort: onSortCall,
    sortBy: {},
    cells: columns,
    rows: rows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
describe('Table variants', function () {
  Object.values(TableGridBreakpoint).forEach(function (oneBreakpoint) {
    test("Breakpoint - ".concat(oneBreakpoint), function () {
      var view = mount(React.createElement(Table, {
        "aria-label": "Aria labeled",
        gridBreakPoint: oneBreakpoint,
        cells: columns,
        rows: rows
      }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
      expect(view).toMatchSnapshot();
    });
  });
  Object.values(TableVariant).forEach(function (onevariant) {
    test("Size - ".concat(onevariant), function () {
      var view = mount(React.createElement(Table, {
        "aria-label": "Aria labeled",
        variant: onevariant,
        cells: columns,
        rows: rows
      }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
      expect(view).toMatchSnapshot();
    });
  });
});
test('Simple Actions table', function () {
  var rowsWithDisabledAction = [].concat(_toConsumableArray(rows), [{
    cells: ['one', 'two', 'three', 'four', 'five'],
    disableActions: true
  }]);
  var view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    actions: actions,
    cells: columns,
    rows: rowsWithDisabledAction
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Actions table', function () {
  var view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    actionResolver: function actionResolver() {
      return actions;
    },
    areActionsDisabled: function areActionsDisabled() {
      return false;
    },
    cells: columns,
    rows: rows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Cell header table', function () {
  columns[0] = _objectSpread({}, columns[0], {
    cellTransforms: [headerCol]
  });
  var view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    cells: columns,
    rows: rows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Collapsible table', function () {
  rows[0] = _objectSpread({}, rows[0], {
    isOpen: true
  });
  rows[1] = _objectSpread({}, rows[1], {
    parent: 0
  });
  rows[3] = _objectSpread({}, rows[3], {
    isOpen: false
  });
  rows[4] = _objectSpread({}, rows[4], {
    parent: 3
  });
  columns[0] = _objectSpread({}, columns[0], {
    cellFormatters: [expandable]
  });

  var onCollapse = function onCollapse() {
    return undefined;
  };

  var view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    onCollapse: onCollapse,
    cells: columns,
    rows: rows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Compound Expandable table', function () {
  var compoundColumns = [{
    title: 'col1',
    cell: {
      transforms: [compoundExpand]
    }
  }, {
    title: 'col2',
    cell: {
      transforms: [compoundExpand]
    }
  }];
  var compoundRows = [{
    isOpen: true,
    cells: [{
      title: '1',
      props: {
        isOpen: true
      }
    }, {
      title: '2',
      props: {
        isOpen: false
      }
    }]
  }, {
    parent: 0,
    compoundParent: 0,
    cells: [{
      title: 'expanded',
      props: {
        colSpan: 2
      }
    }]
  }, {
    isOpen: false,
    cells: [{
      title: '3',
      props: {
        isOpen: false
      }
    }, {
      title: '4',
      props: {
        isOpen: false
      }
    }]
  }, {
    parent: 2,
    compoundParent: 0,
    cells: [{
      title: 'expanded',
      props: {
        colSpan: 2
      }
    }]
  }];

  var onExpand = function onExpand() {
    return undefined;
  };

  var view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    onExpand: onExpand,
    cells: compoundColumns,
    rows: compoundRows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Collapsible nested table', function () {
  rows[0] = _objectSpread({}, rows[0], {
    isOpen: false
  });
  rows[1] = _objectSpread({}, rows[1], {
    parent: 0,
    isOpen: true
  });
  rows[2] = _objectSpread({}, rows[2], {
    parent: 1
  });

  var onCollapse = function onCollapse() {
    return undefined;
  };

  var view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    onCollapse: onCollapse,
    cells: columns,
    rows: rows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Selectable table', function () {
  var onSelect = function onSelect() {
    return undefined;
  };

  var view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    onSelect: onSelect,
    cells: columns,
    rows: rows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Header width table', function () {
  columns[0] = _objectSpread({}, columns[0], {
    transforms: [cellWidth(10)]
  });
  columns[2] = _objectSpread({}, columns[2], {
    transforms: [cellWidth(30)]
  });
  columns[4] = _objectSpread({}, columns[4], {
    transforms: [cellWidth('max')]
  });
  var view = mount(React.createElement(Table, {
    "aria-label": "Aria labeled",
    cells: columns,
    rows: rows
  }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view).toMatchSnapshot();
});
test('Selectable table with selected expandable row', function () {
  var data = {
    cells: ['column'],
    rows: [{
      cells: ['one'],
      selected: true
    }, {
      cells: ['one'],
      parent: 0
    }],
    onSelect: function onSelect(f) {
      return f;
    }
  };
  var view = mount(React.createElement(Table, _extends({
    "aria-label": "Aria labeled"
  }, data), React.createElement(TableHeader, null), React.createElement(TableBody, null)));
  expect(view.find('input[name="check-all"]').prop('checked')).toEqual(true);
});