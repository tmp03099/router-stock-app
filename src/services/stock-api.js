import axios from 'axios';

export const getStocks = async () =>{
    const apiKey = `b98524cb83965f5aafbfde88ce13647d`;

    try{
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/stock/list?limit=10&apikey=${apiKey}`);
        let data = response.data;
        data = data.slice(0,10);
        return data;
        
    }catch(error){
        console.error(error);
    }


}
