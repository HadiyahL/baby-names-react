import React from "react";
import babyNamesData from "./babyNamesData.json";
import "./App.css";
import ListBabyNames from "./ListBabyNames";

function App() {
  return (
    <div className="App">
      {babyNamesData
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((babyData) => {
          return <ListBabyNames key={babyData.id} babyName={babyData} />;
        })}
    </div>
  );
}

export default App;

/*
HOW DO I DISPLAY BOYS & GIRLS NAME DIFFERENTLY
PROJECT ON GITHUB & NETLIFY
*/
