import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './searchBox';

let wrapper, newSearchFn, onChangeFn;

beforeEach(() => {
    newSearchFn = jest.fn();
    onChangeFn = jest.fn();

    wrapper = shallow(<SearchBox onChange={onChangeFn} onNewSearch={newSearchFn} />);
});

afterEach(() => {
    newSearchFn.mockReset();
    onChangeFn.mockReset();
  });

it('should render an input and a button', () => {
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});

it('should call `props.onNewSearch` when <button> clicked', () => {
    const button = wrapper.find('button');
    button.simulate('click');

    expect(newSearchFn.mock.calls.length).toEqual(1);
});

it('should call `props.onChange` when <input> changes', () => {
    const input = wrapper.find('input');
    const searchText = 'my GIF search';

    input.simulate('change', searchText);

    expect(onChangeFn.mock.calls.length).toEqual(1);
    expect(onChangeFn.mock.calls[0][0]).toEqual(searchText);
});
