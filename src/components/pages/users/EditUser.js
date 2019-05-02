
import React, { Component } from 'react';
import DropDown from '../../partials/user-component/dropdown_simple';
import { validateEmail } from '../../utils/validateForm';
import * as apis from '../../utils/apis'

import ComponentUpload from '../../partials/upload-image-partial/component-upload';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAdmin: true,
            isActive: true,
            roles: [],
            messageListErrorForm: [],
            user: {}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this)
    }

    validateForm = () => {
        const email = document.getElementById('email').value;
        const role = document.getElementsByName('role')[0].value;
        // validateEmail(email)
        this.setState({
            messageListErrorForm: []
        })
        if (!validateEmail(email)) {
            this.setState({
                messageListErrorForm: this.messageListErrorForm.push('Email is not correct Type')
            })
            alert('Email is not correct format')
            return false
        }
        if (role === '') {
            this.setState({
                messageListErrorForm: this.messageListErrorForm.push('You must select Role')
            })
            alert('You must select Role')
            return false
        }
        return true
    }

    submit = (event) => {
        if (this.validateForm()) {

        } else {
            alert('form is not illegal ')
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    getUserInformation = () => {
        const id = this.props.location.state.userID;
        return apis.getUserInformation(id).then(res => {
            this.setState({
                user: res.data
            })

        }).catch(error => {
            console.log('ERROR: ' + error)
        })
    }

    componentDidMount() {
        try {
            apis.getRoles(1).then(res => {
                this.setState({
                    roles: res.data.listRolesSelect
                })
            }).catch(e => {
                console.log('Error: ' + e)
            })
        } catch (error) {
            console.log('Error: ' + error)
        }

        try {
            this.getUserInformation()
        } catch (error) {
            console.log('Error: ' + error)
        }
        //get User Information

    }
    render() {
        return (
            <React.Fragment>

                <div className="panel panel-default">
                    <div className="panel-heading main-color-bg">
                        <h3 className="panel-title">Edit Page</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group col-md-12">
                                <div className="col-md-2">
                                    <label>Email: </label></div>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" placeholder="Email"
                                        id="email" name="email" defaultValue={this.state.user.email} />
                                </div>
                            </div>
                            <div className="form-group col-md-12">
                                <div className="col-md-2">
                                    <label>Avatar: </label></div>
                                <div className="col-md-10">
                                    {/* <input type="file" className="form-control-file" id="exampleFormControlFile1"></input> */}
                                    <ComponentUpload avarta={this.state.user.avarta} />
                                </div>
                            </div>
                            {/* <div className="form-group">
                                <label>Page Body</label>
                                <TextEditor/>

                            </div> */}
                            <div className="form-group col-md-12">
                                <div className="checkbox col-md-2">
                                    <label>

                                        {this.state.user.isAdmin === 1 ?
                                            <input id="admin" name="admin" type="checkbox" defaultChecked value={this.state.user.isAdmin} onChange={this.handleInputChange} /> :
                                            <input id="admin" name="admin" type="checkbox" value={this.state.user.isAdmin} onChange={this.handleInputChange} />}
                                        Admin
                                    </label>
                                </div>

                                <div className="checkbox col-md-10">
                                    <label>
                                        {this.state.user.isActive === 1 ?
                                            <input id="active" name="active" type="checkbox" defaultChecked value={this.state.user.isActive} onChange={this.handleInputChange} /> :
                                            <input id="active" name="active" type="checkbox" value={this.state.user.isActive} onChange={this.handleInputChange} />}
                                        Active
                                    </label>
                                </div>
                            </div>
                            {/* <div className="form-group col-md-12">
                                <div className="col-md-2">
                                    <label>PassWord: </label>
                                </div>
                                <div className="col-md-10">
                                    <input type="password" className="form-control" id="password" name="password" /></div>
                            </div>
                            <div className="form-group col-md-12">
                                <div className="col-md-2">
                                    <label>Confirm PassWord: </label>
                                </div>
                                <div className="col-md-10">
                                    <input type="password" className="form-control" id="re-password" name="re-password" /></div>
                            </div> */}
                            <div className="form-group col-md-12">
                                <div className="col-md-2">
                                    <label>Role</label></div>
                                <div className="col-md-10">

                                    <DropDown roles={this.state.roles} roleUser={this.state.user.roleId} />
                                    {/* <FormComponent /> */}
                                    {/* <select class="form-control">
                                        <option value="+47">Supper Admin</option>
                                        <option value="+46">Admin</option>
                                        <option value="+45">Post Member</option>
                                    </select> */}

                                </div>
                            </div>

                            <div className="col-md-12 btn-submit-style" >
                                <input type="button" className="btn btn-success" value="Submit"
                                    onClick={this.submit} />
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default EditUser;