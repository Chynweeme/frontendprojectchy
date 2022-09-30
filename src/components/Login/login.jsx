import React from 'react'

import "./login.css"

export default function Login() {
  return (
    <main>
       <div className='picture'>
        <div className='myname'> Chynwe's <br /> Recipe App</div>
        </div>   
       <div className='login'>
        
            <form>
            
              <div className='formlogo'></div>
              <h3>Login Here</h3>

              <label for="username">Email</label>
              <input type="email" placeholder="Email" id="username" />

              <label for="password">Password</label>
              <input type="password" placeholder="Password" id="password" />

              <div className='rememberMe'>
              <input type="checkbox"  id='rememberMe'/>
              <label for="rememberMe">Remember Me</label>
              <a href="#">Forgot password?</a>
              </div>

              <button>Log In</button>
              
            </form>
        </div> 

      </main>
  )
}
