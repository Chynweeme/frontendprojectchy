import "../../input.css"
import React from 'react'
import "./Search.css"
import searchimg from "./search-img.webp";

const Searchbar = () => {
  return (


    <div className="container flex p-2">
            <form action="" className="searchBar p-3 flex align-center border border-brightRed rounded-lg ">
                <input type="text"  className="w-full text-lg" placeholder="What recipe are you looking for?" name="q"/>
                <button type="submit"><img src={searchimg} alt="" className="ml-3" /></button>
            </form>
    </div>
  )
}

export default Searchbar