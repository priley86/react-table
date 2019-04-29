var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '../../@patternfly/patternfly/components/Table/table.css.js';

var HeaderCell = function HeaderCell(_ref) {
  var dataLabel = _ref['data-label'],
      className = _ref.className,
      Component = _ref.component,
      isVisible = _ref.isVisible,
      scope = _ref.scope,
      textCenter = _ref.textCenter,
      props = _objectWithoutProperties(_ref, ['data-label', 'className', 'component', 'isVisible', 'scope', 'textCenter']);

  var mappedProps = _extends({}, scope ? { scope: scope } : {}, props);
  return React.createElement(Component, _extends({}, mappedProps, { className: css(className, textCenter && styles.modifiers.center) }));
};

HeaderCell.propTypes = {
  'data-label': PropTypes.string,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]),
  isVisible: PropTypes.bool,
  scope: PropTypes.string,
  textCenter: PropTypes.bool
};

HeaderCell.defaultProps = {
  'data-label': '',
  className: undefined,
  component: 'th',
  isVisible: undefined,
  scope: '',
  textCenter: false
};

export default HeaderCell;