import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './searchBox';

let wrapper, newSearchFn;

beforeEach(() => {
    newSearchFn = jest.fn();
    wrapper = shallow(<SearchBox onNewSearch={newSearchFn} />);
});

afterEach(() => {
    newSearchFn.mockReset();
  });

it('should render an input', () => {
    expect(wrapper.find('input').length).toEqual(1);
});

it('should call `props.onNewSearch` when <input> value changes', () => {
    const input = wrapper.find('input');
    const searchText = 'my GIF search';

    input.simulate('change', searchText);

    expect(newSearchFn.mock.calls.length).toEqual(1);
    expect(newSearchFn.mock.calls[0][0]).toEqual(searchText);
});
