import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })

describe("When the Header renders", () => {

  let renderedHeader 
  beforeEach(()=>{
    renderedHeader = shallow(<Header />)
  })

  it("shows 5 listItems", () => {
    const renderedListItems = renderedHeader.find("li")
    expect(renderedListItems.length).toEqual(5)
  })

})