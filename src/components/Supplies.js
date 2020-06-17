import React from "react";

function Supplies({ id, supply, category, item, markComplete, delSupply }) {
  console.log(supply.completed);
  return (
    <>
      <input type="checkbox" onChange={() => markComplete} />
      {console.log(markComplete)}
      {item} | {category}
      <button onClick={delSupply}>Delete</button>
      <p style={supplyCompletedStyle()}>
        {item} | {category}
      </p>
    </>
  );

  function supplyCompletedStyle(id) {
    console.log(id);
    return { textDecoration: supply.completed ? "line-through" : "none" };
  }
}
export default Supplies;
