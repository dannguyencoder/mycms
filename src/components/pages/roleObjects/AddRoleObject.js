import React from 'react';
import RoleObjectForm from './RoleObjectForm';
import * as apis from "../../../apis/apis";

class AddRoleObject extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(roleObjectData) {
        apis.addRoleObject(roleObjectData)
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
            <RoleObjectForm isAdd={true} onSubmit={this.handleSubmit} />
        );
    }
}

export default AddRoleObject;