import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import SearchBox from './components/SearchBox/searchBox';

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
