import React, { Component } from 'react';

import { validateEmail } from '../../components/utils/validateForm';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            token: ''

        };
        this.loginUser = this.loginUser.bind(this);
    }
    loginUser = (event) => {
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
        var data = new FormData()
        data.append('email', email)
        data.append('password', password)
        const url = "http://localhost:3002/user/login";
        const login = async url => {
            try {
                await fetch(url, {
                    method: 'POST',
                    body: data,

                }).then((json) => {
                    const data = json.json();
                    this.setState({
                        token: data.token

                    })

                }).catch(error => {
                    alert(error)
                    alert('not found user')
                    this.setState({
                        token: ''

                    })

                });


                console.log(loading_image)
                setTimeout(function () { loading_image.style.display = 'none' }, 1000);

            } catch (error) {
                console.log(error);
            }
        };
        login(url);
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