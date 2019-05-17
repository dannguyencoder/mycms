import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

import Cookies from 'universal-cookie';

class AdminHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'No name'
        }

    }

    logout() {
        // set token to Cookie
        const cookies = new Cookies();
        cookies.set('token', null);
        console.log("removed user token from cookie: ");
        console.log(cookies.get('token'));

        // redirect
        this.props.history.push("/");
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('next props');
        console.log(nextProps);
    }

    render() {
        console.log('current props data');
        console.log(this.props);

        return (
            <React.Fragment>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="#">Admin CMS</Link>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/admin/home">Home</Link></li>
                                {/* foreach Domain */}
                                {/*<li><Link to="/">Home</Link></li>*/}

                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/">Welcome, {this.props.user.username ? this.props.user.username : 'Anonymous'}</Link></li>
                                <li><Link onClick={() => this.logout()} to="/">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <h1><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
                                    <small>Manage Site Content</small>
                                </h1>
                            </div>
                            <div className="col-md-2">
                                <div className="dropdown create">
                                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Create Content
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li><Link to="/admin/posts/addPost">Add Post</Link></li>
                                        <li><Link to="/admin/users/addUser">Add User</Link></li>
                                        <li><Link to="/admin/categories/addCategory">Add Category</Link></li>
                                        <li><Link to="/admin/domains/addDomain">Add Domain</Link></li>
                                        <li><Link to="/admin/languages/addLanguage">Add Language</Link></li>
                                        <li><Link to="/admin/objects/addObject">Add Object</Link></li>
                                        <li><Link to="/admin/roles/addRole">Add Role</Link></li>
                                        <li><Link to="/admin/roleObjects/addRoleObject">Add Role-Object</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section id="breadcrumb">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li><Link to="index.html">Dashboard</Link></li>
                            <li className="active">Users</li>
                        </ol>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    token: state.auth.token,
    user: state.auth.user ? state.auth.user : {}
});

export default connect(mapStateToProps)(AdminHeader);