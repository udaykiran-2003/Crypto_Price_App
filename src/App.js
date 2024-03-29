import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";

function App() {
  // STEP-1
  const [listOfCoins, setListOfCoins] = useState([]);

// STEP-4
  const [searchWord, setSearchWord] = useState("");

// STEP-2
  useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((response) => {
        setListOfCoins(response.data);
      })
      .catch((error) => {
        console.error("Uday:", error);
      });
  }, []);


  // STEP-6
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    // STEP-5
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Bitcoin..."
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>

      {/* STEP-3 */}
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.image}
              price={coin.current_price}
              symbol={coin.symbol}
              rank={coin.market_cap_rank}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;