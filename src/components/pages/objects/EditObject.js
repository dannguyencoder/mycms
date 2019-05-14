import React, {Component} from 'react';
import ObjectForm from './ObjectForm';
import * as apis from "../../../apis/apis";

class EditObject extends Component {

    constructor(props) {
        super(props);
        const currentObjectId = this.props.location.state.objectId;
        console.log("current object id: ");
        console.log(this.props);
        this.state = {
            objectId: currentObjectId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(objectData) {
        apis.updateObject(objectData)
            .then(response => {
                console.log("my response------------------");
                console.log(response);
                this.props.history.push("/admin/objects/readObjects")
            })
            .catch(error => {
                console.log("my error----------------------");
                console.log(error);
                alert(error);
            });
    }


    render() {
        return (
            <ObjectForm isEdit={true} objectId={this.state.objectId} onSubmit={this.handleSubmit} />
        );
    }
}

export default EditObject;