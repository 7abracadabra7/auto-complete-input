import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import data from "./cities.json";
import Input from "./main";

const App = () => {
  const handleChange = (text) => {
    // let inputWord = text.charAt(0).toUpperCase() + text.slice(1);
    console.log(text);

    setText(text.toLowerCase());
    let firstSuggest = cities.filter((city) =>
      city.toLowerCase().startsWith(text.toLowerCase())
    );
    console.log(firstSuggest);
    const bestSuggestion = firstSuggest[0].toLowerCase();
    console.log(bestSuggestion);
    setHint(bestSuggestion);
  };

  const [cities, setCities] = useState(data);
  const [text, setText] = useState("");
  const [hint, setHint] = useState("");

  useEffect(() => {
    fetch(data)
      .then((response) => response.json())
      .then((data) => setCities(data));
  });

  return (
    <div>
      <h1>hi</h1>
      <Input
        handleChange={handleChange}
        hint={hint}
        text={text}
        setText={setText}
      />
    </div>
  );
};

export default App;
