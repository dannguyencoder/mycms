import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../../actions/authAction';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Boilerplate</h1>
            <p>Tag line for app</p>
            <button className="button" onClick={startLogin}>Login</button>
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    token: state.token
});

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);