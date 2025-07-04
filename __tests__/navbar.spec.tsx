import React from 'react';
import { mount } from 'enzyme';
import NavBar from '../components/navbar';

describe('NavBar component', () => {
  const wrap = mount(<NavBar />);

  it('should render without throwing an error', () => {
    expect(wrap.exists()).toBe(true);
  });
});
