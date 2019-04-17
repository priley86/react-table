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

var _tableCss = require('../../@patternfly/patternfly/components/Table/table.css.js');

var _tableCss2 = _interopRequireDefault(_tableCss);

var _reactStyles = require('@patternfly/react-styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RowWrapper = function (_React$Component) {
  _inherits(RowWrapper, _React$Component);

  function RowWrapper(props) {
    _classCallCheck(this, RowWrapper);

    var _this = _possibleConstructorReturn(this, (RowWrapper.__proto__ || Object.getPrototypeOf(RowWrapper)).call(this, props));

    _this.handleScroll = function (event) {
      if (!_this._unmounted) {
        _this.props.onScroll(event);
      }
    };

    _this.handleResize = function (event) {
      if (!_this._unmounted) {
        _this.props.onResize(event);
      }
    };

    if (props.onScroll) {
      _this.handleScroll = (0, _reactCore.debounce)(_this.handleScroll, 100);
    }
    if (props.onResize) {
      _this.handleResize = (0, _reactCore.debounce)(_this.handleResize, 100);
    }
    return _this;
  }

  _createClass(RowWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._unmounted = false;

      if (this.props.onScroll) {
        window.addEventListener('scroll', this.handleScroll);
      }
      if (this.props.onResize) {
        window.addEventListener('resize', this.handleResize);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._unmounted = true;

      if (this.props.onScroll) {
        window.removeEventListener('scroll', this.handleScroll);
      }
      if (this.props.onResize) {
        window.removeEventListener('resize', this.handleResize);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          trRef = _props.trRef,
          className = _props.className,
          onScroll = _props.onScroll,
          onResize = _props.onResize,
          isExpanded = _props.row.isExpanded,
          rowProps = _props.rowProps,
          props = _objectWithoutProperties(_props, ['trRef', 'className', 'onScroll', 'onResize', 'row', 'rowProps']);

      return _react2.default.createElement('tr', _extends({}, props, {
        ref: trRef,
        className: (0, _reactStyles.css)(className, isExpanded !== undefined && _tableCss2.default.tableExpandableRow, isExpanded && _tableCss2.default.modifiers.expanded),
        hidden: isExpanded !== undefined && !isExpanded
      }));
    }
  }]);

  return RowWrapper;
}(_react2.default.Component);

RowWrapper.propTypes = {
  trRef: _propTypes2.default.func,
  className: _propTypes2.default.string,
  onScroll: _propTypes2.default.func,
  onResize: _propTypes2.default.func,
  row: _propTypes2.default.shape({
    isOpen: _propTypes2.default.bool,
    isExpanded: _propTypes2.default.bool
  }),
  rowProps: _propTypes2.default.object
};

RowWrapper.defaultProps = {
  trRef: undefined,
  className: '',
  onScroll: undefined,
  onResize: undefined,
  row: {
    isOpen: undefined,
    isExpanded: undefined
  },
  rowProps: null
};

exports.default = RowWrapper;