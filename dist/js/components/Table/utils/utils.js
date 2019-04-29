'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasCompoundParentsExpanded = function hasCompoundParentsExpanded(parentId, compoundParent, rows) {
  // max rows.length parents
  for (var i = 0; i < rows.length; i++) {
    if (rows[parentId].hasOwnProperty('parent')) {
      parentId = rows[parentId].parent;
    } else {
      return rows[parentId].cells[compoundParent].props.isOpen;
    }
  }
  return false;
};

var hasParentsExpanded = function hasParentsExpanded(parentId, rows) {
  // max rows.length parents
  for (var i = 0; i < rows.length; i++) {
    if (rows[parentId].hasOwnProperty('parent')) {
      parentId = rows[parentId].parent;
    } else {
      return rows[parentId].isOpen;
    }
  }
  return false;
};

var isRowExpanded = exports.isRowExpanded = function isRowExpanded(row, rows) {
  if (row.parent !== undefined) {
    if (row.hasOwnProperty('compoundParent')) {
      return hasCompoundParentsExpanded(row.parent, row.compoundParent, rows);
    }
    return hasParentsExpanded(row.parent, rows) && rows[row.parent].isOpen;
  }
  return undefined;
};