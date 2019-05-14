import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import * as apis from "../../../apis/apis";

class ReadDomains extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allDomains: []
        }
    }

    deleteDomain(domainId) {
        apis.deleteDomain(domainId)
            .then(response => {
                console.log(response);
                this.getAllDomains();
            })
            .catch(error => {
                console.log(error)
            });
    }

    getAllDomains() {
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

        apis.getAllDomains()
            .then(response => {
                this.setState({
                    allDomains: response.data
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
        this.getAllDomains();
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
                            <th>Name</th>
                            <th>URL</th>
                            <th>isActive</th>
                            <th>isVisible</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            this.state.allDomains.map(domain => {
                                return (
                                    <tr key={domain.id}>
                                        <td>{domain.name}</td>
                                        <td>{domain.url}</td>
                                        <td>{domain.isActive === 1 ? "Hoạt động" : "Không hoạt động"}</td>
                                        <td>{domain.isVisible === 1 ? "Hiển thị" : "Không hiển thị"}</td>
                                        <td><Link
                                            className="btn btn-default"
                                            to={{
                                                pathname: "/admin/domains/editDomain",
                                                state: {
                                                    domainId: domain.id
                                                }
                                            }}>Edit</Link>
                                            <Link
                                                className="btn btn-danger" to="#" onClick={() => this.deleteDomain(domain.id)}>Delete</Link></td>
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

export default ReadDomains;