import axios from "axios";

const base = "https://gateway.marvel.com:443/v1/public/";
const apiKey = "apikey=957ab24194069244cf4f135422b286b7";

export const getCharacters = (nameStartsWith, startIndex) => {
  return axios.get(
    `${base}characters?nameStartsWith=${nameStartsWith}&limit=20&offset=${startIndex}&${apiKey}`
  );
};
