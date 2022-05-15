import { useEffect, useState } from "react";

const useStocks = () => {
    const [stocks, setStocks] = useState([]);
    useEffect(()=>{
        fetch('https://agile-dawn-21628.herokuapp.com/stocks')
        .then(res=>res.json())
        .then(data=>setStocks(data))
    },[])
    return [stocks,setStocks];
}

export default useStocks;