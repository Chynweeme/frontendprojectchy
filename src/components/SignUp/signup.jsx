import React from 'react'

import "./signup.css"

export default function SignUp() {
  return (
    <main>
       <div className='picture'></div>   
       <div className='login'>
          
      <form>

        <div className='formlogo'></div>
        <h3>Sign up</h3>

        <label for="username">Full name</label>
        <input type="text" placeholder="Your name here" id="username" />

        <label for="username">Email</label>
        <input type="email" placeholder="Email" id="username" />


        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <div className='chooseRole'>Choose your role below:</div>

        <div className="role">
          <div className="sub-role">
            <input type="radio" className="radio"  id="radioB"/>
            <label for="radioB">Regular</label>
          </div>

          <div className="sub-role">
            <input type="radio" className="radio"  id='radioC'/>
            <label for="radioC">Professional</label>
          </div>
        </div>


        <button>SignUp</button>
        
        </form>
       </div> 

      </main>
  )
}
