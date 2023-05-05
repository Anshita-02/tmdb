import Navbar from '@/components/Navbar'
import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { PopularTvContext } from '@/context/TvPopular'
import Link from 'next/link'


const index = () => {

  const [PopularTv, setPopularTv,TopRatedTv, setTopRatedTv ] = useContext(PopularTvContext);
  const getTopRatedTv = async()=>{
   const {data} = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`);
   console.log(data.results);
   await setTopRatedTv(data.results)
  }

  useEffect(()=>{
    getTopRatedTv()
   })
  return (
    <div>
         <Navbar/>
      <div className='popular_cardHolder'>
        {TopRatedTv.map((elem)=>(
             <Link href = {`/tv/${elem.id}`} className="popular_cardholder-card movie_link" key = {elem.id}>
             <div className='popular_card-header' style = {{position:"relative"}}>
             <img src= {`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} className="card-img-top" alt="..."/>
             <div className = "tm_card_circle">
                <p>{Math.trunc(elem.vote_average)*10}%</p>
             </div>
             </div>
             <div className="card-body" style = {{marginTop:"10px"}}>
             <h5 className="popular_card-title">{elem.name}</h5>
             <small style = {{color: "black"}} >{elem.first_air_date.split("-").reverse().join("-")}</small>
             </div>
         </Link>)
        )}
        </div>
    </div>
  )
}

export default index