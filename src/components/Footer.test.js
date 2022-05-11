import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter() })

describe("When the Footer renders", () => {

  let renderedFooter 
  beforeEach(()=>{
    renderedFooter = shallow(<Footer />)
  })

  it("has copyright symbol", () => {
    const renderedCopyright = renderedFooter.find("span").text()
  expect(renderedCopyright).toEqual("© 2022 BadAssDuo, Inc")
  })
  
})