import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AdminHeader extends Component {
    render() {
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
                            <Link className="navbar-brand" to="#">AdminStrap</Link>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Dashboard</Link></li>
                                <li><Link to="/">Pages</Link></li>
                                <li><Link to="/posts/readPosts">Posts</Link></li>
                                <li className="active"><Link to="/users/readUsers">Users</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="#">Welcome, Brad</Link></li>
                                <li><Link to="login.html">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <h1><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Users
                                    <small>Manage Site Users</small>
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
                                        <li><Link type="button" data-toggle="modal" data-target="#addPage" to="/">Add Page</Link>
                                        </li>
                                        <li><Link to="#">Add Post</Link></li>
                                        <li><Link to="#">Add User</Link></li>
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

export default AdminHeader;