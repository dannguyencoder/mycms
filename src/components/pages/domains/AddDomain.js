import React, { Component } from 'react';
// import TextEditor from "../../utils/TextEditor";

class AddDomain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postTitle: '',
            postCategory: 0,
            imageURL: '',
            languageId: 0,
            outputHTML: '',
            isActive: 1,
            isVisible: 1,
            metaTags: '',
            metaDesc: '',
            domainId: 0,
            contentId: 0
        };

        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleComponentChange = this.handleComponentChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleComponentChange(componentData) {
        // console.log("componentData-----");
        // console.log(componentData);
        // console.log("---total State");
        // console.log(this.state);
        this.setState({ ...this.state, ...componentData });
        // console.log("final state: ")
        // console.log(this.state);
    }
    render() {
        return (
            <React.Fragment>
                <div className="panel panel-default">
                    <div className="panel-heading main-color-bg">
                        <h3 className="panel-title">Add New Domain</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Domain Name</label>
                                <input type="text" className="form-control" placeholder="Domain Name"
                                    defaultValue="example Domain" />
                            </div>

                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" defaultChecked /> Active
                                </label>
                            </div>
                            <div className="form-group">
                                <label>Domain Url</label>
                                <input type="text" className="form-control" placeholder="Url Of Domain"
                                    defaultValue="tag1, tag2" />
                            </div>
                            <div className="form-group">
                                <label>Meta Description</label>
                                <input type="text" className="form-control" placeholder="Add Meta Description..."
                                    defaultValue="  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et " />
                            </div>
                            <input type="submit" className="btn btn-default" value="Submit" />
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AddDomain;