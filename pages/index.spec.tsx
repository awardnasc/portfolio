import React from 'react';
import {mount} from 'enzyme';
import Home from './index';

describe('Home page', () => {
  const wrap = mount(<Home />);
  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('h1').text()).toBe('Alex Ward');
  });
});
