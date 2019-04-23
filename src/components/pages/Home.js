import React, { Component } from 'react';
import SideNav from '../partials/SideNav'

class Home extends Component {
    render() {
        // console.log(Math.random())
        return (
            <React.Fragment>

                {/*Website Overview*/}
                <div className="panel panel-default">
                    <div className="panel-heading main-color-bg">
                        <h3 className="panel-title">Website Overview</h3>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-3">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-user" aria-hidden="true"></span> 203</h2>
                                <h4>Users</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> 12</h2>
                                <h4>Pages</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> 33</h2>
                                <h4>Posts</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-stats" aria-hidden="true"></span> 12,334</h2>
                                <h4>Visitors</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Latest Users*/}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Latest Users</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-striped table-hover">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Joined</th>
                                </tr>
                                <tr>
                                    <td>Jill Smith</td>
                                    <td>jillsmith@gmail.com</td>
                                    <td>Dec 12, 2016</td>
                                </tr>
                                <tr>
                                    <td>Eve Jackson</td>
                                    <td>ejackson@yahoo.com</td>
                                    <td>Dec 13, 2016</td>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td>jdoe@gmail.com</td>
                                    <td>Dec 13, 2016</td>
                                </tr>
                                <tr>
                                    <td>Stephanie Landon</td>
                                    <td>landon@yahoo.com</td>
                                    <td>Dec 14, 2016</td>
                                </tr>
                                <tr>
                                    <td>Mike Johnson</td>
                                    <td>mjohnson@gmail.com</td>
                                    <td>Dec 15, 2016</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Home;