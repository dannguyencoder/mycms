import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//Partials
import Header from '../partials/Header'
import Footer from '../partials/Footer'

import Modal from '../partials/Modal'
import AdminView from '../partials/AdminView';
import Login from '../pages/users/Login'


//Home
//Users


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false
        };
        // this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentWillMount() {
        //if pathName = '/login' => get View not sideBar
        const pathName = window.location.pathname
        if (pathName === '/login') {
            this.setState({ login: true })
        }
    }

    render() {
        return (
            <Router>
                <Header />
                {this.state.login === false ? <AdminView /> : <Login />}
                <Modal />
                <Footer />
            </Router>
        );
    }
}

export default Index;