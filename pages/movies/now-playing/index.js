import { NowPlayingMoviesContext } from "@/context/NpmContext";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

const index = () => {
  const [
    NowPlayingMovies,
    setNowPlayingMovies,
    TopRatedMovies,
    setTopRatedMovies,
  ] = useContext(NowPlayingMoviesContext);
  const [pageCount, setpageCount] = useState();
  const [totalLength, settotalLength] = useState();
  const [curPage, setcurPage] = useState(1);

  const getNowPlayingMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`
    );
    console.log(data.results);
    console.log(data);
    await data &&  settotalLength(data.total_results);
    setNowPlayingMovies(()=>(data.results));
    setcurPage(curPage+1)
  };

  console.log(totalLength);


  const fetchMoreData = async()=>{
    console.log(`https://api.themoviedb.org/3/movie/now_playing?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=${curPage}`);
    axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=${curPage}`
    )
    .then((data)=>{
      console.log(data);
      const nowcurmovies =  [...NowPlayingMovies, ...data.data.results];
      setNowPlayingMovies([...NowPlayingMovies, ...data.data.results]);
      console.log(nowcurmovies);
      console.log(NowPlayingMovies);
    })
      
  }
  // const fetchMoreDa = async ()=>{
  //   let {data }= await fetchMoreDat();
  //   console.log(data);
  //   const nowcurmovies =  [...NowPlayingMovies, ...data.results];
  //   setNowPlayingMovies(()=>(NowPlayingMovies.concat(data.results)));
  //   console.log(nowcurmovies);
  //   console.log(NowPlayingMovies);
  // }
 
  // const fetchMoreData = async ()=>{
  //   await fetchMoreDa();
  //   setcurPage(curPage+1);
  //   console.log(NowPlayingMovies);
  // }

  useEffect(() => {
     getNowPlayingMovies();

  }, []);

  return (
    <div>
      <Navbar />
      <div className="popular_cardHolder">
        <InfiniteScroll
          dataLength = {totalLength? totalLength:20}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {NowPlayingMovies.map((elem) => (
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
                  <p>{Math.trunc(elem.vote_average) * 10}%</p>
                </div>
              </div>
              <div className="card-body" style={{ marginTop: "10px" }}>
                <h5 className="popular_card-title">{elem.original_title}</h5>
                <small style={{ color: "black" }}>
                  {elem.release_date.split("-").reverse().join("-")}
                </small>
              </div>
            </Link>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default index;
