function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import React from 'react';
import { mount } from 'enzyme';
import { Table, TableHeader, TableBody, sortable } from './index';
import { rows, columns, actions } from '../../test-helpers/data-sets';
describe('Collapsible table', function () {
  test('should call correct function', function () {
    var items = _toConsumableArray(rows);

    items[0].isOpen = false;
    items[1].parent = 0;
    var onCollapse = jest.fn();
    var view = mount(React.createElement(Table, {
      caption: "Collapsible table",
      onCollapse: onCollapse,
      cells: columns,
      rows: rows
    }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
    view.find('.pf-c-table__toggle button').first().simulate('click');
    expect(onCollapse.mock.calls).toHaveLength(1);
  });
});
describe('Selectable table', function () {
  test('should call correct function', function () {
    var onSelect = jest.fn();
    var view = mount(React.createElement(Table, {
      caption: "Collapsible table",
      onSelect: onSelect,
      cells: columns,
      rows: rows
    }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
    view.find('tbody .pf-c-table__check input').first().simulate('change');
    expect(onSelect.mock.calls).toHaveLength(1);
  });
});
describe('Action table', function () {
  test('should call correct functions', function () {
    var actionResolver = jest.fn();
    var areActionsDisabled = jest.fn();
    mount(React.createElement(Table, {
      caption: "Collapsible table",
      actionResolver: actionResolver,
      areActionsDisabled: areActionsDisabled,
      cells: columns,
      rows: rows
    }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
    var numberOfRenders = rows.length;
    expect(actionResolver.mock.calls).toHaveLength(numberOfRenders);
    expect(areActionsDisabled.mock.calls).toHaveLength(numberOfRenders);
  });
  test('should call action callback', function () {
    var onActionClick = jest.fn();
    var customActions = [{
      title: 'Some',
      onClick: onActionClick
    }].concat(_toConsumableArray(actions));
    var view = mount(React.createElement(Table, {
      caption: "Collapsible table",
      actions: customActions,
      cells: columns,
      rows: rows
    }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
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

    var header = _toConsumableArray(columns);

    header[0].transforms = [sortable];
    var view = mount(React.createElement(Table, {
      caption: "Sortable table",
      onSort: onSort,
      sortBy: sortBy,
      cells: header,
      rows: rows
    }, React.createElement(TableHeader, null), React.createElement(TableBody, null)));
    view.find('thead .pf-c-table__sort button').first().simulate('click');
    expect(onSort.mock.calls).toHaveLength(1);
  });
});