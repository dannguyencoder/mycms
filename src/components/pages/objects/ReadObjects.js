import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import * as apis from "../../../apis/apis";

class ReadObjects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allObjects: []
        }
    }

    deleteObject(objectId) {
        apis.deleteObject(objectId)
            .then(response => {
                console.log(response);
                this.getAllObjects();
            })
            .catch(error => {
                console.log(error)
            });
    }

    getAllObjects() {
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

        apis.getAllObjects()
            .then(response => {
                this.setState({
                    allObjects: response.data
                });
            })
            .catch((error) => {
                console.log("error-------------")
                console.log(error);
                this.setState({
                    allObjects: []
                })
            });

    };

    componentDidMount() {
        this.getAllObjects();
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading main-color-bg">
                    <h3 className="panel-title">Objects</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <input className="form-control" type="text"
                                   placeholder="Filter Objects..."/>
                        </div>
                    </div>
                    <br/>
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>URL</th>
                            <th>Parent ID</th>
                            <th>Order</th>
                            <th>Domain</th>
                            <th>isActive</th>
                            <th>isVisible</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            this.state.allObjects.map(object => {
                                return (
                                    <tr key={object.id}>
                                        <td>{object.objectName}</td>
                                        <td>{object.url}</td>
                                        <td>{object.parentId}</td>
                                        <td>{object.objectOrder}</td>
                                        <td>{object.domainName}</td>
                                        <td>{object.isActive === 1 ? "Hoạt động" : "Không hoạt động"}</td>
                                        <td>{object.isVisible === 1 ? "Hiển thị" : "Không hiển thị"}</td>
                                        <td><Link
                                            className="btn btn-default"
                                            to={{
                                                pathname: "/admin/objects/editObject",
                                                state: {
                                                    objectId: object.id
                                                }
                                            }}>Edit</Link>
                                            <Link
                                                className="btn btn-danger" to="#" onClick={() => this.deleteObject(object.id)}>Delete</Link></td>
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

export default ReadObjects;