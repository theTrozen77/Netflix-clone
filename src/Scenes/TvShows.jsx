import React, { useEffect, useState } from "react";
import { requestFetch } from "./../utils/request";

function TvShows() {
  const [popularTvShows, setPopularTvShows] = useState();
  const [lastestTvShow, setLatestTvShow] = useState();
  const img_base = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetchTvShowDetailOne();
    fetchLatestTvShow();
  }, []);

  //   useEffect(() => {
  //     if (PopularTvShows) {
  //       fetchTvShowDetailOne();
  //     }
  //   }, [PopularTvShows]);

  const fetchLatestTvShow = async () => {
    const response = await fetchPopularTvShow();
    console.log("popular", response);
    const { data } = response;
    setPopularTvShows(data.results);
  };

  const fetchTvShowDetailOne = async () => {
    const response = await fetchTvShowDetails();
    console.log("latest", response);
  };

  const fetchPopularTvShow = () => {
    return requestFetch({
      url: "/tv/popular",
      method: "GET",
    });
  };
  const fetchTvShowDetails = () => {
    return requestFetch({
      url: `/tv/latest`,
      method: "GET",
    });
  };
  return (
    <>
      <h1 id="tvShows">TV Shows</h1>
      <div className="box-single">
        <a>
          <img
            src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv1.PNG?raw=true"
            alt="single"
          />
        </a>
      </div>
      <div class="box">
        {popularTvShows &&
          popularTvShows.map((tvShow) => (
            <a href="">
              <img src={`${img_base}${tvShow.poster_path}`} alt="" />
            </a>
          ))}
      </div>
    </>
  );
}

export default TvShows;
