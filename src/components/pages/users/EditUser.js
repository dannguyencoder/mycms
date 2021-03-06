import React, {Component} from 'react';
import UserForm from './UserForm';
import * as apis from "../../../apis/apis";

class EditUser extends Component {

    constructor(props) {
        super(props);
        const currentUserId = this.props.location.state.userId;
        console.log("current user id: ");
        console.log(this.props);
        this.state = {
            userId: currentUserId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(userData) {
        apis.updateUser(userData)
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
            <UserForm isEdit={true} userId={this.state.userId} onSubmit={this.handleSubmit} />
        );
    }
}

export default EditUser;