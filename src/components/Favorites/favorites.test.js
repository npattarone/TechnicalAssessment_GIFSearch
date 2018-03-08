import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './favorites';
import ResultOption from '../ResultOption/resultOption';

let wrapper, mockResults, removeFn, openFn;

beforeEach(() => {
    mockResults = [
        { id: '1', name: 'GIF 1', src: '', favorite: true },
        { id: '2', name: 'GIF 2', src: '', favorite: true },
        { id: '3', name: 'GIF 3', src: '', favorite: true },
    ];

    openFn = jest.fn();
    removeFn = jest.fn();
    wrapper = shallow(<Favorites favorites={mockResults} open={openFn} removeFavorite={removeFn} />);
});

afterEach(() => {
    openFn.mockReset();
    removeFn.mockReset();
  });

it('should render at least one ResultOption', () => {
    expect(wrapper.first(ResultOption).length).toEqual(1);
});

it('should call `props.open` when <img> is clicked', () => {
    const img = wrapper.first('img');

    img.simulate('click');

    expect(openFn.mock.calls.length).toEqual(1);
    expect(openFn.mock.calls[0][0]).toEqual(result);
});

it('should call `props.removeFavorite` when <button> is clicked', () => {
    const button = wrapper.first('button');

    button.simulate('click');

    expect(removeFn.mock.calls.length).toEqual(1);
    expect(removeFn.mock.calls[0][0]).toEqual(result);
});


