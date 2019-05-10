import React from 'react';
import { mount } from 'enzyme';
import RowWrapper from './RowWrapper';

var getRowWrapper = function getRowWrapper(props) {
  return React.createElement("table", null, React.createElement("tbody", null, React.createElement(RowWrapper, props)));
};

describe('RowWrapper', function () {
  test('renders correctly', function () {
    var trRef = jest.fn();
    var view = mount(getRowWrapper({
      onScroll: jest.fn(),
      onResize: jest.fn(),
      trRef: trRef
    }));
    expect(view).toMatchSnapshot();
    expect(trRef.mock.calls).toHaveLength(1);
  });
  test('renders expanded correctly', function () {
    var view = mount(getRowWrapper({
      row: {
        isExpanded: true
      }
    }));
    expect(view).toMatchSnapshot();
  });
});