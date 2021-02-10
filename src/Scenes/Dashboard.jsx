import React, { useState, useEffect } from "react";
import { requestFetch } from "./../utils/request";
import { useHistory } from "react-router-dom";
import { config } from "../keys/config";
import MainRoutes from "./routes";

function Dashboard(props) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { push } = useHistory();
  const img_base = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetchPopularMovies();
  }, []);
  const fetchPopularMovies = async () => {
    const response = await testFetch();
    if (response) {
      const { data } = response;
      setList(data.results);
    }
  };

  const handleMovieClick = (id) => {
    console.log("id moview", id);
    push(`/movie/${id}`);
  };

  const testFetch = () => {
    return requestFetch({
      method: "GET",
      url: "/movie/popular",
    });
  };
  return (
    <>
      <div classNameName="wrapper">
        <section>
          <div className="location" id="home">
            <h1 id="home">Popular on Netflix</h1>
            <div className="box">
              {list &&
                list.map((movieDetails, index) => {
                  return (
                    <a
                      className="transition-style"
                      onClick={() => handleMovieClick(movieDetails.id)}
                    >
                      <img
                        src={`${img_base}${movieDetails.poster_path}`}
                        alt=""
                      />
                    </a>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
