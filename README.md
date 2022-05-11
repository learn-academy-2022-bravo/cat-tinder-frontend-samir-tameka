# Read Functionality

- As a developer, I can pass the cat mock data in state to my index component.

- As a user, I can see a page that lists of all the cat names.

- As a developer, I have test coverage on my index component.

- As a developer, I can refactor the show route to pass the param of id for one cat.

- As a user, I can see a page featuring all the information for one cat.

- As a user, I can click on a cat name and be taken to a page that shows me all the information about that cat.

- As a developer, I have test coverage on my show component.

    * Attempt to test presence of a card on the show page
        
        it("has a card", () => {
            const catShow = shallow(<CatShow />)
            const catShowCard = catShow.find("Card")
            expect(catShowCard).toEqual(1)
        })

    * Error

        ● When CatShow renders › has a card
        expect(received).toEqual(expected) // deep equality

        Expected: 1
        Received: {}

