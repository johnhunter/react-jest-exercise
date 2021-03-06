import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Search from './';

Enzyme.configure({ adapter: new Adapter() });

describe("Search component", ()=>{

  it("renders", ()=>{
    const wrapper = shallow( <Search /> );
    expect(wrapper.exists()).toBe(true);
  });

  it("echos user text", ()=>{
    const wrapper = shallow(
      <Search performSearch={()=>{}} />
    );
    wrapper.find('input').simulate('change', {
      target: { value: 'Hello' }
    });
    expect(wrapper.find('input').props().value).toEqual('Hello');
  });

  it("cancels submit event when the form is submitted", ()=>{
    const wrapper = shallow( <Search /> );
    const preventDefaultSpy = jest.fn();
    wrapper.find('form').simulate('submit', {
      preventDefault: preventDefaultSpy
    });
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

});

describe('Search Component integration', ()=>{

  it('renders search results when article changes', ()=>{
    const wrapper = mount( <Search articles={[]} /> );
    wrapper.setProps({
      articles: [{
        webUrl: 'http://google.com',
        webTitle: 'This is Google'
      }]
    });
    expect(wrapper.find('a').prop('href')).toEqual('http://google.com');
  });

});
