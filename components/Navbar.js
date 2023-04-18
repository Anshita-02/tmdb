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
          <li>Popular</li>
          <li>Now Playing</li>
          <li>Upcoming</li>
          <li>Top Rated</li>
        </ul>
      </div>
     </div>
     <div className = "Navbar_tv">
      <h4 className = "Navbar_tv_heading">TV Shows</h4>
      <div className = "Navbar_tv-list">
        <ul>
          <li>Popular</li>
          <li>Airing Today</li>
          <li>On TV</li>
          <li>Top Rated</li>
        </ul>
      </div>
     </div>
    </div>
  )
}

export default Navbar