import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatShow renders", () => {
    
  it("displays a heading", () => {
    const catShow = shallow(<CatShow />)
    const catShowHeadingText = catShow.find("h1").text()
    expect(catShowHeadingText).toEqual("Ready to Mingle")
  })

})