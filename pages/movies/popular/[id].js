import React, { useContext, useEffect } from 'react'
import { trendingMoviesContext } from '@/context/Context'
import { useRouter } from 'next/router'

const movie = () => {
    const [trendingMovies, settrendingMovies,PopularMovies, setPopularMovies] = useContext(trendingMoviesContext); 
    const router = useRouter();
    const {id} = router.query;
    console.log(router);
   const GetSingleMovie = ()=>{
    const json = PopularMovies.filter((movie)=>{
            movie.id==id;
    })[0];
     console.log(json);
   }

    useEffect(()=>{
      GetSingleMovie()
    },[id])
  return (
    <div>movie</div>
  )
}

export default movie