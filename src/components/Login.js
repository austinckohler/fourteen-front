import React from "react";
import Supplies from "./Supplies";

function Login({ supplies, markComplete, delSupply }) {
  const showSupplies = supplies.map((supply) => (
    <Supplies
      key={supply.id}
      supply={supply}
      category={supply.category}
      item={supply.item}
      markComplete={markComplete}
      delSupply={delSupply}
    />
  ));

  return (
    <>
      <h2>Camping Items</h2>
      <h5>Are you prepared for exploration?</h5>
      {showSupplies}
      <h4>Now Go Explore!</h4>
    </>
  );
}

export default Login;
