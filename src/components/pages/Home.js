import React, { Component } from 'react';
import {connect} from 'react-redux';

import Cookies from 'universal-cookie';

class Home extends Component {
    constructor(props) {
        super(props);
        const cookies = new Cookies();
        this.state = {
            email: cookies.get('email'),
            user_id: cookies.get('user_id'),
            token: cookies.get('token')

        };

        // this.loginUser = this.loginUser.bind(this);
    }
    componentWillMount() {
        //fetch token len server
        //fetch data roles
        // const cookies = new Cookies();
        // var data = new FormData()
        // this.setState({ uploading: true })

        // data.append('token', cookies.get('token'))

        // const url = "http://localhost:3002/user/checkLogin";
        // const checkLogin = async url => {
        //     try {
        //         console.log(data.token)
        //         const response = await fetch(url, {
        //             method: 'POST',
        //             body: data,

        //         });
        //         const json = await response.json();
        //         console.log(json)
        //         this.setState({
        //             login: true

        //         })
        //         console.log(this.state.login)
        //     } catch (error) {
        //         console.log(error)
        //         // window.location.href = '/login'
        //     }
        // };
        // checkLogin(url);
    }
    render() {
        // console.log(Math.random())
        return (
            <React.Fragment>

                <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Welcome to Admin Area, {this.props.user ? this.props.user.username : 'Anonymous'}</h1>


            </React.Fragment >
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.auth.user
});

export default connect(mapStateToProps)(Home);