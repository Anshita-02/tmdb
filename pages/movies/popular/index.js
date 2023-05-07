import Navbar from "@/components/Navbar";
import React, { useContext, useEffect, useState } from "react";
import { trendingMoviesContext } from "@/context/Context";
import axios from "axios";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

const index = () => {
  const [trendingMovies, settrendingMovies, PopularMovies, setPopularMovies] =
    useContext(trendingMoviesContext);
    const [totalLength, settotalLength] = useState();
  const [curPage, setcurPage] = useState(1);

  const getPopularMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`
    );
    // console.log(data.results);
     setPopularMovies(data.results);
    await data &&  settotalLength(data.total_results);
    setcurPage(curPage+1)
  };

  console.log(totalLength);

  const fetchMoreData = async()=>{
    console.log(`https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=${curPage}`);
    axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=${curPage}`
    )
    .then((data)=>{
      console.log(data);
      const nowcurmovies =  [...PopularMovies, ...data.data.results];
      try {
         setPopularMovies([...PopularMovies, ...data.data.results]);
         setcurPage(curPage+1);
      } catch (error) {
        console.log(error)
      }
      console.log(nowcurmovies);
      console.log(PopularMovies);
    })
      
  }
  useEffect(() => {
    if (PopularMovies.length === 0) {
      getPopularMovies();
    }
  }, []);
  console.log(PopularMovies);
  return (
    <div>
      <Navbar />
      <div className="popular_cardHolder">
      <InfiniteScroll
          dataLength = {curPage*20}
          next={fetchMoreData}
          hasMore={PopularMovies.length< totalLength?true:false}
          loader={<h4 className="Loader">Loading...</h4>}
          className="popular_cardHolder"
        >
        {PopularMovies?
        PopularMovies.map((elem) => (
          <Link
            href={`/movies/${elem.id}`}
            className="popular_cardholder-card movie_link"
            key={elem.id}
          >
            <div
              className="popular_card-header"
              style={{ position: "relative" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                className="card-img-top"
                alt="..."
              />
              <div className="tm_card_circle">
                <p>{Math.round(elem.vote_average * 10)}%</p>
              </div>
            </div>
            <div className="card-body" style={{ marginTop: "10px" }}>
              <h5 className="popular_card-title">{elem.original_title}</h5>
              <small className = "date" style={{ color: "black" }}>
                {elem.release_date && elem.release_date.split("-").reverse().join("-")}
              </small>
            </div>
          </Link>
        )):"Loading"}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default index;
