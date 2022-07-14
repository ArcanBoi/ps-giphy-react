import Display from "./Display";
import Search from "./Search";
import { getGifs } from "../services/constants";
import { useState, useEffect } from "react";

export default function Container(props) {
  const [currGif, setCurrGif] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => handleSubmit(), []);

  const handleSubmit = async () => {
    event.preventDefault();
    const data = await getGifs(query ? query : null);
    // console.log(data);
    data && setCurrGif(data.images.original.url);
  };

  const collectInput = (e) => {
    setQuery(e.target.value.trim().toLowerCase());
  };

  //   console.log({ query });
  //   console.log(currGif);

  return (
    <div>
      <Search
        collectInput={(e) => collectInput(e)}
        handleSubmit={handleSubmit}
      />
      <Display url={currGif} />
    </div>
  );
}
