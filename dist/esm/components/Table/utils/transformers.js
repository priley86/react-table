var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

export { default as selectable } from './decorators/selectable';
export { default as sortable } from './decorators/sortable';
export { default as cellActions } from './decorators/cellActions';
export { default as cellWidth } from './decorators/cellWidth';
export { default as textCenter } from './decorators/textCenter';
export { collapsible, expandedRow, expandable } from './decorators/collapsible';
export { compoundExpand } from './decorators/compoundExpand';
export { default as headerCol } from './decorators/headerCol';
export { default as classNames, Visibility } from './decorators/classNames';

export var emptyTD = function emptyTD() {
  return {
    scope: '',
    component: 'td'
  };
};

export var scopeColTransformer = function scopeColTransformer() {
  return {
    scope: 'col'
  };
};

export var emptyCol = function emptyCol(label) {
  return _extends({}, label ? {} : { scope: '' });
};

export var parentId = function parentId(_value, _ref) {
  var rowData = _ref.rowData;
  return {
    parentId: rowData.parent
  };
};

export var mapProps = function mapProps(_label, _ref2) {
  var property = _ref2.property,
      rowData = _ref2.rowData;
  return _extends({}, rowData[property] && rowData[property].props);
};