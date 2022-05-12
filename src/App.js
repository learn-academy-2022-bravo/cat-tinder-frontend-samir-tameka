import React, { Component } from 'react';
import mockCats from './mockCats.js'

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
      cats: mockCats
    }
  }






  editCat = (editCat, id) => {
    console.log("cat:", editCat)
    console.log("id:", id)
  }

  render() {
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
              return <CatShow cat={cat} />
            }}
          />

          <Route path="/catnew" component={CatNew} />

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