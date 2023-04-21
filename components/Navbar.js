import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar_nav '>
     <h1 className='Navbar_logo mr-4'>TMDB</h1>
     <div className='Navbar_togglebtn'></div>
     <div className = "Navbar_movie">
      <h4 className = "Navbar_movie_heading">Movies</h4>
      <div className = "Navbar_movie-list">
        <ul>
          <Link href = "/movies/popular">Popular</Link>
          <Link href = "/movies/now-playing">Now Playing</Link>
          <Link href = "/movies/upcoming">Upcoming</Link>
          <Link href = "/movies/top-rated">Top Rated</Link>
        </ul>
      </div>
     </div>
     <div className = "Navbar_tv">
      <h4 className = "Navbar_tv_heading">TV Shows</h4>
      <div className = "Navbar_tv-list">
        <ul>
          <Link href = "/tv/popular">Popular</Link>
          <Link href = "/tv/airing-today">Airing Today</Link>
          <Link href = "/tv/on-tv">On TV</Link>
          <Link href = "/tv/top-rated">Top Rated</Link>
        </ul>
      </div>
     </div>
    </div>
  )
}

export default Navbar