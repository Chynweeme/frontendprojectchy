import "../../input.css"
import React from 'react'
import "./Search.css"
import searchimg from "./search-img.webp";

const Searchbar = () => {
  return (
    // <div>
    //     <form className="relative container mx-auto mt-0 ">
    //         <input type="text" placeholder="What recipe are you looking for?" className="p-6  h-10 border border-brightRed rounded "/>
    //         <button type="submit">Search</button>
    //     </form>
    // </div>

    <div className="container mx-auto flex justify-center">
            <form action="" className="searchBar p-3  flex align-center border border-brightRed rounded-lg ">
                <input type="text" placeholder="What recipe are you looking for?" name="q"/>
                <button type="submit"><img src={searchimg} alt="" /></button>
            </form>
    </div>
  )
}

export default Searchbar