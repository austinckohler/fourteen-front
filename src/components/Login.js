import React from "react";
import Supplies from "./Supplies";

function Login({ supplies }) {
  const showSupplies = supplies.map((supply) => (
    <Supplies key={supply.id} category={supply.category} item={supply.item} />
  ));

  return <>{showSupplies}</>;
}

export default Login;
