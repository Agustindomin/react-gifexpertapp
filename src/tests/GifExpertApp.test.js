import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '.';

describe('<GifExpertApp />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<GifExpertApp />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
