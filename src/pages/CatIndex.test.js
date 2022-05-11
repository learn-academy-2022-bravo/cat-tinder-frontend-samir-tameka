import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from './CatIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatIndex renders", () => {
    
  it("displays a heading", () => {
    const catIndex = shallow(<CatIndex />)
    const catIndexHeadingText = catIndex.find("h1").text()
    expect(catIndexHeadingText).toEqual("Big Cat Rolodex")
  })


})