import React, { Component } from 'react';
import twocats from '/Users/learnacademy/Desktop/cat-tinder-frontend/src/images/two-cats.jpg'
import './Pages.css'

class Home extends Component {
    render() {
        return (
            <>

            <div class="container">
                <figure class="position-relative">
                    <img src={twocats} class="img-fluid" alt="two big cats" />
                    <figcaption>
                      <h1>Meet your next Tinderoni!</h1>  
                    </figcaption>
                </figure>
            </div>

            </>
        );
    }
}

export default Home;