import React, { useEffect, useState } from "react";
import { useRouter } from "../Hooks/useRouter";
import {
  fetchMovieDetails,
  fetchMovieVideos,
  fetchSimilarMovies,
  fetchUpcomingMovies,
} from "../services/movie";
import Pagination from "react-js-pagination";

function MovieDetail() {
  const { query, history } = useRouter();
  const { push } = history;
  const { movieId } = query;
  const img_base = "https://image.tmdb.org/t/p/original/";

  const [movieDetails, setMovieDetails] = useState({
    selectedMovieDetails: {},
    selectedMovieVideos: [],
    similarMovies: [],
    upcomingMovies: [],
    isLoading: false,
  });
  const [
    similarMoviesPaginationDetails,
    setSimilarMoviesPaginationDetails,
  ] = useState({
    activePage: 1,
    totalPages: 0,
    totalResults: 0,
  });
  const [selectedMovieId, setSelectedMovieId] = useState("");
  console.log("details", movieDetails);

  useEffect(() => {
    fetchSelectedMovieDetails();
  }, [selectedMovieId, similarMoviesPaginationDetails.activePage]);
  useEffect(() => {
    setId();
  }, [movieId]);

  const setId = () => {
    setSelectedMovieId(movieId);
  };

  const fetchSelectedMovieDetails = async () => {
    const response = await fetchMovieDetails(
      movieId,
      similarMoviesPaginationDetails.activePage
    );
    const videoResponse = await fetchMovieVideos(movieId);
    const getSimilarMovies = await fetchSimilarMovies(
      movieId,
      similarMoviesPaginationDetails.activePage
    );
    const getUpcomingMovies = await fetchUpcomingMovies(
      similarMoviesPaginationDetails.activePage
    );

    let singleMovieObject = undefined;
    let videoList = undefined;
    let similarMovies = undefined;
    let upcomingMovies = undefined;

    if (response.data) {
      singleMovieObject = response.data;
    }
    if (videoResponse.data) {
      videoList = videoResponse.data.results;
    }
    if (getSimilarMovies.data) {
      similarMovies = getSimilarMovies.data.results;
      setSimilarMoviesPaginationDetails({
        ...similarMoviesPaginationDetails,
        ...{
          page: getSimilarMovies.data.page,
          totalPages: getSimilarMovies.data.total_pages,
          totalResults: getSimilarMovies.data.total_results,
        },
      });
    }
    if (getUpcomingMovies.data.results) {
      upcomingMovies = getUpcomingMovies.data.results;
    }

    setMovieDetails({
      ...movieDetails,
      ...{
        selectedMovieDetails: singleMovieObject,
        selectedMovieVideos: videoList,
        similarMovies: similarMovies,
        upcomingMovies: upcomingMovies,
      },
    });
  };

  const handleMovieDetail = (id) => {
    push(`/movie/${id}`);
  };
  const handlePageChange = (pageNumber) => {
    setSimilarMoviesPaginationDetails({
      ...similarMoviesPaginationDetails,
      ...{
        activePage: pageNumber,
      },
    });
  };

  return (
    <>
      <div className="moviedetail-container">
        <div className="movies">
          {movieDetails.selectedMovieVideos &&
            movieDetails.selectedMovieVideos.length > 0 && (
              <iframe
                className="video-playback"
                src={`https://www.youtube.com/embed/${movieDetails.selectedMovieVideos[0].key}`}
              ></iframe>
            )}
        </div>
        <div className="movie-info">
          <h1 className="movieinfo-headline">
            {movieDetails.selectedMovieDetails.original_title}
          </h1>
          <div className="genres">
            {movieDetails.selectedMovieDetails &&
              movieDetails.selectedMovieDetails.genres &&
              movieDetails.selectedMovieDetails.genres.map((genreDetails) => (
                <h3>{genreDetails.name}</h3>
              ))}
          </div>
          <div className="sub-info">
            <div style={{ marginRight: "5px" }}>
              <h2>{movieDetails.selectedMovieDetails.runtime}</h2>
            </div>
            <div>
              <h2>{movieDetails.selectedMovieDetails.release_date}</h2>
            </div>
          </div>
          <p>{movieDetails.selectedMovieDetails.overview}</p>
        </div>
        <h2>Similar Movies</h2>
        <div className="box">
          {movieDetails.similarMovies &&
            movieDetails.similarMovies.length &&
            movieDetails.similarMovies.map((similarMovie) => (
              <a onClick={() => handleMovieDetail(similarMovie.id)}>
                <img src={`${img_base}${similarMovie.poster_path}`} alt="" />
              </a>
            ))}
        </div>
      </div>
      <div>
        <Pagination
          activePage={similarMoviesPaginationDetails.activePage}
          totalItemsCount={similarMoviesPaginationDetails.totalResults}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default MovieDetail;
