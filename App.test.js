import React from 'react';
import _App from './_App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<_App />).toJSON();
  expect(rendered).toBeTruthy();
});
