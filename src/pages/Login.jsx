import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import {ReactComponent as Google} from '../assets/icons/google.svg';

import { connect } from 'react-redux';
import { loginUser } from '../store/actions/user';

function Login(props) {
   const  {loginUser,userData,hystory} = props;

//    function handleGoogleLogin(){
//     const googleLoginResponse = signInWithGoogle();
//     googleLoginResponse.then((response)=>{
//         console.log(response);
//         //history.push('/');
//     });
//   }
    if(userData !=null)
    {
        console.log(userData.displayName)  ;
         //history.push('/')
    }
     
    return (
        <div>

            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>

            <h1 className="h2">Login</h1>
            <p>Alege providerul cu care vrei sa te loghezi:</p>
            <button
             className="btn btn-outline-dark d-flex alin-items-center"
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
