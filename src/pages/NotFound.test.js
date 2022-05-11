// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import NotFound from './NotFound'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
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