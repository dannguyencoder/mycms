import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import * as apis from '../../utils/apis';

class ReadCategories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allCategories: []
        }
    }

    getAllCategories() {
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
        apis.getAllCategories()
            .then(response => {
                console.log(typeof (response))
                // if (!response.data) {
                //     this.setState({
                //         allCategories: []
                //     })
                //     return;
                // }
                this.setState({
                    allCategories: response.data
                });
            })
            .catch((error) => {
                console.log("error-------------")
                console.log(error);
                this.setState({
                    allCategories: []
                })
            });


    };

    componentDidMount() {
        this.getAllCategories();
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
                            <th>Category Name</th>
                            <th>Friendly URL</th>
                            <th>Is Active</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            this.state.allCategories.map(category => {
                                return (
                                    <tr key={category.id}>
                                        <td>{category.name}</td>
                                        <td>mjohnson@gmail.com</td>
                                        <td>Dec 15, 2016</td>
                                        <td><Link className="btn btn-default" to="/admin/users/editUser">Edit</Link>
                                            <Link
                                                className="btn btn-danger" to="#">Delete</Link></td>
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

export default ReadCategories;