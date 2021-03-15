import React from 'react';
import {mount} from 'enzyme';
import NavBar from './navbar';

describe('NavBar component', () => {
  const wrap = mount(<NavBar/>);
  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('h1').text()).toBe('</>');
  });
});
