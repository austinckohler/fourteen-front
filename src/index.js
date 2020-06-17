import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// function Supplies({ id, category, item, markComplete, delSupply }) {
//   return (
//     <>
//       <input type="checkbox" onChange={markComplete} />
//       {item} |{category}
//       <button onClick={delSupply}>Delete</button>
//       <p style={itemCompleteStyle(id)}>
//         {item} | {category}
//       </p>
//     </>
//   );
// }

// export default Supplies;
// function itemCompleteStyle(id) {
//   return { textDecoration: supply.completed ? "line-through" : "none" };
// }
