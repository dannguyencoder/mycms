import React, { Component } from 'react';


class Register extends Component {
    render() {
        return (
            <section id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <form id="login" action="index.html" className="well">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="text" className="form-control" placeholder="Enter Email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-default btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Register;