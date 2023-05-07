import { trendingMoviesContext } from '@/context/Context'
import React, { useContext, useEffect } from 'react'
import axios from "axios";


const TrendingMovies = () => {

    const [trendingMovies, settrendingMovies,PopularMovies, setPopularMovies] = useContext(trendingMoviesContext);
    const getTrendingMovies = async()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`);
        console.log(data.results);
        settrendingMovies(data.results);
        console.log(trendingMovies);
    }

    useEffect(()=>{
        getTrendingMovies();
    },[])

  return (
    <div className = "trendingMovie">
        <h3 className='tm_heading'>Trending Movies</h3>
        <div className = "tm_cardholder">
        {trendingMovies.map((elem)=>(
             <div className="tm_cardholder-card" key = {elem.id}>
             <div className='tm_card-header' style = {{position:"relative"}}>
             <img src= {`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} className="card-img-top" alt="..."/>
             <div className = "tm_card_circle">
                <p>{Math.trunc(elem.vote_average)*10}%</p>
             </div>
             </div>
             <div className="card-body" style = {{marginTop:"10px"}}>
             <h5 className="card-title">{elem.original_title}</h5>
             <small className='date'>{elem.release_date}</small>
             </div>
         </div>)
        )}
         </div>
       
        {/* <ul>
           {trendingMovies.map((elem,index)=>(
                <li key = {index} className= "list-group-item w-50 mb-3 d-flex justify-content-between fw-4">
                {elem.original_title}
                </li> 
     ))}
        </ul> */}
    </div>
  )
}

export default TrendingMovies