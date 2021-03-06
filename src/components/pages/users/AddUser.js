import React from 'react';
import UserForm from './UserForm';
import * as apis from "../../../apis/apis";

class AddUser extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(userData) {
        apis.addUser(userData)
            .then(response => {
                console.log("my response------------------");
                console.log(response);
                this.props.history.push("/admin/users/readUsers")
            })
            .catch(error => {
                console.log("my error----------------------");
                console.log(error);
                alert(error);
            });
    }


    render() {
        return (
            <UserForm isAdd={true} onSubmit={this.handleSubmit} />
        );
    }
}

export default AddUser;