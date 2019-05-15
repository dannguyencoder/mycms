import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import * as apis from "../../../apis/apis";

class ReadRoles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allRoles: []
        }
    }

    deleteRole(roleId) {
        apis.deleteRole(roleId)
            .then(response => {
                console.log(response);
                this.getAllRoles();
            })
            .catch(error => {
                console.log(error)
            });
    }

    getAllRoles() {
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

        apis.getAllRoles()
            .then(response => {
                console.log("response getting roles");
                console.log(response);
                this.setState({
                    allRoles: response.data
                });
            })
            .catch((error) => {
                console.log("error-------------")
                console.log(error);
                this.setState({
                    allRoles: []
                })
            });

    };

    componentDidMount() {
        this.getAllRoles();
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading main-color-bg">
                    <h3 className="panel-title">Roles</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <input className="form-control" type="text"
                                   placeholder="Filter Roles..."/>
                        </div>
                    </div>
                    <br/>
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Domain</th>
                            <th>isActive</th>
                            <th>isVisible</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            this.state.allRoles.map(role => {
                                return (
                                    <tr key={role.id}>
                                        <td>{role.name}</td>
                                        <td>{role.domain.name}</td>
                                        <td>{role.isActive === 1 ? "Hoạt động" : "Không hoạt động"}</td>
                                        <td>{role.isVisible === 1 ? "Hiển thị" : "Không hiển thị"}</td>
                                        <td><Link
                                            className="btn btn-default"
                                            to={{
                                                pathname: "/admin/roles/editRole",
                                                state: {
                                                    roleId: role.id
                                                }
                                            }}>Edit</Link>
                                            <Link
                                                className="btn btn-danger" to="#" onClick={() => this.deleteRole(role.id)}>Delete</Link></td>
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

export default ReadRoles;