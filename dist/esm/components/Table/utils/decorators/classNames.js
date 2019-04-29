var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { css } from '@patternfly/react-styles';
import styles from '../../../../@patternfly/patternfly/components/Table/table.css.js';

var pickProperties = function pickProperties(object, properties) {
  return properties.reduce(function (picked, property) {
    return _extends({}, picked, _defineProperty({}, property, object[property]));
  }, {});
};

export var Visibility = pickProperties(styles.modifiers, ['hidden', 'hiddenOnSm', 'hiddenOnMd', 'hiddenOnLg', 'hiddenOnXl', 'visibleOnSm', 'visibleOnMd', 'visibleOnLg', 'visibleOnXl']);

export default (function () {
  for (var _len = arguments.length, classNames = Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  return function () {
    return {
      className: css.apply(undefined, classNames)
    };
  };
});