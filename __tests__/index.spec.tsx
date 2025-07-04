import React from 'react';
import { mount } from 'enzyme';
import Home from '../pages/index';

describe('Home page', () => {
  const wrap = mount(<Home />);

  it('should render without throwing an error', () => {
    expect(wrap.exists()).toBe(true);
    expect(wrap.find('h1').text()).toBe("Hey! I'm Alex,");
  });
});
