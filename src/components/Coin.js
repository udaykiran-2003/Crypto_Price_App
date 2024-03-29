import React from "react";

function Coin({ name, icon, price, symbol,rank }) {
  return (
    <div className="coin">
      <h2> Name: {name}</h2>
      <img src={icon} alt={name}/>
      <h3> Current Price (USD) : {price}</h3>
      <h3> Symbol: {symbol}</h3>
      <h3> market cap rank: {rank}</h3>
    </div>
  );
}

export default Coin;