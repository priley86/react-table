import React from 'react';

export var columns = [{ title: 'Header cell' }, 'Branches', { title: 'Pull requests' }, 'Workspaces', {
  title: 'Last Commit'
}];

export var rows = [{
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}];

export var actions = [{
  title: 'Some action',
  onClick: function onClick(event, rowId) {
    return console.log('clicked on Some action, on row: ', rowId);
  }
}, {
  title: React.createElement(
    'div',
    null,
    'Another action'
  ),
  onClick: function onClick(event, rowId) {
    return console.log('clicked on Another action, on row: ', rowId);
  }
}, {
  isSeparator: true
}, {
  title: 'Third action',
  onClick: function onClick(event, rowId) {
    return console.log('clicked on Third action, on row: ', rowId);
  }
}];