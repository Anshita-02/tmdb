import React, { createContext, useState } from 'react'

export const OnTvContext = createContext(null);

const OtvContext = (props) => {
    const [OnTv, setOnTv] = useState([]);
    const [AiringTv, setAiringTv] = useState([]);
 
   return (
     <OnTvContext.Provider value = {[OnTv, setOnTv,AiringTv, setAiringTv ]}>
         {props.children}
     </OnTvContext.Provider>
   )
 }
 
 export default OtvContext