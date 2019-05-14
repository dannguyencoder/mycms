import React, {Component} from 'react';
import DomainForm from './DomainForm';
import * as apis from "../../../apis/apis";

class EditDomain extends Component {

    constructor(props) {
        super(props);
        const currentDomainId = this.props.location.state.domainId;
        console.log("current domain id: ");
        console.log(this.props);
        this.state = {
            domainId: currentDomainId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(domainData) {
        apis.updateDomain(domainData)
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
            <DomainForm isEdit={true} domainId={this.state.domainId} onSubmit={this.handleSubmit} />
        );
    }
}

export default EditDomain;