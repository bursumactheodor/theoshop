import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import {ReactComponent as Google} from '../assets/icons/google.svg';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions/user';
import './Login.css'


function Login(props) {

    const navigate = useNavigate();
    const  {loginUser,userData} = props;


   if(userData !=null){
        navigate('/');
   }
                   
    return (
        <div className="login-page">

            <Link to="/">
                <img src={logo} alt="logo" className="mb-5"/>
            </Link>
            <h1 className="h2">Login</h1>
            <p>Alege providerul cu care vrei sa te loghezi:</p>
            <button
             className="btn btn-outline-dark d-flex align-items-center"
             onClick={ () => loginUser() }
            >
                 <Google className="w-50 mr-3"/> 
                <span className="text-nowrap">Logheaza-te cu Google</span>

            </button>
        </div>
    );
}

function mapStateToProps(state){
    return {
            userData : state.user.data
    }   
}

function mapDispatchToProps(dispatch){
    return {
        loginUser : () => { dispatch(loginUser())}
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
