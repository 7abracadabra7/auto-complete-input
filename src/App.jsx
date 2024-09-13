import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import data from "./cities.json";
import Input from "./main";
import Header from "./Header";

const App = () => {
  const handleChange = (text) => {
    setText(text);
    let firstSuggest = cities.filter((city) => city.startsWith(text));
    console.log(firstSuggest);
    const bestSuggestion = firstSuggest[0];
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
      <Header />
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
