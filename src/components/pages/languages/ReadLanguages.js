import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import * as apis from "../../../apis/apis";

class ReadLanguages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allLanguages: []
        }
    }

    deleteLanguage(languageId) {
        apis.deleteLanguage(languageId)
            .then(response => {
                console.log(response);
                this.getAllLanguages();
            })
            .catch(error => {
                console.log(error)
            });
    }

    getAllLanguages() {
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

        apis.getAllLanguages()
            .then(response => {
                console.log("response language data");
                console.log(response);
                this.setState({
                    allLanguages: response.data
                });
            })
            .catch((error) => {
                console.log("error-------------")
                console.log(error);
                this.setState({
                    allLanguages: []
                })
            });

    };

    componentDidMount() {
        this.getAllLanguages();
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading main-color-bg">
                    <h3 className="panel-title">Languages</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <input className="form-control" type="text"
                                   placeholder="Filter Languages..."/>
                        </div>
                    </div>
                    <br/>
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>Language name</th>
                            <th>Language code</th>
                            <th>Domain</th>
                            <th>isActive</th>
                            <th>isVisible</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            this.state.allLanguages.map(language => {
                                return (
                                    <tr key={language.id}>
                                        <td>{language.name}</td>
                                        <td>{language.code}</td>
                                        <td>{language.domainName}</td>
                                        <td>{language.isActive === 1 ? "Hoạt động" : "Không hoạt động"}</td>
                                        <td>{language.isVisible === 1 ? "Hiển thị" : "Không hiển thị"}</td>
                                        <td><Link
                                            className="btn btn-default"
                                            to={{
                                                pathname: "/admin/languages/editLanguage",
                                                state: {
                                                    languageId: language.id
                                                }
                                            }}>Edit</Link>
                                            <Link
                                                className="btn btn-danger" to="#" onClick={() => this.deleteLanguage(language.id)}>Delete</Link></td>
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

export default ReadLanguages;