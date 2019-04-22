import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//Partials
import Header from '../partials/Header'
import Footer from '../partials/Footer'

import Modal from '../partials/Modal'
import AdminView from '../partials/AdminView';
import Register from '../partials/Register';

//Home
//Users


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        // this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        return (
            <Router>
                <Header />
                <AdminView />
                <Modal />
                <Footer />
            </Router>
        );
    }
}

export default Index;