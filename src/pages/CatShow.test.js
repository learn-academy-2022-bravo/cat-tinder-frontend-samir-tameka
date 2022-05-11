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


// ****** Attempt to test presence of a card on the show page ***** 
//   it("has a card", () => {
//     const catShow = shallow(<CatShow />)
//     const catShowCard = catShow.find("Card")
//     expect(catShowCard).toEqual(1)
//   })

//         ● When CatShow renders › has a card

//         expect(received).toEqual(expected) // deep equality

//         Expected: 1
//         Received: {}

//             17 |     const catShow = shallow(<CatShow />)
//             18 |     const catShowCard = catShow.find("Card")
//         > 19 |     expect(catShowCard).toEqual(1)
//             |                         ^
//             20 |   })


})