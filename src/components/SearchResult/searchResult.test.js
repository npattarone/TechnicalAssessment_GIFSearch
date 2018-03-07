import React from 'react';
import { shallow } from 'enzyme';
import SearchResult from './searchResult';
import ResultOption from '../ResultOption/resultOption';

let wrapper, mockResults, favoriteFn;

beforeEach(() => {
    mockResults = [
        { id: 1, name: 'GIF 1', src: '', favorite: false },
        { id: 2, name: 'GIF 2', src: '', favorite: true },
        { id: 3, name: 'GIF 3', src: '', favorite: false },
        { id: 4, name: 'GIF 4', src: '', favorite: false },
        { id: 5, name: 'GIF 5', src: '', favorite: false },
        { id: 6, name: 'GIF 6', src: '', favorite: false },
        { id: 7, name: 'GIF 7', src: '', favorite: true },
        { id: 8, name: 'GIF 8', src: '', favorite: true },
        { id: 9, name: 'GIF 9', src: '', favorite: false },
        { id: 10, name: 'GIF 10', src: '', favorite: false }
    ];

    favoriteFn = jest.fn();
    wrapper = shallow(<SearchResult results={mockResults} addFavorite={favoriteFn} />);
});

afterEach(() => {
    favoriteFn.mockReset();
  });

it('should render at least one ResultOption', () => {
    expect(wrapper.first(ResultOption).length).toEqual(1);
});
