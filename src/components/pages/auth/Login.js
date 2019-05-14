import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';


import * as apis from "../../../apis/apis";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            domainId: 1,
            allDomains: []
        }
    }

    getAllDomains() {
        apis.getAllDomains()
            .then(response => {
                console.log("domains-----------");
                console.log(response);
                const allDomains = response.data;
                if (allDomains.length > 0) {
                    this.setState({
                        allDomains: allDomains,
                        domainId: allDomains[0].id
                    })
                }
            })
            .catch(error => {
                console.log("error getting domains----------");
                console.log(error);
                this.setState({
                    allDomains: []
                });
            });
    }

    componentDidMount() {
        this.getAllDomains()
    }

    handleInputChange(event) {
        const target = event.target;
        console.log(target.checked);
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
        // alert(name);
        this.setState({
            [name]: value
        });
        setTimeout(() => {
            console.log("current state");
            console.log(this.state);
        }, 2000)
    }

    handleSubmit(event) {
        event.preventDefault();

        const loginData = this.state;

        delete loginData.allDomains;

        console.log("login submit data");
        console.log(loginData);

        apis.login(loginData)
            .then((response) => {
                console.log("success in getting response login");
                console.log(response);
                if (response.status === 200) {
                    const token = response.data.token;
                    console.log("token from server");
                    console.log(token);
                    // set token to cookie
                    if (token) {
                        this.props.login(token);

                        // set token to Cookie
                        const cookies = new Cookies();
                        cookies.set('token', token);
                        console.log("cookies token set: ");
                        console.log(cookies.get('token'));

                        this.props.history.push("/admin/home");
                        setTimeout(() => {
                            console.log("current state from store");
                            console.log(this.state.isLoggedIn);
                        }, 2000)
                    } else {
                        console.error("Error: Token is empty");
                    }

                }
            })
            .catch((error) => {
                console.log("Error login-----");
                console.log(error);
            })
    }


    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input name="username" value={this.state.username} onChange={this.handleInputChange} type="text" className="form-control" id="username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input name="password" value={this.state.password} onChange={this.handleInputChange} type="password" className="form-control" id="password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="sel1">Domain</label>
                    <select name="domainId" value={this.state.domainId} onChange={this.handleInputChange} className="form-control" id="sel1">
                        {/*<option>1</option>*/}
                        {/*<option>2</option>*/}
                        {/*<option>3</option>*/}
                        {/*<option>4</option>*/}
                        {
                            this.state.allDomains.map(domain => (
                                <option key={domain.id} value={domain.id}>{domain.name}</option>
                            ))
                        }
                    </select>
                </div>
                {/*<div className="checkbox">*/}
                    {/*<label><input type="checkbox"/> Remember me</label>*/}
                {/*</div>*/}
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    token: state.token
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (token) => dispatch({type: 'LOGIN', token: token})
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);