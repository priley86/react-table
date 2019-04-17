var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '../../@patternfly/patternfly/components/Table/table.css.js';

var propTypes = {
  children: PropTypes.node
};
var defaultProps = {
  children: null
};

var ExpandableRowContent = function ExpandableRowContent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    'div',
    _extends({}, props, { className: css(styles.tableExpandableRowContent) }),
    children
  );
};

ExpandableRowContent.propTypes = propTypes;
ExpandableRowContent.defaultProps = defaultProps;

export default ExpandableRowContent;