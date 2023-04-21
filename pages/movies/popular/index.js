import Navbar from '@/components/Navbar'
import React, { useContext, useEffect } from 'react'
import { trendingMoviesContext } from '@/context/Context'
import Link from 'next/link';

const index = () => {

 const [trendingMovies, settrendingMovies,PopularMovies, setPopularMovies] = useContext(trendingMoviesContext); 
 
 useEffect(()=>{
    console.log(PopularMovies);
 },[]) 
 return (
    <div>
        <Navbar/>
        <div className='popular_cardHolder'>
        {PopularMovies.map((elem)=>(
             <Link  href = {`/movies/popular/${elem.id}`} className="popular_cardholder-card" key = {elem.id}>
             <div className='popular_card-header' style = {{position:"relative"}}>
             <img src= {`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} className="card-img-top" alt="..."/>
             <div className = "tm_card_circle">
                <p>{Math.trunc(elem.vote_average)*10}%</p>
             </div>
             </div>
             <div className="card-body" style = {{marginTop:"10px"}}>
             <h5 className="popular_card-title">{elem.original_title}</h5>
             <small>{elem.release_date}</small>
             </div>
         </Link>)
        )}
        </div>
    </div>
  )
}

export default index