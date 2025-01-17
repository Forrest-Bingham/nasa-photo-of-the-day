import React, { useState } from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoList />
    </div>
  );
}

export default App;
