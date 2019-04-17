var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, KebabToggle, DropdownItem, DropdownSeparator, DropdownPosition, DropdownDirection } from '@patternfly/react-core';

var propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
  isDisabled: PropTypes.bool,
  dropdownPosition: PropTypes.oneOf(Object.values(DropdownPosition)),
  dropdownDirection: PropTypes.oneOf(Object.values(DropdownDirection)),
  rowData: PropTypes.object,
  extraData: PropTypes.shape({
    rowIndex: PropTypes.number,
    columnIndex: PropTypes.number,
    column: PropTypes.object,
    property: PropTypes.string
  })
};
var defaultProps = {
  children: null,
  items: [],
  isDisabled: false,
  dropdownPosition: DropdownPosition.right,
  dropdownDirection: DropdownDirection.down,
  rowData: {},
  extraData: {}
};

var ActionsColumn = function (_React$Component) {
  _inherits(ActionsColumn, _React$Component);

  function ActionsColumn(props) {
    _classCallCheck(this, ActionsColumn);

    var _this = _possibleConstructorReturn(this, (ActionsColumn.__proto__ || Object.getPrototypeOf(ActionsColumn)).call(this, props));

    _this.onToggle = function (isOpen) {
      _this.setState({
        isOpen: isOpen
      });
    };

    _this.onSelect = function (event, onClick) {
      var _this$props = _this.props,
          rowData = _this$props.rowData,
          extraData = _this$props.extraData;

      event.preventDefault();
      onClick && onClick(event, extraData.rowIndex, rowData, extraData);
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    };

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(ActionsColumn, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var _props = this.props,
          items = _props.items,
          children = _props.children,
          dropdownPosition = _props.dropdownPosition,
          dropdownDirection = _props.dropdownDirection,
          isDisabled = _props.isDisabled;

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(Dropdown, {
          onToggle: this.onToggle,
          toggle: React.createElement(KebabToggle, { isDisabled: isDisabled, onToggle: this.onToggle }),
          position: dropdownPosition,
          direction: dropdownDirection,
          isOpen: isOpen,
          dropdownItems: items.map(function (_ref, key) {
            var title = _ref.title,
                itemKey = _ref.itemKey,
                _onClick = _ref.onClick,
                isSeparator = _ref.isSeparator,
                props = _objectWithoutProperties(_ref, ['title', 'itemKey', 'onClick', 'isSeparator']);

            return isSeparator ? React.createElement(DropdownSeparator, _extends({}, props, { key: itemKey || key, 'data-key': itemKey || key })) : React.createElement(
              DropdownItem,
              _extends({
                onClick: function onClick(event) {
                  return _this2.onSelect(event, _onClick);
                }
              }, props, {
                key: itemKey || key,
                'data-key': itemKey || key
              }),
              title
            );
          }),
          isPlain: true
        }),
        children
      );
    }
  }]);

  return ActionsColumn;
}(React.Component);

ActionsColumn.propTypes = propTypes;
ActionsColumn.defaultProps = defaultProps;

export default ActionsColumn;