import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import DropDown from '../../partials/user-component/dropdown_component'

import { validateEmail } from '../../elements/validateForm';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            token: '',
            lstDomain: []

        };
        this.callbackFn = this.callbackFn.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser = async (event) => {
        const cookies = new Cookies();
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        if (!validateEmail(email)) {
            alert('Email is not correct Type')
            return false
        }
        if (password === '') {
            alert('password is required')
            return false
        }
        const loading_image = document.getElementById('loading-image')
        loading_image.style.display = 'block'
        //fetch data roles
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)
        const url = "http://localhost:3002/user/login";
        const login = async url => {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData,
                });

                const data = await response.json();
                if (data.errorMessage != undefined) {
                    alert(data.errorMessage)
                } else {
                    this.setState({
                        redirectPage: data.redirect,
                        token: data.token,
                        user_id: data.id,
                        email: data.email
                    })
                    //set user_id, token vao cookie
                    cookies.set('token', this.state.token, { path: '/' })
                    cookies.set('user_id', this.state.user_id, { path: '/' })
                    cookies.set('email', this.state.email, { path: '/' })
                    if (this.state.redirectPage != undefined) {
                        window.location.href = this.state.redirectPage
                    }
                }

                await setTimeout(function () { loading_image.style.display = 'none' }, 1000);

            } catch (error) {
                console.log(error);
                alert(error)
                alert('not found user')
                this.setState({
                    token: ''

                })
            }
        };
        await login(url)
    }

    componentWillMount() {
        const getDomains = async (event) => {
            const formData = new FormData()
            // formData.append('email', email)
            const url = 'http://localhost:3002/domain/getDomains'
            const lstDomain = async url => {
                try {
                    console.log('get Domains')
                    const response = await fetch(url, {
                        method: 'POST',
                        body: formData,
                    });

                    const data = await response.json();
                    console.log(data)
                    if (data.errorMessage != undefined) {
                        alert(data.errorMessage)
                    } else {
                        this.setState({
                            lstDomain: data
                        })
                    }
                } catch (error) {
                    console.log(error);
                    this.setState({
                        lstDomain: []
                    })
                }
            };
            await lstDomain(url)
        }
        getDomains();
    }
    callbackFn(res) {
        alert(res)
    }
    render() {

        return (


            <section id="main">
                <div className="container">

                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <form id="login" action="index.html" className="well">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input id="email" name="email" type="text" className="form-control" placeholder="Enter Email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input id="password" name="password" type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label>Domain</label>
                                    <DropDown data={this.state.lstDomain} callbackFn={this.callbackFn}/>
                                </div>
                                <button type="button" onClick={this.loginUser} className="btn btn-default btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                    <div className="img-loading" id="loading-image" >
                        <img src="/images/ajax-loader.gif" className="loading-image" />
                    </div>
                </div>

            </section >
        );
    }
}

export default Login;