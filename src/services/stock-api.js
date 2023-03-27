import axios from 'axios';

export const getStocks = async () =>{
    const apiKey = `5e6af56909a3eb76eac23871bc3c4581`;

    try{
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/stock_market/actives?limit=20&apikey=${apiKey}`);
        let data = response.data;
        data = data.slice(1,20);
        return data;
        
    }catch(error){
        console.error(error);
    }

}

export const getPrices = async (symbol) =>{
    const apiKey = `5e6af56909a3eb76eac23871bc3c4581`;

    try{
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`);
        console.log(response);
        const data = response.data[0];
        return data;
        
    }catch(error){
        console.error(error);
    }

}


