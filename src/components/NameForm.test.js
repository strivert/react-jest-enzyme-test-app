import React from 'react';
import { shallow } from 'enzyme';
import NameForm from './NameForm';

describe('NameForm', () => {
  let component = null;

  it('renders correctly', () => {
    component = shallow(<NameForm />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('insert new text', ()=>{
    it('has a form', ()=>{
      expect(component.find('form').exists()).toBe(true);
    });

    it('has an input', ()=>{
      expect(component.find('input').exists()).toBe(true);
    });

  });
});
