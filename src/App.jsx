import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import data from "./cities.json";
import Input from "./main";
import Header from "./Header";
import Result from "./Result";
import "./App.css";

const App = () => {
  const [cities, setCities] = useState(data);
  const [text, setText] = useState("");
  const [hint, setHint] = useState("");
  const [finish, setFinish] = useState({ finish: false, result: "" });

  const handleChange = (text) => {
    setText(text);
    let firstSuggest = cities.filter((city) => city.startsWith(text));
    console.log(firstSuggest);
    const bestSuggestion = firstSuggest[0];
    console.log(bestSuggestion);
    setHint(bestSuggestion);
  };

  useEffect(() => {
    fetch(data)
      .then((response) => response.json())
      .then((data) => setCities(data));
  });

  return (
    <div className="container">
      <Header />
      <Input
        handleChange={handleChange}
        hint={hint}
        text={text}
        setText={setText}
        setHint={setHint}
        setFinish={setFinish}
      />
      {finish.finish && <Result text={finish.result} />}
    </div>
  );
};

export default App;
