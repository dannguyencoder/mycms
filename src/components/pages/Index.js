import React, { Component } from 'react';
import {connect} from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import {Route} from 'react-router-dom';

//Partials
import Header from '../partials/Header'
import Footer from '../partials/Footer'

import Modal from '../partials/Modal'
import AdminView from '../partials/AdminView';
import Login from '../pages/auth/Login';

// styles
import '../../styles/styles.scss'


class Index extends Component {

    constructor(props) {
        super(props);
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

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(Index);



