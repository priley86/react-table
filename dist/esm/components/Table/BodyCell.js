var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '../../@patternfly/patternfly/components/Table/table.css.js';

var BodyCell = function BodyCell(_ref) {
  var dataLabel = _ref['data-label'],
      className = _ref.className,
      colSpan = _ref.colSpan,
      Component = _ref.component,
      isVisible = _ref.isVisible,
      parentId = _ref.parentId,
      textCenter = _ref.textCenter,
      isOpen = _ref.isOpen,
      ariaControls = _ref.ariaControls,
      props = _objectWithoutProperties(_ref, ['data-label', 'className', 'colSpan', 'component', 'isVisible', 'parentId', 'textCenter', 'isOpen', 'ariaControls']);

  var mappedProps = _extends({}, dataLabel ? { 'data-label': dataLabel } : {}, props);
  return parentId !== undefined && colSpan === undefined || !isVisible ? null : React.createElement(Component, _extends({}, mappedProps, { className: css(className, textCenter && styles.modifiers.center), colSpan: colSpan }));
};

BodyCell.propTypes = {
  'data-label': PropTypes.string,
  className: PropTypes.string,
  colSpan: PropTypes.number,
  component: PropTypes.node,
  isVisible: PropTypes.bool,
  parentId: PropTypes.number,
  textCenter: PropTypes.bool,
  isOpen: PropTypes.bool,
  ariaControls: PropTypes.string
};

BodyCell.defaultProps = {
  'data-label': '',
  className: undefined,
  colSpan: undefined,
  component: 'td',
  isVisible: undefined,
  parentId: undefined,
  textCenter: false,
  isOpen: undefined,
  ariaControls: ''
};

export default BodyCell;