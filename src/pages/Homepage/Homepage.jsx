import React from 'react'
import Searchbar from '../../components/Search/Search'
import Hero from '../../components/Hero/hero'
import Recipe from '../../components/Recipes/recipe'
import Footer from '../../components/Footer/footer'






export const Homepage = () => {
  return (
    <>
      {/* <Searchbar /> */}
      <Hero />
      <Recipe />
      <Footer /> 
    </>
  )
}
