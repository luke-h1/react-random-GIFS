import React, { useEffect, useState } from 'react';
import './Search.scss';
import axios from 'axios';
const Search = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const API_URL = `https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}`;
    const res = await axios.get(API_URL);
    console.log(res.data);
    console.log(res.data.data.image_mp4_url);
    const Image = res.data.data.image_url;
    setData(Image);
    setLoading(false);
  };

  if (loading) {
    return <h3 className="loading">Loading...</h3>;
  }

  return (
    <>
      <div className="search-wrapper">
        <div className="container">
          {!loading && <img src={data} alt="" className="random-gif" />}
        </div>
      </div>
    </>
  );
};
export default Search;
