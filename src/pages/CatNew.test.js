import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from './CatNew'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatNew renders", () => {
    
  it("displays a heading", () => {
    const catNew = shallow(<CatNew />)
    const catNewHeadingText = catNew.find("h1").text()
    expect(catNewHeadingText).toEqual("Play & Pay")
  })

})