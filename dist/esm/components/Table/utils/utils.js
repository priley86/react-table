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

export var isRowExpanded = function isRowExpanded(row, rows) {
  return row.parent !== undefined ? hasParentsExpanded(row.parent, rows) && rows[row.parent].isOpen : undefined;
};