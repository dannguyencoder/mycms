import React, {Component} from 'react';

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
                            <a className="navbar-brand" href="#">AdminStrap</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="index.html">Dashboard</a></li>
                                <li><a href="pages.html">Pages</a></li>
                                <li><a href="posts.html">Posts</a></li>
                                <li className="active"><a href="users.html">Users</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">Welcome, Brad</a></li>
                                <li><a href="login.html">Logout</a></li>
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
                                        <li><a type="button" data-toggle="modal" data-target="#addPage">Add Page</a>
                                        </li>
                                        <li><a href="#">Add Post</a></li>
                                        <li><a href="#">Add User</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section id="breadcrumb">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li><a href="index.html">Dashboard</a></li>
                            <li className="active">Users</li>
                        </ol>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default AdminHeader;