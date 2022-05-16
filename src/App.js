import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    this.readCat()
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")
      .then(response => response.json())
      .then(catsArray => this.setState({ cats: catsArray }))
      .catch(errors => console.log("Cat read errors:", errors))
  }


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


  deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => this.readCat())
      .catch(errors => console.log("delete errors:", errors))
  }


  render() {
    console.log(this.state.cats)

    return (

      <Router>

        <Header />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            path="/catindex"
            render={(props) => <CatIndex cats={this.state.cats} />}
          />

          <Route
            path="/catshow/:id"
            render={(props) => {
              let id = +props.match.params.id
              let cat = this.state.cats.find(catObject => catObject.id === id)
              return <CatShow cat={cat} deleteCat={this.deleteCat} />
            }}
          />

          <Route
            path="/catnew"
            render={() => <CatNew createCat={this.createCat} />}
          />

          <Route
            path="/catedit/:id"
            render={(props) => {
              let id = +props.match.params.id
              let cat = this.state.cats.find(catObject => catObject.id === id)
              return <CatEdit editCat={this.editCat} cat={cat} />
            }}
          />

          <Route component={NotFound} />
        </Switch>

        <Footer />

      </Router>

    );
  }
}

export default App;