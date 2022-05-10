import React, { Component } from 'react';
import image from '/Users/learnacademy/Desktop/cat-tinder-frontend/src/images/brett-jordan-XWar9MbNGUY-unsplash.jpg'

class NotFound extends Component {
    render() {
        return (
            <>
            <div class="container">
            <div class="justify-content-center">
                <img src={image}  width="100vw" height="100vh"/>
            </div>
            </div>

            </>
        );
    }
}

export default NotFound;