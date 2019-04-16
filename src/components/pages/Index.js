import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
//Partials
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import SideNav from '../partials/SideNav'
import Modal from '../partials/Modal'
//Routes
import {routes} from '../../routes/routes';
import RouteWithSubRoutes from '../../routes/RouteWithSubRoutes';
//Home
//Users


class Index extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <section id="main">
                    < div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <SideNav/>
                            </div>

                            <div className="col-md-9">

                                {routes.map((route, i) => (
                                    <RouteWithSubRoutes key={i} {...route} />
                                ))}

                            </div>

                        </div>
                    </div>
                </section>
                <Modal/>
                <Footer/>
            </Router>
        );
    }
}

export default Index;