
import React, { Component } from 'react';
import DropDown from '../../partials/dropdown_simple';
import { validateEmail } from '../../utils/validateForm';

import ComponentUpload from '../../partials/upload-image-partial/component-upload';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAdmin: true,
            isActive: true,
            roles: [],
            messageListErrorForm: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.postData = this.postData.bind(this)
    }


    postData = (event) => {
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

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    componentWillMount() {
        //fetch data roles
        var data = new FormData()
        this.setState({ uploading: true })

        data.append('user_id', '1')
        const url = "http://localhost:3002/user/getRoles";
        const getData = async url => {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    body: data,

                });
                const json = await response.json();
                this.setState({
                    roles: json.listRolesSelect

                })
                console.log(this.state.roles)
            } catch (error) {
                console.log(error);
            }
        };
        getData(url);

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
                                        id="email" name="email" defaultValue="" />
                                </div>
                            </div>
                            <div className="form-group col-md-12">
                                <div className="col-md-2">
                                    <label>Avatar: </label></div>
                                <div className="col-md-10">
                                    {/* <input type="file" className="form-control-file" id="exampleFormControlFile1"></input> */}
                                    <ComponentUpload />
                                </div>
                            </div>
                            {/* <div className="form-group">
                                <label>Page Body</label>
                                <TextEditor/>

                            </div> */}
                            <div className="form-group col-md-12">
                                <div className="checkbox col-md-2">
                                    <label>
                                        <input name="isActive" id="active" name="active"
                                            type="checkbox"
                                            checked={this.state.isActive}
                                            onChange={this.handleInputChange} /> Active
                                    </label>
                                </div>

                                <div className="checkbox col-md-10">
                                    <label>
                                        <input name="isAdmin"
                                            type="checkbox" id="admin" name="admin"
                                            checked={this.state.isAdmin}
                                            onChange={this.handleInputChange} /> Admin
                                    </label>
                                </div>
                            </div>
                            <div className="form-group col-md-12">
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
                            </div>
                            <div className="form-group col-md-12">
                                <div className="col-md-2">
                                    <label>Role</label></div>
                                <div className="col-md-10">

                                    <DropDown roles={this.state.roles} />
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
                                    onClick={this.postData} />
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default EditUser;