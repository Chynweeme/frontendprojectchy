import React from 'react'
import "./login.css"
import mylogo from '../../logo.jpg'


export default function Login() {
  return (
    <main className='flex'>
      <div className='login-picture sm:hidden md:block md:w-6/12'>
        <h2 className='myname text-white font-bold'>Chynwe's <br />Recipes</h2>
      </div>

      <div className='my-login mx-auto'>
        {/* <form className='ml-0'> */}
          
          <img src={mylogo} alt="logo" className="mylogo h-full" />
          <div className='login-wrapper'>
          <h3 className='font-bold text-xl'>Login Here</h3>

          <label for="username">Email</label>
          <input type="email" placeholder="Email" id="username" />

          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password" />

          <div className='rememberMe'>
              <input type="checkbox"  id='rememberMe'/>
              <label for="rememberMe">Remember Me</label>
              <a href="#">Forgot password?</a>
          </div>

          <a href="/home"><button className='w-full'>Log In</button></a>
          </div>
          

        {/* </form> */}
      </div>


      </main>
  )
}
