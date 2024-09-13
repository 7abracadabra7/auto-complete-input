import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import data from "./cities.json";
import Input from "./main";

const App = () => {
  const handleChange = (text) => {
    setText(text);
    let firstN = cities.filter((city) =>
      city.toLowerCase().includes(text.toLowerCase())
    );
    console.log(firstN);
    setHint(firstN);
  };
  // console.log("first");
  const [cities, setCities] = useState(data);
  const [text, setText] = useState("");
  const [hint, setHint] = useState("");

  useEffect(() => {
    fetch(data)
      .then((response) => response.json())
      .then((data) => setCities(data));
    console.log(cities);
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
