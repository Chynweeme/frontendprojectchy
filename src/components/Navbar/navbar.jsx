import "../../input.css"
import mylogo from "../../logo.jpg"


import React from 'react'

export default function Navbar(){
  return (
    <nav>
       {/* <!-- Flex container --> */}
        <div class="flex items-center p-3 justify-between">
            {/* <!-- Logo --> */}
            <div class="pt-2 flex items-center">
                <img src={mylogo} className="w-20 h-20" alt="logo" />
                <h1 className="text-2xl text-brightRed chy">Chy's Recipes</h1>
            </div>
            {/* <!-- Menu items --> */}
            <div class="hidden md:flex space-x-12">
              <a href="/home" class="hover:text-darkGrayishBlue">Home</a>
              <a href="/homepage/recipe" class="hover:text-darkGrayishBlue">Recipe</a>

              <a href="#" class="hover:text-darkGrayishBlue">Community</a>
            </div>
            {/* <!-- Button --> */}
               <div className="flex"> 
                <a href="/login" class="hidden md:block p-3 px-6 pt-2 text-brightRed font-medium rounded baseline hover:bg-brightRedLight">
                    Login
                </a>
                <a href="/signup" class="hidden md:block p-3 px-6 pt-2 text-brightRed font-medium rounded border border-brightRed baseline">Sign up</a>
                </div>
        </div>
    </nav>
  )
}


