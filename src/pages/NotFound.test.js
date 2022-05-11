import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe("When NotFound renders", () => {

  let notFound 
  beforeEach(()=>{
    notFound = shallow(<NotFound />)
  })

  it("displays an image", () => {
    const notFoundHeader = notFound.find("h1").text()
  expect(notFoundHeader).toEqual("OH NO! YOU FOUND THE DOG POUND. TURN BACK BEFORE IT'S TOO LATE")
  })
  
})