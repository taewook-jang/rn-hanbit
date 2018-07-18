import React from 'react';
import App_ from './App_';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App_ />).toJSON();
  expect(rendered).toBeTruthy();
});
