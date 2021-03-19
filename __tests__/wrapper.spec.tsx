import React from 'react';
import {mount} from 'enzyme';
import Wrapper from '../components/wrapper';

describe('Wrapper component', () => {
  const wrap = mount(
      <Wrapper ><h1 className='testChild'>Test tag</h1></Wrapper>,
  );
  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('.testChild').text()).toBe('Test tag');
  });
  it('should render the Head', () => {
    expect(wrap.find('Head')).toHaveLength(1);
  });
  it('should render the footer', () => {
    expect(wrap.find('footer')).toHaveLength(1);
  });
});
