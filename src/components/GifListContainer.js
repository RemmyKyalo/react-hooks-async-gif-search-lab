import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=EGsouQgqTDSKUd33jpRVzc3r078vs8UI&q=&limit=3&offset=0&rating=g&lang=en"
    )
      .then((res) => res.json())
      .then((data) => setGifs(data.data));
  }, []);

  const handleSubmit = (query) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=EGsouQgqTDSKUd33jpRVzc3r078vs8UI&q=${query}&limit=3&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((data) => setGifs(data.data));
  };

  return (
    <>
      <GifSearch onSearch={handleSubmit} />
      <GifList gifs={gifs} />
    </>
  );
}

export default GifListContainer;
