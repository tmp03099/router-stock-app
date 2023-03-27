import { getStocks } from '../services/stock-api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

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
            <h2 className="m-4 text-primary">MOST ACTIVE STOCKS</h2>
            <Table striped>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((ele,idx) => (
                    <tr key={idx}>
                        <td>
                            <Link to={`/stocks/${ele.symbol}`} >
                                {ele.name}
                            </Link>
                        </td>
                        <td>{ele.price}</td>
                        <td>{ele.changesPercentage}</td>
                    </tr>
                    ))}

                </tbody>
            </Table>
        </div>
        
    )
}
export default Dashboard;