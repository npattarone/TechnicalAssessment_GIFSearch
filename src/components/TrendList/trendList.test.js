import React from 'react';
import { shallow } from 'enzyme';
import TrendList from './trendList';
import ResultOption from '../ResultOption/resultOption';

let mockTrendingList, wrapper;

beforeEach(() => {
    mockTrendingList = [
        { id: 1, name: 'GIF 1', src: '' },
        { id: 2, name: 'GIF 2', src: '' },
        { id: 3, name: 'GIF 3', src: '' },
        { id: 4, name: 'GIF 4', src: '' },
        { id: 5, name: 'GIF 5', src: '' },
        { id: 6, name: 'GIF 6', src: '' },
        { id: 7, name: 'GIF 7', src: '' },
        { id: 8, name: 'GIF 8', src: '' },
        { id: 9, name: 'GIF 9', src: '' },
        { id: 10, name: 'GIF 10', src: '' }
    ];

    wrapper = shallow(<TrendList trendList={mockTrendingList} />);
});

it('should render a list if ResultOption top 10 trending GIFs', () => {
    expect(wrapper.find(ResultOption).length).toEqual(10);
    expect(wrapper.find(ResultOption).length).toEqual(mockTrendingList.length);
});
