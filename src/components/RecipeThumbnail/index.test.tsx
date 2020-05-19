import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Routes from 'routes';
import RecipeThumbnail from './index';

it('should render correctly', () => {
  const tree = create(
    <MemoryRouter>
      <RecipeThumbnail imageURL={'image.png'} title={'Pasta'} duration={78} difficultyLevel={2} />
    </MemoryRouter>
  );

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should change URL when clicking on image', () => {
  const history = createMemoryHistory();
  const wrapper = mount(
    <Router history={history}>
      <RecipeThumbnail imageURL={'image.png'} title={'Pasta'} duration={78} difficultyLevel={2} />
      <Routes />
    </Router>
  );

  wrapper.find('a').at(0).simulate('click', { button: 0 });
  expect(history.location.pathname).toEqual('/recipe');
});

it('should change URL when clicking on title', () => {
  const history = createMemoryHistory();
  const wrapper = mount(
    <Router history={history}>
      <RecipeThumbnail imageURL={'image.png'} title={'Pasta'} duration={78} difficultyLevel={2} />
      <Routes />
    </Router>
  );

  wrapper.find('a').at(1).simulate('click', { button: 0 });
  expect(history.location.pathname).toEqual('/recipe');
});
