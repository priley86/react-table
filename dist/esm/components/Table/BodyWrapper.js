var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Children, Fragment } from 'react';
import styles from '../../@patternfly/patternfly/components/Table/table.css.js';
import { css } from '@patternfly/react-styles';
import { mapOpenedRows } from './utils/headerUtils';
import PropTypes from 'prop-types';

var BodyWrapper = function (_Component) {
  _inherits(BodyWrapper, _Component);

  function BodyWrapper() {
    _classCallCheck(this, BodyWrapper);

    return _possibleConstructorReturn(this, (BodyWrapper.__proto__ || Object.getPrototypeOf(BodyWrapper)).apply(this, arguments));
  }

  _createClass(BodyWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          mappedRows = _props.mappedRows,
          tbodyRef = _props.tbodyRef,
          props = _objectWithoutProperties(_props, ['mappedRows', 'tbodyRef']);

      if (mappedRows && mappedRows.some(function (row) {
        return row.hasOwnProperty('parent');
      })) {
        return React.createElement(
          Fragment,
          null,
          mapOpenedRows(mappedRows, this.props.children).map(function (oneRow, key) {
            return React.createElement(
              'tbody',
              _extends({}, props, {
                className: css(oneRow.isOpen && styles.modifiers.expanded),
                key: 'tbody-' + key,
                ref: tbodyRef
              }),
              oneRow.rows
            );
          })
        );
      }
      return React.createElement('tbody', _extends({}, props, { ref: tbodyRef }));
    }
  }]);

  return BodyWrapper;
}(Component);

BodyWrapper.propTypes = {
  rows: PropTypes.array,
  onCollapse: PropTypes.func,
  tbodyRef: PropTypes.func
};

BodyWrapper.defaultProps = {
  rows: [],
  tbodyRef: null
};

export default BodyWrapper;