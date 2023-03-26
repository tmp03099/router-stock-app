import axios from 'axios';

export const getStocks = async () =>{
    const apiKey = `b98524cb83965f5aafbfde88ce13647d`;

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
    const apiKey = `b98524cb83965f5aafbfde88ce13647d`;

    try{
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`);
        console.log(response);
        const data = response.data[0];
        return data;
        
    }catch(error){
        console.error(error);
    }

}


