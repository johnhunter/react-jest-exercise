import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import SearchContainer from './';
import Search from '../../components/Search';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('../../api/');


describe('Search Container', ()=>{

  it('renders', ()=>{
    const wrapper = shallow( <SearchContainer/> );
    expect(wrapper.exists()).toBe(true);
  });

  it('has search component', ()=>{
    const wrapper = mount( <SearchContainer/> );
    expect(wrapper.children(Search).length).toEqual(1);
  });

  it('updates articles state', ()=>{
    const wrapper = mount( <SearchContainer/> );
    const { performSearch, articles } = wrapper.find(Search).props();

    // Initial article list
    expect(articles).toEqual([]);

    // Exercise mocked api call
    // Note: return promise so test waits for async response
    return performSearch().then(()=>{
      wrapper.update();
      expect(wrapper.find(Search).props().articles).toHaveLength(10);
    })
  });

});
