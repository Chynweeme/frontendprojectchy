import React from 'react'
import "./signup.css"
import mylogo from '../../logo.jpg'

export default function Login() {
  return (
    <main className='flex'>
      <div className='picture sm:hidden md:block md:w-6/12'>
        <h2 className='myname text-white font-bold'>Chynwe's <br />Recipes</h2>
      </div>

      <div className='login mx-auto'>
        {/* <form className='ml-0'> */}
          
          <img src={mylogo} alt="logo" className="mylogo" />
          <h3 className='font-bold text-xl'>Signup Here</h3>

          
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

          <button className='w-8/12'>Log In</button>

        {/* </form> */}
      </div>


      </main>
  )
}


        {/* <label for="username">Full name</label>
        <input type="text" placeholder="Your name here" id="username" /> */}

       

        {/* <div className='chooseRole'>Choose your role below:</div>

        <div className="role">
          <div className="sub-role">
            <input type="radio" className="radio"  id="radioB"/>
            <label for="radioB">Regular</label>
          </div>

          <div className="sub-role">
            <input type="radio" className="radio"  id='radioC'/>
            <label for="radioC">Professional</label>
          </div>
        </div> */}
