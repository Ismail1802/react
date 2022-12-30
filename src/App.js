import Boost from "./components/Boost";
import Footer from "./components/Footer";
import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Shortener from "./components/Shortener";
import Statistics from "./components/Statistics";

function App() {
  // const [inputValue, setInputValue] = useState("");
  const [links, setLinks] = useState([]);
  const [error, setError] = useState();
  const inputRef = useRef();

  return (
    <>
      <Header />
      <Introduction />
      <Shortener
        // inputValue={inputValue}
        // setInputValue={setInputValue}
        inputValue={inputRef}
        links={links}
        setLinks={setLinks}
        error={error}
        setError={setError}
      />
      <Statistics />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
