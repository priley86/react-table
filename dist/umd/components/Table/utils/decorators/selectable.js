(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '@patternfly/react-styles', '../../../../@patternfly/patternfly/components/Table/table.css.js', '../../SelectColumn'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('@patternfly/react-styles'), require('../../../../@patternfly/patternfly/components/Table/table.css.js'), require('../../SelectColumn'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.tableCss, global.SelectColumn);
    global.selectable = mod.exports;
  }
})(this, function (exports, _react, _reactStyles, _tableCss, _SelectColumn) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _tableCss2 = _interopRequireDefault(_tableCss);

  var _SelectColumn2 = _interopRequireDefault(_SelectColumn);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  exports.default = function (label, _ref) {
    var rowIndex = _ref.rowIndex,
        columnIndex = _ref.columnIndex,
        rowData = _ref.rowData,
        column = _ref.column,
        property = _ref.property;
    var _column$extraParams = column.extraParams,
        onSelect = _column$extraParams.onSelect,
        allRowsSelected = _column$extraParams.allRowsSelected,
        _column$extraParams$r = _column$extraParams.rowLabeledBy,
        rowLabeledBy = _column$extraParams$r === undefined ? 'simple-node' : _column$extraParams$r;

    var extraData = {
      rowIndex: rowIndex,
      columnIndex: columnIndex,
      column: column,
      property: property
    };

    if (rowData && rowData.hasOwnProperty('parent') && !rowData.showSelect) {
      return {
        component: 'td',
        isVisible: true,
        scope: ''
      };
    }
    var rowId = rowIndex !== undefined ? rowIndex : -1;

    function selectClick(event) {
      var selected = rowIndex === undefined ? event.target.checked : rowData && !rowData.selected;
      onSelect && onSelect(event, selected, rowId, rowData, extraData);
    }
    var customProps = _extends({}, rowId !== -1 ? {
      checked: rowData && !!rowData.selected,
      'aria-labelledby': rowLabeledBy + rowIndex
    } : {
      checked: allRowsSelected,
      'aria-label': 'Select all rows'
    });

    return {
      className: (0, _reactStyles.css)(_tableCss2.default.tableCheck),
      component: 'td',
      scope: '',
      isVisible: true,
      children: _react2.default.createElement(_SelectColumn2.default, _extends({}, customProps, { onSelect: selectClick, name: rowId !== -1 ? 'checkrow' + rowIndex : 'check-all' }), label)
    };
  };
});