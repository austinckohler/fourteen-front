import React from "react";

function Favorites({ favorites }) {
  console.log("fav", favorites);
  return (
    <div className="favorites-container">
      <h2>{favorites}</h2>
    </div>
  );
}

export default Favorites;
