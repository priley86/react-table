var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * provider.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 * */
import React from 'react';
import PropTypes from 'prop-types';
import { tableTypes, tableDefaults, tableContextTypes } from './types';

var componentDefaults = tableDefaults.renderers;

var Provider = function (_React$Component) {
  _inherits(Provider, _React$Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          columns = _props.columns,
          components = _props.components,
          renderers = _props.renderers;

      var finalRenderers = renderers;

      // XXXXX: Drop in the next major version
      if (components) {
        // eslint-disable-next-line no-console
        console.warn('`components` have been deprecated in favor of `renderers` and will be removed in the next major version, please rename!');

        finalRenderers = components;
      }

      return {
        columns: columns,
        renderers: {
          table: finalRenderers.table || componentDefaults.table,
          header: _extends({}, componentDefaults.header, finalRenderers.header),
          body: _extends({}, componentDefaults.body, finalRenderers.body)
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          columns = _props2.columns,
          renderers = _props2.renderers,
          components = _props2.components,
          children = _props2.children,
          props = _objectWithoutProperties(_props2, ['columns', 'renderers', 'components', 'children']);

      return React.createElement(renderers.table || tableDefaults.renderers.table, props, children);
    }
  }]);

  return Provider;
}(React.Component);

export default Provider;

Provider.propTypes = _extends({}, tableTypes, {
  children: PropTypes.any
});
Provider.defaultProps = _extends({}, tableDefaults);
Provider.childContextTypes = tableContextTypes;