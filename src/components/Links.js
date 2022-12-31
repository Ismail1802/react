import React, { useState } from "react";
import classes from "./Links.module.css";

const Links = ({ value, short }) => {
  const [clicked, setClicked] = useState("Copy");
  const copied = () => {
    setClicked("Copied!");
    navigator.clipboard.writeText(short);
  };

  return (
    <article className={classes.links}>
      <p className={classes["p-one"]}>{value}</p>
      <hr />
      <p className={classes["p-two"]}>{short}</p>
      <button
        onClick={copied}
        className={classes.copy}
        style={{
          backgroundColor: clicked === "Copied!" ? "hsl(257, 27%, 26%)" : "",
        }}
      >
        {clicked}
      </button>
    </article>
  );
};

export default Links;
