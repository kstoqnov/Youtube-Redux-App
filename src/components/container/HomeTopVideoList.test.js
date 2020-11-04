import React from 'react';
import { shallow } from 'enzyme';
import { HomeTopVideoList } from './HomeTopVideoList';

describe('List', () => {
  it('Should test item props as undefined', () => {
     shallow(<HomeTopVideoList />);
  });
});
