import React, { useState } from "react";
import data from "../data/data";
import ItemCard from "./ItemCard";
import NotFound from "./NotFound";
import Searchbar from "./Searchbar";
import axios from "axios";

export default function Search() {
  const [searchInput, setSearchInput] = useState({
    userInput: "",
    isSubmitted: false,
  });
  const [result, setResult] = useState({});
  const [imgResult, setImgResult] = useState([]);

  function findSearchInput(input) {
    setSearchInput({
      userInput: input,
      isSubmitted: true,
    });
    searchDataset(input);
  }

  function searchDataset(input) {
    if (input === null || input === "") return setResult({ notfound: true });
    else {
      const findItem = data.find((object) => input === object.item);
      // console.log(findItem);
      if (findItem === undefined) {
        // aka search for tag match, if null then return notFound
        const output = data.find((obj) => obj.tags.includes(input));
        if (output !== undefined) {
          return setResult({
            id: output.id,
            item: output.item,
            type: output.type,
            category: output.category,
            description: output.description,
            tags: [...output.tags],
          });
        } else {
          return setResult({ notfound: true });
        }
      }

      setResult({
        id: findItem.id,
        item: findItem.item,
        type: findItem.type,
        category: findItem.category,
        description: findItem.description,
        tags: [...findItem.tags],
      });
    }
  }

  function findImg(input) {
    const token = process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY;
    const unsplashUrl = process.env.REACT_APP_UNSPLASH_URL;

    const url = `${unsplashUrl}?page=1&query=${input.replace(
      / /g,
      "_"
    )}&client_id=${token}`;

    axios.get(url).then((res) => {
      console.log(res);
      setImgResult(res.data.results[0].urls.small);
    });
  }

  return (
    <>
      <div className="search-wrapper">
        <Searchbar findSearchInput={findSearchInput} findImg={findImg} />
        <div className="search-result-container">
          {searchInput.isSubmitted && !result.notfound && (
            <ItemCard result={result} img={imgResult} />
          )}
          {result.notfound && <NotFound />}
        </div>
      </div>
    </>
  );
}
