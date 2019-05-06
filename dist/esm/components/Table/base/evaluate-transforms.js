function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * evaluate-transforms.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 * */
import { isFunction } from 'lodash-es';
import mergeProps from './merge-props';

function evaluateTransforms() {
  var transforms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments[1];
  var extraParameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (process.env.NODE_ENV !== 'production') {
    if (!transforms.every(isFunction)) {
      throw new Error("All transforms weren't functions!", transforms);
    }
  }

  if (transforms.length === 0) {
    return {};
  }

  return mergeProps.apply(undefined, _toConsumableArray(transforms.map(function (transform) {
    return transform(value, extraParameters);
  })));
}

export default evaluateTransforms;