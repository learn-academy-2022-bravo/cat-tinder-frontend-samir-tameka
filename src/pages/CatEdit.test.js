import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatEdit from './CatEdit'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatEdit renders", () => {

  it("displays a heading", () => {
    const catEdit = shallow(<CatEdit />)
    const catEditHeadingText = catEdit.find("h1").text()
    expect(catEditHeadingText).toEqual("Prowlfile Update")
  })


})