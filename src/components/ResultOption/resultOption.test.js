import React from 'react';
import { shallow } from 'enzyme';
import ResultOption from './resultOption';

let wrapper, result, favoriteFn, openFn;

beforeEach(() => {
    favoriteFn = jest.fn();
    openFn = jest.fn();
    result = { id: '1', name: 'GIF 1', src: '', favorite: false };

    wrapper = shallow(<ResultOption result={result} addFavorite={favoriteFn} open={openFn} />);
});

afterEach(() => {
    favoriteFn.mockReset();
    openFn.mockReset();
  });

it('should call `props.addFavorite` when <button> is clicked', () => {
    const button = wrapper.find('button');

    button.simulate('click');

    expect(favoriteFn.mock.calls.length).toEqual(1);
    expect(favoriteFn.mock.calls[0][0]).toEqual(result);
});

it('should call `props.open` when <img> is clicked', () => {
    const img = wrapper.find('img');

    img.simulate('click');

    expect(openFn.mock.calls.length).toEqual(1);
    expect(openFn.mock.calls[0][0]).toEqual(result);
});
