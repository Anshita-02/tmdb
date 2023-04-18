import React, { createContext, useState } from 'react'

export const trendingMoviesContext = createContext(null);

const Context = (props) => {
   const [trendingMovies, settrendingMovies] = useState([]);
   const [popularMovies, setPopularMovies] = useState([]);

  return (
    <trendingMoviesContext.Provider value = {[trendingMovies, settrendingMovies,popularMovies, setPopularMovies]}>
        {props.children}
    </trendingMoviesContext.Provider>
  )
}

export default Context