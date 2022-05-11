import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe("When Home renders", () => {

  let home 
  beforeEach(()=>{
    home = shallow(<Home />)
  })

  it("displays a heading", () => {
    const homeHeadingText = home.find("h1").text()
  expect(homeHeadingText).toEqual("Meet your next Tinderoni!")
  })
  
})