import React, {Component} from 'react';
import RoleObjectForm from './RoleObjectForm';
import * as apis from "../../../apis/apis";

class EditRoleObject extends Component {

    constructor(props) {
        super(props);
        const currentRoleObjectId = this.props.location.state.roleObjectId;
        console.log("current role-object id: ");
        console.log(this.props);
        this.state = {
            roleObjectId: currentRoleObjectId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(roleObjectData) {
        apis.updateRoleObject(roleObjectData)
            .then(response => {
                console.log("my response------------------");
                console.log(response);
                this.props.history.push("/admin/roleObjects/readRoleObjects")
            })
            .catch(error => {
                console.log("my error----------------------");
                console.log(error);
                alert(error);
            });
    }


    render() {
        return (
            <RoleObjectForm isEdit={true} roleObjectId={this.state.roleObjectId} onSubmit={this.handleSubmit} />
        );
    }
}

export default EditRoleObject;