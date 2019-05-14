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
                    <Link to="/admin/posts/readPosts" className="list-group-item"><span
                        className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Posts <span
                        className="badge">33</span></Link>
                    <Link to="/admin/users/readUsers" className="list-group-item"><span
                        className="glyphicon glyphicon-user" aria-hidden="true"></span> Users <span
                        className="badge">203</span></Link>
                    <Link to="/admin/category/readCategories" className="list-group-item"><span
                        className="glyphicon glyphicon-user" aria-hidden="true"></span> Categories <span
                        className="badge">203</span></Link>
                    <Link to="/admin/domains/readDomains" className="list-group-item"><span
                        className="glyphicon glyphicon-user" aria-hidden="true"></span> Domains <span
                        className="badge">203</span></Link>
                    <Link to="/admin/languages/readLanguages" className="list-group-item"><span
                        className="glyphicon glyphicon-user" aria-hidden="true"></span> Languages <span
                        className="badge">203</span></Link>
                    <Link to="/admin/objects/readObjects" className="list-group-item"><span
                        className="glyphicon glyphicon-user" aria-hidden="true"></span> Objects <span
                        className="badge">203</span></Link>
                    <Link to="/admin/roles/readRoles" className="list-group-item"><span
                        className="glyphicon glyphicon-user" aria-hidden="true"></span> Roles <span
                        className="badge">203</span></Link>
                    <Link to="/admin/roleObjects/readRoleObjects" className="list-group-item"><span
                        className="glyphicon glyphicon-user" aria-hidden="true"></span> Role Objects <span
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