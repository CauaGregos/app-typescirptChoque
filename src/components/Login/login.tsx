import React, { useEffect, useState } from 'react';
import './login.css';
import logo from '../../images/logoChoque.png';
import {AiOutlineArrowRight} from 'react-icons/ai'
function Login() {
  useEffect(() => {

  },[]);

  return (
    <div className="Container-login">
        <img id='logoLogin' src={logo} alt="" />
        <div id='formLogin'>
            <h1 id='titleLogin'>Login</h1>
            <input type="number" placeholder='Digite seu id...'/>
            <input type="number" placeholder='Digite sua senha...'/>
            <button className='buttonLogin'><AiOutlineArrowRight style={{marginTop:3}}/></button> 
        </div>
    </div>
  );
}

export default Login;
