"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./RowWrapper"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./RowWrapper"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.RowWrapper);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _RowWrapper) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _RowWrapper2 = _interopRequireDefault(_RowWrapper);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var getRowWrapper = function getRowWrapper(props) {
    return _react2["default"].createElement("table", null, _react2["default"].createElement("tbody", null, _react2["default"].createElement(_RowWrapper2["default"], props)));
  };

  describe('RowWrapper', function () {
    test('renders correctly', function () {
      var trRef = jest.fn();
      var view = (0, _enzyme.mount)(getRowWrapper({
        onScroll: jest.fn(),
        onResize: jest.fn(),
        trRef: trRef
      }));
      expect(view).toMatchSnapshot();
      expect(trRef.mock.calls).toHaveLength(1);
    });
    test('renders expanded correctly', function () {
      var view = (0, _enzyme.mount)(getRowWrapper({
        row: {
          isExpanded: true
        }
      }));
      expect(view).toMatchSnapshot();
    });
  });
});