import { getStocks } from '../services/stock-api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard(){

    const [ stocks, setStocks ] = useState([]);
    console.log(stocks);


    //call the getStock function when the component render
    useEffect(() => {
        const axiosData = async() => {
            const data = await getStocks();
            setStocks(data);
        }
        axiosData();
    },[]);


    return(
       <div>
            {stocks.map((ele,idx) => (
                <Link to={`/stocks/${ele.symbol}`} key={idx}>
                    <p >{ele.name}</p>
                </Link>
            ))}
       </div>
    )
}
export default Dashboard;