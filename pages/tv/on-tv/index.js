import Navbar from '@/components/Navbar';
import { OnTvContext } from '@/context/Otv'
import React, { useContext, useEffect } from 'react'
import axios from 'axios';

const index = () => {
  const [OnTv, setOnTv,AiringTv, setAiringTv ] = useContext(OnTvContext);
  const getOnTv = async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`);
    console.log(data.results);
    await setOnTv(data.results)
   }

   useEffect(()=>{
    getOnTv();
   })

  return (
    <div>
        <Navbar/>
      <div className='popular_cardHolder'>
        {OnTv.map((elem)=>(
             <div className="popular_cardholder-card" key = {elem.id}>
             <div className='popular_card-header' style = {{position:"relative"}}>
             <img src= {`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} className="card-img-top" alt="..."/>
             <div className = "tm_card_circle">
                <p>{Math.trunc(elem.vote_average)*10}%</p>
             </div>
             </div>
             <div className="card-body" style = {{marginTop:"10px"}}>
             <h5 className="popular_card-title">{elem.name}</h5>
             <small>{elem.first_air_date.split("-").reverse().join("-")}</small>
             </div>
         </div>)
        )}
        </div>
    </div>
  )
}

export default index