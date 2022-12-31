import React, { useState } from "react";
// import isURL from "validator/lib/isURL";
import classes from "./Shortener.module.css";
import Links from "./Links";

const Shortener = ({ links, setLinks, inputValue, setError, error }) => {
  const [shortLink, setShortLink] = useState([]);

  const inputChangeHandler = () => {
    if (
      inputValue.current.value.includes("https") ||
      inputValue.current.value.includes(".com")
    ) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const buttonClickHandler = (e) => {
    e.preventDefault();
    if (error || inputValue.current.value === "") {
      return;
    }
    fetching(inputValue.current.value);
    setLinks([
      ...links,
      { link: inputValue.current.value, id: Math.random(), state: false },
    ]);
    inputValue.current.value = "";
  };

  const fetching = (url) => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((response) => response.json())
      .then((response) =>
        setShortLink([...shortLink, response.result.short_link])
      )
      .catch((error) => console.error(error));
  };

  return (
    <article className={classes.shortener}>
      <form>
        <input
          style={{ border: error ? "3px solid #ff3333" : "none" }}
          placeholder="Shorten a link here..."
          // value={inputValue}
          onChange={inputChangeHandler}
          ref={inputValue}
        ></input>
        {error && <p style={{ color: "#ff3333" }}>Invalid url</p>}
        <button onClick={buttonClickHandler} className={classes.shorten}>
          Shorten It!
        </button>
      </form>

      {links.map((el, index) => (
        <Links
          id={el.id}
          short={shortLink[index]}
          key={el.id}
          value={el.link}
        />
      ))}
    </article>
  );
};

export default Shortener;
