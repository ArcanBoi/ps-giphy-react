import axios from "axios";

// BASE_URL=https://api.giphy.com
// API_KEY=88Rf7dCA6dn5aQmClx2IJ554sCG1wQbB
// `${BASE_URL}/v1/gifs/search?api_key=${API_KEY}&q=${giphy}&limit=25&rating=g`

const BASE_URL = "https://api.giphy.com";
const API_KEY = "88Rf7dCA6dn5aQmClx2IJ554sCG1wQbB";

async function getGifs(query, qty = 25) {
  try {
    const response = await axios.get(
      `${BASE_URL}/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${qty}&rating=g`
    );
    const arr = response.data.data;
    //   console.log(response);
    return arr[Math.floor(Math.random() * arr.length)];
  } catch (err) {
    console.log(err);
    return null;
  }
}

export { getGifs };
