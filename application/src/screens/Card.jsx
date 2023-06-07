import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./home.css";

function Card() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchShowDetails();
  }, []);

  if (!show) {
    return <div>Loading...</div>;
  }
  const handleBookTicket = () => {
    navigate(`/book-now/${id}`);
  };
  return (
    <div>
      <h2>{show.name}</h2>
      <img src={show.image.medium} />
      <p>Language: {show.language}</p>

      <p>Ratings: {show.rating.average}</p>
      <p>Summary:{show.summary}</p>
      <button className="btn" onClick={handleBookTicket}>
        Book Ticket
      </button>
      <button className="btn" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
}

export default Card;
