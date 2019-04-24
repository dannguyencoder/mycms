import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AdminSideNav extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="list-group">
                    <Link to="" className="list-group-item active main-color-bg">
                        <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
                    </Link>
                    <Link to="/posts/readPosts" className="list-group-item"><span
                        className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Posts <span
                        className="badge">33</span></Link>
                    <Link to="/users/readUsers" className="list-group-item"><span
                        className="glyphicon glyphicon-user" aria-hidden="true"></span> Users <span
                        className="badge">203</span></Link>
                </div>

                <div className="well">
                    <h4>Disk Space Used</h4>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="60"
                             aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
                            60%
                        </div>
                    </div>
                    <h4>Bandwidth Used </h4>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="40"
                             aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
                            40%
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AdminSideNav;