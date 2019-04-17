'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCore = require('@patternfly/react-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  children: _propTypes2.default.node,
  items: _propTypes2.default.array,
  isDisabled: _propTypes2.default.bool,
  dropdownPosition: _propTypes2.default.oneOf(Object.values(_reactCore.DropdownPosition)),
  dropdownDirection: _propTypes2.default.oneOf(Object.values(_reactCore.DropdownDirection)),
  rowData: _propTypes2.default.object,
  extraData: _propTypes2.default.shape({
    rowIndex: _propTypes2.default.number,
    columnIndex: _propTypes2.default.number,
    column: _propTypes2.default.object,
    property: _propTypes2.default.string
  })
};
var defaultProps = {
  children: null,
  items: [],
  isDisabled: false,
  dropdownPosition: _reactCore.DropdownPosition.right,
  dropdownDirection: _reactCore.DropdownDirection.down,
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

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_reactCore.Dropdown, {
          onToggle: this.onToggle,
          toggle: _react2.default.createElement(_reactCore.KebabToggle, { isDisabled: isDisabled, onToggle: this.onToggle }),
          position: dropdownPosition,
          direction: dropdownDirection,
          isOpen: isOpen,
          dropdownItems: items.map(function (_ref, key) {
            var title = _ref.title,
                itemKey = _ref.itemKey,
                _onClick = _ref.onClick,
                isSeparator = _ref.isSeparator,
                props = _objectWithoutProperties(_ref, ['title', 'itemKey', 'onClick', 'isSeparator']);

            return isSeparator ? _react2.default.createElement(_reactCore.DropdownSeparator, _extends({}, props, { key: itemKey || key, 'data-key': itemKey || key })) : _react2.default.createElement(
              _reactCore.DropdownItem,
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
}(_react2.default.Component);

ActionsColumn.propTypes = propTypes;
ActionsColumn.defaultProps = defaultProps;

exports.default = ActionsColumn;