import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import * as apis from "../../../apis/apis";

class ReadRoleObjects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allRoleObjects: []
        }
    }

    deleteRoleObject(roleObjectId) {
        apis.deleteRoleObject(roleObjectId)
            .then(response => {
                console.log(response);
                this.getAllRoleObjects();
            })
            .catch(error => {
                console.log(error)
            });
    }

    getAllRoleObjects() {
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

        apis.getAllRoleObjects()
            .then(response => {
                this.setState({
                    allRoleObjects: response.data
                });
            })
            .catch((error) => {
                console.log("error-------------")
                console.log(error);
                this.setState({
                    allDomains: []
                })
            });

    };

    componentDidMount() {
        this.getAllRoleObjects();
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading main-color-bg">
                    <h3 className="panel-title">Domains</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <input className="form-control" type="text"
                                   placeholder="Filter Domains..."/>
                        </div>
                    </div>
                    <br/>
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>Role</th>
                            <th>Object</th>
                            <th>isActive</th>
                            <th>isVisible</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            this.state.allRoleObjects.map(roleObject => {
                                return (
                                    <tr key={roleObject.id}>
                                        <td>{roleObject.role}</td>
                                        <td>{roleObject.object}</td>
                                        <td>{roleObject.isActive === 1 ? "Hoạt động" : "Không hoạt động"}</td>
                                        <td>{roleObject.isVisible === 1 ? "Hiển thị" : "Không hiển thị"}</td>
                                        <td><Link
                                            className="btn btn-default"
                                            to={{
                                                pathname: "/admin/roleObjects/editRoleObject",
                                                state: {
                                                    roleObjectId: roleObject.id
                                                }
                                            }}>Edit</Link>
                                            <Link
                                                className="btn btn-danger" to="#" onClick={() => this.deleteRoleObject(roleObject.id)}>Delete</Link></td>
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

export default ReadRoleObjects;