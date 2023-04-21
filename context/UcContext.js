import React, { createContext, useState } from 'react'

export const  UpcomingMoviesContext = createContext(null);

const UcContext = (props) => {
    const [UpcomingMovies, setUpcomingMovies] = useState([]);
    
 
   return (
     <UpcomingMoviesContext.Provider value = {[UpcomingMovies, setUpcomingMovies]}>
         {props.children}
     </UpcomingMoviesContext.Provider>
   )
 }
 
 export default UcContext