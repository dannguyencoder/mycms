import React from 'react';
import RoleForm from './RoleForm';
import * as apis from "../../../apis/apis";

class AddRole extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(roleData) {
        apis.addRole(roleData)
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
            <RoleForm isAdd={true} onSubmit={this.handleSubmit} />
        );
    }
}

export default AddRole;