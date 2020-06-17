import React from "react";

function Supplies({ category, item }) {
  return (
    <>
      <ul>
        <li>
          <h2>{category}</h2>
        </li>
        <li>
          <p>{item}</p>
        </li>
      </ul>
    </>
  );
}

export default Supplies;
