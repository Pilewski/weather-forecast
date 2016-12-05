import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from '../../src/components/Header';

describe('Header', () => {

  it('has the id of header', () => {
    const wrapper = shallow(<Header id='header' />);

    expect(wrapper.is('#header')).toEqual(true);
  });

});
