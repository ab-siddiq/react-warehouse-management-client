import { useEffect, useState } from "react";

const useStocks = () => {
    const [stocks, setStocks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/stocks')
        .then(res=>res.json())
        .then(data=>setStocks(data))
    },[])
    return [stocks,setStocks];
}

export default useStocks;