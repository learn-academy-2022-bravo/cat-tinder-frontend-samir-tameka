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



# Fetch for Read Functionality

- As a developer, I can get the cats from the database and set the array in state.

    ```ruby
    componentDidMount(){
    this.readCat()
    }

    readCat = () => {
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    // set the state with the data from the backend into the empty array
    .then(catsArray => this.setState({cats: catsArray}))
    .catch(errors => console.log("Cat read errors:", errors))
    }
    ```
- As a user, I can see all the cats.
- As a user, I can see the information for just one cat.


# Fetch Create Functionality

- As a developer, I can update the createCat method to post information to the database.

```ruby
  createCat = (newCat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(() => this.readCat())
  .catch(errors => console.log("Cat create errors:", errors))
  }
```

- As a user, I can create a new cat.
- As a user, I can see my new cat in the cat list.


# Fetch Update Functionality

- As a developer, I can update the updateCat method to update information in the database.
- As a user, I can update an existing cat.
- As a user, I can see the information for my updated cat.


