import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPrices } from "../services/stock-api";

function Stock() {
  const [priceData, setPriceData] = useState([]);

  //accesing the params obj to get the symbol params
  const { symbol } = useParams();
  console.log(symbol);

  //call the getStock function when the component render
  useEffect(() => {
    const loadPrice = async (symbol) => {
      const data = await getPrices(symbol);
      setPriceData(data);
    };
    loadPrice(symbol);
  }, []);

  return (
    <div>
      <h3>Name: {priceData.symbol}</h3>
      <h3>Price: {priceData.price}</h3>
    </div>
  );
}
export default Stock;
