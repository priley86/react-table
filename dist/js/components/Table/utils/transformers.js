'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _selectable = require('./decorators/selectable');

Object.defineProperty(exports, 'selectable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selectable).default;
  }
});

var _sortable = require('./decorators/sortable');

Object.defineProperty(exports, 'sortable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sortable).default;
  }
});

var _cellActions = require('./decorators/cellActions');

Object.defineProperty(exports, 'cellActions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cellActions).default;
  }
});

var _cellWidth = require('./decorators/cellWidth');

Object.defineProperty(exports, 'cellWidth', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cellWidth).default;
  }
});

var _textCenter = require('./decorators/textCenter');

Object.defineProperty(exports, 'textCenter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_textCenter).default;
  }
});

var _collapsible = require('./decorators/collapsible');

Object.defineProperty(exports, 'collapsible', {
  enumerable: true,
  get: function get() {
    return _collapsible.collapsible;
  }
});
Object.defineProperty(exports, 'expandedRow', {
  enumerable: true,
  get: function get() {
    return _collapsible.expandedRow;
  }
});
Object.defineProperty(exports, 'expandable', {
  enumerable: true,
  get: function get() {
    return _collapsible.expandable;
  }
});

var _compoundExpand = require('./decorators/compoundExpand');

Object.defineProperty(exports, 'compoundExpand', {
  enumerable: true,
  get: function get() {
    return _compoundExpand.compoundExpand;
  }
});

var _headerCol = require('./decorators/headerCol');

Object.defineProperty(exports, 'headerCol', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_headerCol).default;
  }
});

var _classNames = require('./decorators/classNames');

Object.defineProperty(exports, 'classNames', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_classNames).default;
  }
});
Object.defineProperty(exports, 'Visibility', {
  enumerable: true,
  get: function get() {
    return _classNames.Visibility;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emptyTD = exports.emptyTD = function emptyTD() {
  return {
    scope: '',
    component: 'td'
  };
};

var scopeColTransformer = exports.scopeColTransformer = function scopeColTransformer() {
  return {
    scope: 'col'
  };
};

var emptyCol = exports.emptyCol = function emptyCol(label) {
  return _extends({}, label ? {} : { scope: '' });
};

var parentId = exports.parentId = function parentId(_value, _ref) {
  var rowData = _ref.rowData;
  return {
    parentId: rowData.parent
  };
};

var mapProps = exports.mapProps = function mapProps(_label, _ref2) {
  var property = _ref2.property,
      rowData = _ref2.rowData;
  return _extends({}, rowData[property] && rowData[property].props);
};