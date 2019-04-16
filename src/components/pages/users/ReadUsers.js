import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ReadUsers extends Component {
    render() {
        console.log('yytytt');
        return (

            <div className="panel panel-default">
                <div className="panel-heading main-color-bg">
                    <h3 className="panel-title">Users</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <input className="form-control" type="text"
                                   placeholder="Filter Users..."/>
                        </div>
                    </div>
                    <br/>
                    <table className="table table-striped table-hover">
                        <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Joined</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Jill Smith</td>
                            <td>jillsmith@gmail.com</td>
                            <td>Dec 12, 2016</td>
                            <td><Link className="btn btn-default" to="edit.html">Edit</Link> <Link
                                className="btn btn-danger" to="#">Delete</Link></td>
                        </tr>
                        <tr>
                            <td>Eve Jackson</td>
                            <td>ejackson@yahoo.com</td>
                            <td>Dec 13, 2016</td>
                            <td><Link className="btn btn-default" to="edit.html">Edit</Link> <Link
                                className="btn btn-danger" to="#">Delete</Link></td>
                        </tr>
                        <tr>
                            <td>Stephanie Landon</td>
                            <td>landon@yahoo.com</td>
                            <td>Dec 14, 2016</td>
                            <td><Link className="btn btn-default" to="edit.html">Edit</Link> <Link
                                className="btn btn-danger" to="#">Delete</Link></td>
                        </tr>
                        <tr>
                            <td>Mike Johnson</td>
                            <td>mjohnson@gmail.com</td>
                            <td>Dec 15, 2016</td>
                            <td><Link className="btn btn-default" to="edit.html">Edit</Link> <Link
                                className="btn btn-danger" to="#">Delete</Link></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ReadUsers;