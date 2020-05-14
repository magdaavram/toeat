import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from 'App';

it('renders app without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders router, header and main components', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Router')).toHaveLength(1);
  expect(wrapper.find('Header')).toHaveLength(1);
  expect(wrapper.find('#main').find('Routes')).toHaveLength(1);
});
