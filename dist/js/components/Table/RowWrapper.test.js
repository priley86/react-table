"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _RowWrapper = _interopRequireDefault(require("./RowWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getRowWrapper = function getRowWrapper(props) {
  return _react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement(_RowWrapper["default"], props)));
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