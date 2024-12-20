import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/Backg.jpeg'
import email_icon from '../Assets/email.jpeg'
import password_icon from '../Assets/Photo.jpeg'

const LoginSignup = () => {
    const [action,setAction] = useState("Sign up");
  return (
    <div className='container'>
     <div className='header'>
        <div className="text">{action}</div>
        <div className="underline"></div>
        </div>
    
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
               
               <input type="Name" placeholder='Name' />
           </div>}
            
            <div className="input">
                
                <input type="email" placeholder='Email id'/>
            </div>
            <div className="input">
                
                <input type="password" placeholder='Password' />
            </div>
            {action==="Sign up"?<div></div>:<div className="forgot-password">Lost password?<span>Click here!</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign up")}}>Sign up</div>
                <div className={action==="Sign up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
               

            </div>
        </div>

      
    </div>
  )
}

export default LoginSignup
