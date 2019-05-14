import React, { Component } from 'react';
import SideNav from '../partials/SideNav'


//Routes
import { adminRoutes } from '../../routes/adminRoutes';
import RouteWithSubRoutes from '../../routes/RouteWithSubRoutes';
class AdminView extends Component {
    render() {
        return (
            
            <section id="main">
                < div className="container">

                    <div className="row">
                        <div className="col-md-3">
                            <SideNav />
                        </div>

                        <div className="col-md-9">

                        {adminRoutes.map(function (route, i) {
                                return <RouteWithSubRoutes key={i} {...route} />;
                            })}

                        </div>

                    </div>

                </div>
            </section>
        );
    }
}

export default AdminView;