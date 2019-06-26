import React, {Component} from 'react';
import RoleForm from './RoleForm';
import * as apis from "../../../apis/apis";

class EditRole extends Component {

    constructor(props) {
        super(props);
        const currentRoleId = this.props.location.state.roleId;
        console.log("current role id: " + currentRoleId);
        console.log(this.props);
        this.state = {
            roleId: currentRoleId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(roleData) {
        apis.updateRole(roleData)
            .then(response => {
                console.log("my response------------------");
                console.log(response);
                this.props.history.push("/admin/roles/readRoles")
            })
            .catch(error => {
                console.log("my error----------------------");
                console.log(error);
                alert(error);
            });
    }


    render() {
        return (
            <RoleForm isEdit={true} roleId={this.state.roleId} onSubmit={this.handleSubmit} />
        );
    }
}

export default EditRole;