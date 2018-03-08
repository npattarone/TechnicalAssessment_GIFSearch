import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import SearchBox from './components/SearchBox/searchBox';
import SearchResult from './components/SearchResult/searchResult';
import TrendList from './components/TrendList/trendList';
import Favorites from './components/Favorites/favorites';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render a SearchBox', () => {
  expect(wrapper.find(SearchBox).length).toEqual(1);
});

it('should render a SearchResult', () => {
  expect(wrapper.find(SearchResult).length).toEqual(1);
});

it('should render a TrendList', () => {
  expect(wrapper.find(TrendList).length).toEqual(1);
});

it('should render a Favorites', () => {
  expect(wrapper.find(Favorites).length).toEqual(1);
});
