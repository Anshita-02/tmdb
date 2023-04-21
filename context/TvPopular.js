import React, { createContext, useState } from 'react'

export const PopularTvContext = createContext(null);

const PtvContext = (props) => {
    const [PopularTv, setPopularTv] = useState([]);
    const [TopRatedTv, setTopRatedTv] = useState([]);
 
   return (
     <PopularTvContext.Provider value = {[PopularTv, setPopularTv,TopRatedTv, setTopRatedTv]}>
         {props.children}
     </PopularTvContext.Provider>
   )
 }
 
 export default PtvContext