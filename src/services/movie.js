import { requestFetch } from "./../utils/request";

export const fetchMovieDetails = (movie_Id, page) => {
  return requestFetch({
    url: `/movie/${movie_Id}?page=${page}`,
    method: "GET",
  });
};

export const fetchMovieVideos = (movie_Id) => {
  return requestFetch({
    url: `/movie/${movie_Id}/videos`,
    method: "GET",
  });
};

export const fetchSimilarMovies = (movie_Id, page) => {
  return requestFetch({
    url: `/movie/${movie_Id}/similar?page=${page}`,
    method: "GET",
  });
};

export const fetchUpcomingMovies = (page) => {
  return requestFetch({
    url: `/movie/upcoming?page=${page}`,
    method: "GET",
  });
};
