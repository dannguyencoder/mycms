import React from 'react';
import DomainForm from './DomainForm';
import * as apis from "../../../apis/apis";

class AddDomain extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(domainData) {
        apis.addDomain(domainData)
            .then(response => {
                console.log("my response------------------");
                console.log(response);
                this.props.history.push("/admin/domains/readDomains")
            })
            .catch(error => {
                console.log("my error----------------------");
                console.log(error);
                alert(error);
            });
    }


    render() {
        return (
            <DomainForm isAdd={true} onSubmit={this.handleSubmit} />
        );
    }
}

export default AddDomain;