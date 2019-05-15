import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import * as apis from "../../../apis/apis";

class ReadUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allUsers: []
        }
    }

    deleteUser(userId) {
        apis.deleteUser(userId)
            .then(response => {
                console.log(response);
                this.getAllUsers();
            })
            .catch(error => {
                console.log(error)
            });
    }

    getAllUsers() {
        // const getDataCategories = async () => {
        //    try {
        //        const response = await apis.getAllCategories();
        //        console.log("my response-------------");
        //        console.log(await apis.getAllCategories());
        //        this.setState({
        //            allCategories: response.data
        //        });
        //    } catch (error) {
        //        console.log(error)
        //        this.setState({
        //            allCategories: []
        //        });
        //    }
        //
        // }
        //
        // getDataCategories();

        apis.getAllUsers()
            .then(response => {
                this.setState({
                    allUsers: response.data
                });
            })
            .catch((error) => {
                console.log("error-------------")
                console.log(error);
                this.setState({
                    allUsers: []
                })
            });

    };

    componentDidMount() {
        this.getAllUsers();
    }

    render() {
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
                        <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>isActive</th>
                            <th>isAdmin</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            this.state.allUsers.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role.name}</td>
                                        <td>{user.isActive === 1 ? "Hoạt động" : "Không hoạt động"}</td>
                                        <td>{user.isAdmin === 1 ? "Là Admin" : "Không là Admin"}</td>
                                        <td><Link
                                            className="btn btn-default"
                                            to={{
                                                pathname: "/admin/users/editUser",
                                                state: {
                                                    userId: user.id
                                                }
                                            }}>Edit</Link>
                                            <Link
                                                className="btn btn-danger" to="#" onClick={() => this.deleteUser(user.id)}>Delete</Link></td>
                                    </tr>
                                );
                            })
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ReadUsers;