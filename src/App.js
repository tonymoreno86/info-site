import React from "react";
import Photo from "./components/Photo";
import Info from "./components/Info";
import SocialFollow from "./components/SocialFollow";

function App() {
  return (
    <div className="main-container">
      <div className="card-container">
        <Photo />
        <Info />
        <SocialFollow />
      </div>
    </div>
  );
}

export default App;
