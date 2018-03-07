import React from 'react';
import { shallow } from 'enzyme';
import ResultOption from './resultOption';

let wrapper, result, favoriteFn;

beforeEach(() => {
    favoriteFn = jest.fn();
    result = { id: 1, name: 'GIF 1', src: '', favorite: false };

    wrapper = shallow(<ResultOption result={result} addFavorite={favoriteFn} />);
});

afterEach(() => {
    favoriteFn.mockReset();
  });

it('should call `props.addFavorite` when <icon> is clicked', () => {
    const icon = wrapper.find('i');

    icon.simulate('click');

    expect(favoriteFn.mock.calls.length).toEqual(1);
    expect(favoriteFn.mock.calls[0][0]).toEqual(result.id);
});
