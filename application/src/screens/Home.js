import React, { useEffect, useState } from "react";

import axios from "axios";
import "./home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );

        console.log(response.data);
        setShows(response.data);
      } catch (error) {
        console.error("Some error occured while fetching data:", error);
      }
    };

    fetchShows();
  }, []);
  const handleClick = (show) => {
    navigate(`/card-detail/${show.id}`);
  };
  return (
    <>
      <div className="container">
        <h2>Shows</h2>
        <div className="card-container">
          {shows.map(({ show }) => (
            <div className="card" key={show.id}>
              <img
                src={show.image.medium}
                className="card-img-top"
                style={{ objectFit: "cover" }}
                alt={show.name}
              />
              <div className="card-body">
                <h5 className="card-title">{show.name}</h5>
                <p className="card-text">Language: {show.language}</p>
                <p className="card-text">Ratings: {show.rating.average}</p>
                <button className="btn" onClick={()=>handleClick(show)}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
