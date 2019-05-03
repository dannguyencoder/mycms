
import React, { Component } from 'react';
import DropDown from '../../partials/user-component/dropdown_simple';
import { validateEmail } from '../../utils/validateForm';
import * as apis from '../../utils/apis'

import ComponentUpload from '../../partials/upload-image-partial/component-upload';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            role: '',
            avarta: '',
            isAdmin: false,
            isActive: false,
            roles: [],
            messageListErrorForm: [],
            user: {},
            actives: [],
            activeDefault: 1,
            roleDefault: {}
        };

        this.submit = this.submit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    validateForm = () => {
        const email = document.getElementById('email').value;
        const role = document.getElementsByName('role-select')[0].value;

        const admin = this.state.isAdmin
        const active = this.state.isActive
        const avarta_db = ''
        if (document.getElementById('avarta') != null) {
            const avarta = document.getElementById('avarta').getAttribute('src');
            const avarta_value_arr = avarta.split('/')
            const avarta_db = avarta_value_arr[4] + '_' + avarta_value_arr[5]
                + '_' + avarta_value_arr[6] + '_'
                + avarta_value_arr[7] + '_' + avarta_value_arr[8] + '_' + avarta_value_arr[9]
            this.setState({
                avarta: avarta_db
            })
        }


        // validateEmail(email)
        this.setState({
            messageListErrorForm: []
        })
        if (!validateEmail(email)) {
            this.setState({
                messageListErrorForm: this.state.messageListErrorForm.push('Email is not correct Type')
            })
            alert('Email is not correct format')
            return false
        } else {
            this.setState({
                email: email
            })
        }
        if (role === '') {
            const role = this.state.roleDefault.value
            this.setState({
                role: parseInt(role, 10)
            })
        } else {
            this.setState({
                role: parseInt(role, 10)
            })
        }

        return true
    }

    submit = (event) => {
        if (this.validateForm()) {
            //get formDAta from state=> send apis =>update
            const formData = new FormData()
            formData.append('email', this.state.email)
            formData.append('avarta', this.state.avarta)
            formData.append('active', this.state.isActive)
            formData.append('roleId', this.state.role)
            formData.append('userId',this.state.user.id)
            apis.updateUser(formData).then(result => { }).catch(error => { })
        } else {
            alert('form is not illegal ')
        }
    }
    handleInputChange(event) {
        const target = event.target;
        let value;
        if (target.type === 'checkbox') {
            if (target.checked) {
                value = 1;
            } else {
                value = 0;
            }
        } else {
            value = target.value;
        }
        const name = target.name;

        this.setState({
            [name]: value
        });

        setTimeout(() => { console.log(this.state) }, 2000)
    }

    getUserInformation = () => {
        const id = this.props.location.state.userID;
        return apis.getUserInformation(id).then(res => {

            this.setState({
                user: res.data,
                isActive: res.data.isActive,
                roleDefault: { label: res.data.Role.name, value: res.data.roleId }

            })


        }).catch(error => {
            console.log('ERROR: ' + error)
        })
    }
    componentWillReceiveProps(props) {

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
                                    <ComponentUpload avarta={this.state.user.avarta} />
                                </div>
                            </div>
                            <div className="form-group col-md-12">
                                <div className="col-md-2">
                                    <label>Active </label></div>
                                <div className="col-md-10">
                                    <input type='checkbox' name='isActive' id='isActive'
                                        checked={this.state.isActive} onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="form-group col-md-12">
                                <div className="col-md-2">
                                    <label>Role</label></div>
                                <div className="col-md-10">
                                    <DropDown data={this.state.roles} label={this.state.roleDefault.label} value={this.state.roleDefault.value} />
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