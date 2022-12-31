import React from 'react'
import './Login.css'
import lendsqr from '../asset/lendsqr-logo.svg'
import loginLogo from '../asset/login-logo.svg'
const Login= () => {
  return (
      // Login navigation menu
    <div className='container'>
        <div className='login-nav'>  
            <img src={lendsqr} alt={lendsqr} className='logo'/>
            <div className='empty'></div>
        </div>
        <div className='login'>
            <div className='login-content'>
                <img src={loginLogo} alt={loginLogo}  className='login-logo'/>
                    <div className='input-content'>
                       <div className='input-header'>
                           <h1>Welcome!</h1>
                           <span>Enter details to login.</span>
                       </div>
                       <form>
                             <input type='email' placeholder='Email'/>
                             <input type='password' placeholder='Password'/>
                             <a href='#' className='anchor'>FORGET PASSWORD ?</a>
                             <button className='btn'>LOG IN</button>
                       </form>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Login