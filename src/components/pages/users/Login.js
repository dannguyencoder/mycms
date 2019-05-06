import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import DropDown from '../../partials/user-component/dropdown_component'
import * as apis from '../../utils/apis'
import { validateEmail } from '../../utils/validateForm';
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
        this.handleInputChange = this.handleInputChange.bind(this)
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

    }

    loginUser = (event) => {
        const cookies = new Cookies();
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const loading_image = document.getElementById('loading-image')

        //validate Data
        if (!validateEmail(email)) {
            alert('Email is not correct Type')
            return false
        }
        if (password === '') {
            alert('password is required')
            return false
        }
        //hien thi loading
        loading_image.style.display = 'block'

        //Tao formdata
        const formData = this.state
        try {
            return apis.login(formData)
                .then(data => {
                    console.log('lay duoc data user')
                    console.log(data)
                    this.setState({
                        redirectPage: data.data.redirect,
                        token: data.data.token,
                        user_id: data.data.id,
                        email: data.data.email
                    })
                    //set user_id, token vao cookie
                    cookies.set('token', this.state.token, { path: '/' })
                    cookies.set('user_id', this.state.user_id, { path: '/' })
                    cookies.set('email', this.state.email, { path: '/' })
                    console.log('--------------Redirect : => ' + this.state.redirectPage)
                    if (this.state.redirectPage !== undefined) {
                        window.location.href = this.state.redirectPage
                    }
                    setTimeout(() => {
                        loading_image.style.display = 'none'
                    }, 1000);
                })
                .catch(error => {
                    alert('Sai Thông Tin Đăng Nhập')
                    loading_image.style.display = 'none'
                    console.log('Error: ' + error.statusCode)
                })
        } catch (error) {
            console.log('Error: ' + error)
        }
    }


    componentDidMount() {
        const formData = new FormData()
        try {
            return apis.getDomain(formData)
                .then(data => {
                    this.setState({
                        lstDomain: data.data
                    })
                })
                .catch(error => { console.log('Error: ' + error) })
        } catch (error) {
            console.log('Error: ' + error)
        }

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
                                    <input id="email" name="email" type="text" className="form-control" placeholder="Enter Email" onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input id="password" name="password" type="password" className="form-control" placeholder="Password" onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Domain</label>
                                    <DropDown data={this.state.lstDomain} callbackFn={this.callbackFn} onChange={this.handleInputChange} />
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