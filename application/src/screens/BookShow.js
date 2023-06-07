import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './home.css'
function BookShow() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
    showName: "",
    showRating: "",
    showRuntime: "",
    showTime: "",
  });
  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
        // console.log(show);
        setFormData((prevFormData) => ({
          ...prevFormData,
          showName: response.data.name,
          showTime: response.data.schedule.time,
          showRating: response.data.rating.average,
          showRuntime: response.data.runtime,
        }));
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchShowDetails();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      showName: "",
      showTime: "",
      showRating: "",
      showRuntime: "",
    });
   navigate('/thankyou')
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Show Name:</label>
          <input
            type="text"
            name="movieName"
            value={formData.showName}
            readOnly
          />
        </div>
        <div>
          <label>Show Time:</label>
          <input
            type="text"
            name="showTime"
            value={formData.showTime}
            readOnly
          />
        </div>
        <div>
          <label>Show Ratings:</label>
          <input
            type="text"
            name="showTime"
            value={formData.showRating}
            readOnly
          />
        </div>
        <div>
          <label>Show Runtime (minutes):</label>
          <input
            type="text"
            name="showTime"
            value={formData.showRuntime}
            readOnly
          />
        </div>

        <div>
          <button className="btn" type="submit" onClick={handleInputChange}>Book Ticket</button>
        </div>
      </form>
    </div>
  );
}

export default BookShow;
