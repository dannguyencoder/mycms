import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import * as apis from '../../utils/apis';

class ReadUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    //Lay tat ca User duoc phep xem, them, sua, xoa tu User nay
    getUsersByAdminId = () => {
        const formData = new FormData()
        const cookies = new Cookies()
        const userId = cookies.get('user_id')
        if (userId != undefined) {
            formData.append('user_id', userId)
            return apis.getUsersByAdminId(formData)
                .then(response => { 
                    this.setState({
                        users: response.data
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        }else{
            console.log('You must login to continue!')
        }
    }
    componentDidMount() {
        this.getUsersByAdminId()
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
                                placeholder="Filter Users..." />
                        </div>
                    </div>
                    <br />
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Joined</th>
                                <th>Active</th>
                                <th>Admin</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.users.map(user => {
                                    return (
                                        <tr key={Math.random}>
                                            <td>{user.email}</td>
                                            <td>mjohnson@gmail.com</td>
                                            <td>{user.createdAt}</td>
                                            <td>{user.isActive === 1 ? <input type="checkbox" checked disabled /> : <input type="checkbox" disabled />}</td>
                                            <td>{user.isAdmin === 1 ? <input type="checkbox" checked disabled /> : <input type="checkbox" disabled />}</td>
                                            <td>
                                                <Link className="btn btn-default"
                                                    to={{
                                                        pathname: "/admin/users/editUser/",
                                                        state: {
                                                            userID: user.id
                                                        }
                                                    }} > Edit</Link>
                                                <Link className="btn btn-danger" to="#">Delete</Link>
                                            </td>
                                        </tr>
                                    )
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