
import React, { Component } from 'react';
import TextEditor from '../../utils/TextEditor';
import FormComponent from "../../partials/form_component";
class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAdmin: true,
            isActive: true,
            roles: [
                'Supper Admin',
                'Admin',
                'Post Member'
            ]
        };


        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
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
                                        defaultValue="" />
                                </div>
                            </div>
                            <div className="form-group col-md-12">
                                <div className="col-md-2">
                                    <label>Avatar</label></div>
                                <div className="col-md-10">
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                                </div>
                            </div>
                            {/* <div className="form-group">
                                <label>Page Body</label>
                                <TextEditor/>

                            </div> */}
                            <div className="form-group col-md-12">
                                <div className="checkbox col-md-2">
                                    <label>
                                        <input name="isActive"
                                            type="checkbox"
                                            checked={this.state.isActive}
                                            onChange={this.handleInputChange} /> Active
                                    </label>
                                </div>

                                <div className="checkbox col-md-10">
                                    <label>
                                        <input name="isAdmin"
                                            type="checkbox"
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
                                    <input type="password" className="form-control" /></div>
                            </div>
                            <div className="form-group col-md-12">
                                <div className="col-md-2">
                                    <label>PassWord: </label>
                                </div>
                                <div className="col-md-10">
                                    <input type="password" className="form-control" /></div>
                            </div>
                            <div className="form-group col-md-12">
                                <div className="col-md-2">
                                    <label>Role</label></div>
                                <div className="col-md-10">

                                   <FormComponent />
                                    {/* <select class="form-control">
                                        <option value="+47">Supper Admin</option>
                                        <option value="+46">Admin</option>
                                        <option value="+45">Post Member</option>
                                    </select> */}

                                </div>
                            </div>

                            <div className="col-md-12 btn-submit-style" >
                                <input type="submit" className="btn btn-success" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default EditUser;