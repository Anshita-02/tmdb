import React, { createContext, useState } from 'react'

export const NowPlayingMoviesContext = createContext(null);

const NpmContext = (props) => {
    const [NowPlayingMovies, setNowPlayingMovies] = useState([]);
    // console.log(NowPlayingMovies)
    const [TopRatedMovies, setTopRatedMovies] = useState([]);
  //  console.log(TopRatedMovies);
   return (
     <NowPlayingMoviesContext.Provider value = {[NowPlayingMovies, setNowPlayingMovies, TopRatedMovies, setTopRatedMovies]}>
         {props.children}
     </NowPlayingMoviesContext.Provider>
   )
 }
 
 export default NpmContext