import { trendingMoviesContext } from '@/context/Context'
import React, { useContext, useEffect } from 'react'
import axios from "axios";


const PopularMovies = () => {
   
    const [trendingMovies, settrendingMovies,PopularMovies, setPopularMovies] = useContext(trendingMoviesContext);
    const getTrendingMovies = async()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`);
        console.log(data.results);
        setPopularMovies(data.results);
        console.log(PopularMovies);
    }

    useEffect(()=>{
        getTrendingMovies();
    },[])

  return (
    <div className = "trendingMovie">
        <h3 className='tm_heading'>Popular</h3>
        <div className = "tm_cardholder">
        {PopularMovies.map((elem)=>(
             <div className="tm_cardholder-card" key = {elem.id}>
             <div className='tm_card-header' style = {{position:"relative"}}>
             <img src= {`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} className="card-img-top" alt="..."/>
             <div className = "tm_card_circle">
                <p>{Math.trunc(elem.vote_average)*10}%</p>
             </div>
             </div>
             <div className="card-body" style = {{marginTop:"10px"}}>
             <h5 className="card-title">{elem.original_title}</h5>
             <small>{elem.release_date}</small>
             </div>
         </div>)
        )}
         </div>
    </div>
  )
}

export default PopularMovies