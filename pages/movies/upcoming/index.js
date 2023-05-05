import Navbar from '@/components/Navbar'
import { UpcomingMoviesContext } from '@/context/UcContext'
import axios from "axios";
import Link from 'next/link';
import { useContext, useEffect } from 'react';

const index = () => {
  
    const [UpcomingMovies, setUpcomingMovies] = useContext(UpcomingMoviesContext)
    const getUpcomingMovies = async()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`);
        console.log(data.results);
        await setUpcomingMovies(data.results);
       console.log(UpcomingMovies);
    }

    useEffect(()=>{
        getUpcomingMovies();
    },[])

  return (
    <div>
        <Navbar/>
        <div className='popular_cardHolder'>
        {UpcomingMovies.map((elem)=>(
             <Link href = {`/movies/${elem.id}`}  className="popular_cardholder-card  movie_link" key = {elem.id}>
             <div className='popular_card-header' style = {{position:"relative"}}>
             <img src= {`https://image.tmdb.org/t/p/w500/${elem.poster_path}`} className="card-img-top" alt="..."/>
             <div className = "tm_card_circle">
                <p>{Math.trunc(elem.vote_average)*10}%</p>
             </div>
             </div>
             <div className="card-body" style = {{marginTop:"10px"}}>
             <h5 className="popular_card-title">{elem.original_title}</h5>
             <small style = {{color: "black"}}>{elem.release_date.split("-").reverse().join("-")}</small>
             </div>
         </Link>)
        )}
        </div>
    </div>
  )
}

export default index