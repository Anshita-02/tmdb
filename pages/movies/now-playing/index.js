import { NowPlayingMoviesContext } from '@/context/NpmContext';
import React, { useContext, useEffect } from 'react'
import axios from "axios";
import Navbar from '@/components/Navbar';

const index = () => {
    const [NowPlayingMovies, setNowPlayingMovies,TopRatedMovies, setTopRatedMovies] = useContext(NowPlayingMoviesContext)
    const getNowPlayingMovies = async()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`);
        console.log(data.results);
        await setNowPlayingMovies(data.results);
       console.log(NowPlayingMovies);
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])
  return (
    <div>
           <Navbar/>
        <div className='popular_cardHolder'>
        {NowPlayingMovies.map((elem)=>(
             <div className="popular_cardholder-card" key = {elem.id}>
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
         </div>)
        )}
        </div>
    </div>
  )
}

export default index