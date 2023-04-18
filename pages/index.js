import Frontdisplay from '@/components/Frontdisplay'
import Navbar from '@/components/Navbar'
import PopularMovies from '@/components/PopularMovies'
import TrendingMovies from '@/components/TrendingMovies'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <Frontdisplay/>
      <TrendingMovies/>
      <PopularMovies/>
    </div>
  )
}

export default index