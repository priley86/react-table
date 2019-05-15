(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.dataSets = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.actions = exports.rows = exports.columns = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var columns = exports.columns = [{ title: 'Header cell' }, 'Branches', { title: 'Pull requests' }, 'Workspaces', {
    title: 'Last Commit'
  }];

  var rows = exports.rows = [{
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

  var actions = exports.actions = [{
    title: 'Some action',
    onClick: function onClick(event, rowId) {
      return console.log('clicked on Some action, on row: ', rowId);
    }
  }, {
    title: _react2.default.createElement('div', null, 'Another action'),
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
});