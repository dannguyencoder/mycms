import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ReadPosts extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="panel panel-default">
                    <div className="panel-heading main-color-bg">
                        <h3 className="panel-title">Posts</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <input className="form-control" type="text" placeholder="Filter Posts..."/>
                            </div>
                        </div>
                        <br/>
                        <table className="table table-striped table-hover">
                            <tbody>
                            <tr>
                                <th>Title</th>
                                <th>Published</th>
                                <th>Created</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>Blog Post 1</td>
                                <td><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></td>
                                <td>Dec 12, 2016</td>
                                <td><Link className="btn btn-default" to="/posts/editPost">Edit</Link> <Link
                                    className="btn btn-danger" to="#">Delete</Link></td>
                            </tr>
                            <tr>
                                <td>Blog Post 2</td>
                                <td><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></td>
                                <td>Dec 13, 2016</td>
                                <td><Link className="btn btn-default" to="/posts/editPost">Edit</Link> <Link
                                    className="btn btn-danger" to="#">Delete</Link></td>
                            </tr>
                            <tr>
                                <td>Blog Post 3</td>
                                <td><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
                                <td>Dec 13, 2016</td>
                                <td><Link className="btn btn-default" to="/posts/editPost">Edit</Link> <Link
                                    className="btn btn-danger" to="#">Delete</Link></td>
                            </tr>
                            <tr>
                                <td>Blog Post 4</td>
                                <td><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></td>
                                <td>Dec 14, 2016</td>
                                <td><Link className="btn btn-default" to="/posts/editPost">Edit</Link> <Link
                                    className="btn btn-danger" to="#">Delete</Link></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ReadPosts;