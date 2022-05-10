import React, { Component } from 'react';
import logo from '/Users/learnacademy/Desktop/cat-tinder-frontend/src/images/no-dogs.svg'


class Header extends Component {
    render() {
        return (
            <>
            <div class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <img src={logo} class="mx-3" width="60px" height="auto" />
                        <span class="fs-4">Big Cat Tinder</span>
                    </a>

                    <ul class="nav nav-pills">
                        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Prowl All</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Add Prowlfile</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Update Prowlfile</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                    </ul>
                </header>
            </div>
            </>
        );
    }
}

export default Header;