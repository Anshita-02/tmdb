import React, { createContext, useState } from 'react'

export const NowPlayingMoviesContext = createContext(null);

const NpmContext = (props) => {
    const [NowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [TopRatedMovies, setTopRatedMovies] = useState([]);
 
   return (
     <NowPlayingMoviesContext.Provider value = {[NowPlayingMovies, setNowPlayingMovies, TopRatedMovies, setTopRatedMovies]}>
         {props.children}
     </NowPlayingMoviesContext.Provider>
   )
 }
 
 export default NpmContext