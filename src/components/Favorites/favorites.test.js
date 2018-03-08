import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './favorites';

let wrapper, mockResults, removeFn, openFn;

beforeEach(() => {
    mockResults = [
        { id: '1', name: 'GIF 1', src: '', favorite: true },
        { id: '2', name: 'GIF 2', src: '', favorite: true },
        { id: '3', name: 'GIF 3', src: '', favorite: true },
    ];

    openFn = jest.fn();
    removeFn = jest.fn();

    wrapper = shallow(<Favorites
        favorites={mockResults}
        open={openFn}
        removeFavorite={removeFn} />);
});

afterEach(() => {
    openFn.mockReset();
    removeFn.mockReset();
});

it('should load as much images as favorites are', () => {
    const img = wrapper.first('img');

    expect(wrapper.find('.col-2').length).toEqual(3);
});

it('should load as much buttons as favorites are', () => {
    const button = wrapper.first('button');

    expect(wrapper.find('.col-3').length).toEqual(3);
});


