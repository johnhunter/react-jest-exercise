import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import SearchResults from './';

Enzyme.configure({ adapter: new Adapter() });

const mockArticles = [{
  webUrl: 'http://google.com',
  webTitle: 'This is Google'
}];

describe('SearchResults component', ()=>{

  it('renders', ()=>{
    const wrapper = shallow(
      <SearchResults
        articles={mockArticles}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders empty when no data', ()=>{
    const wrapper = shallow(<SearchResults/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('doesnt break when no articles', ()=>{
    const wrapper = shallow(<SearchResults/>);
    expect(wrapper.find('li')).toHaveLength(0);
  });

  it('doesnt break when empty article list', ()=>{
    const wrapper = shallow(<SearchResults articles={[]}/>);
    expect(wrapper.find('li')).toHaveLength(0);
  });
});
