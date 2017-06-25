import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';

import App from '../src/app';

it('renders correctly', () => {
  const tree = shallow(
    <App />
  );
});
