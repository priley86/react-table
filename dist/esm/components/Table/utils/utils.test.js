function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { isRowExpanded } from './utils';
import { buildExpandableRows } from '../../../test-helpers/data-helpers';

var assertExpanded = function assertExpanded(rows, expandedRowIndexes) {
  expandedRowIndexes.forEach(function (expandedRowIndex) {
    var expandedRow = rows[expandedRowIndex];
    expect(isRowExpanded(expandedRow, rows)).toBeTruthy();
  });
};

var assertNotExpanded = function assertNotExpanded(rows, notExpandedRowIndexes) {
  notExpandedRowIndexes.forEach(function (expandedRowIndex) {
    var expandedRow = rows[expandedRowIndex];
    expect(isRowExpanded(expandedRow, rows)).toBeFalsy();
  });
};

describe('Util functions', function () {
  describe('isRowExpanded', function () {
    test('basic', function () {
      var rows = buildExpandableRows({
        6: 5
      }, [5]);
      assertExpanded(rows, [6]);
      assertNotExpanded(rows, [0, 1, 5, 9]);
    });
    test('two open, one closed', function () {
      var rows = buildExpandableRows({
        1: 0,
        3: 2,
        5: 4
      }, [0, 2]);
      assertExpanded(rows, [1, 3]);
      assertNotExpanded(rows, [0, 2, 4, 5, 8]);
    });
    test('all closed', function () {
      var rows = buildExpandableRows({
        1: 0,
        3: 2,
        5: 4
      });
      assertNotExpanded(rows, _toConsumableArray(Array(10).keys()));
    });
    test('parent-child chain', function () {
      var rows = buildExpandableRows({
        1: 0,
        2: 1,
        3: 2,
        4: 3,
        5: 4,
        6: 5,
        7: 6
      }, _toConsumableArray(Array(7).keys()));
      assertExpanded(rows, [1, 2, 3, 4, 5, 6, 7]);
      assertNotExpanded(rows, [0, 8, 9]);
    });
    test('two parent-child chains', function () {
      var rows = buildExpandableRows({
        1: 0,
        3: 1,
        4: 2,
        5: 3,
        6: 4,
        7: 6
      }, _toConsumableArray(Array(7).keys()));
      assertExpanded(rows, [1, 3, 4, 5, 6, 7]);
      assertNotExpanded(rows, [0, 2, 8, 9]);
    });
    test('not in order', function () {
      var rows = buildExpandableRows({
        0: 1,
        1: 4
      }, [4, 1]);
      assertExpanded(rows, [0, 1]);
      assertNotExpanded(rows, [2, 3, 4, 5]);
    });
    test('child parent circle', function () {
      var rows = buildExpandableRows({
        1: 0,
        0: 1
      }, [0, 1]);
      assertNotExpanded(rows, _toConsumableArray(Array(10).keys()));
    });
    test('undefined without a parent', function () {
      var rows = buildExpandableRows();
      expect(isRowExpanded(rows[1], rows)).toBeUndefined();
    });
    test('compound parent', function () {
      var rows = [{
        isOpen: true,
        cells: ['1', {
          title: '2',
          props: {
            isOpen: true
          }
        }, {
          title: '3',
          props: {
            isOpen: false
          }
        }, {
          title: '4',
          props: {
            isOpen: false
          }
        }, '5', '6']
      }, {
        parent: 0,
        compoundParent: 1,
        cells: [{
          title: 'parent 0 compound child - 1'
        }]
      }, {
        parent: 0,
        compoundParent: 2,
        cells: [{
          title: 'parent 0 compound child - 2'
        }]
      }, {
        parent: 0,
        compoundParent: 3,
        cells: [{
          title: 'parent 0 compound child - 3'
        }]
      }, {
        isOpen: false,
        cells: ['1', {
          title: '2',
          props: {
            isOpen: false
          }
        }, {
          title: '3',
          props: {
            isOpen: false
          }
        }, {
          title: '4',
          props: {
            isOpen: false
          }
        }, '5', '6']
      }, {
        parent: 4,
        compoundParent: 1,
        cells: [{
          title: 'parent 4 compound child - 1'
        }]
      }, {
        parent: 4,
        compoundParent: 2,
        cells: [{
          title: 'parent 4 compound child - 2'
        }]
      }, {
        parent: 4,
        compoundParent: 3,
        cells: [{
          title: 'parent 4 compound child - 3'
        }]
      }]; // test an expanded compound child to be expanded

      var expandedRow = {
        parent: 0,
        compoundParent: 1,
        cells: [{
          title: 'parent 0 compound child - 1'
        }]
      };
      expect(isRowExpanded(expandedRow, rows)).toEqual(true); // test a collapsed compound child to be false

      var collapsedRow = {
        parent: 0,
        compoundParent: 2,
        cells: [{
          title: 'parent 0 compound child - 2'
        }]
      };
      expect(isRowExpanded(collapsedRow, rows)).toEqual(false); // test a row with different parent that is collapsed

      var collapsedRowParent4 = {
        parent: 4,
        compoundParent: 1,
        cells: [{
          title: 'parent 4 compound child - 1'
        }]
      };
      expect(isRowExpanded(collapsedRowParent4, rows)).toEqual(false);
    });
  });
});