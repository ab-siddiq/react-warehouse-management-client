import React, { useEffect, useState } from 'react';
import { useResolvedPath } from 'react-router-dom';
import ProductDetails from './ProductDetails/ProductDetails';
import { Col, Row } from 'react-bootstrap';

const Home = () => {
    const [stocks, setStocks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/stocks')
        .then(res=>res.json())
        .then(data=>setStocks(data))
    },[])
    return (
        <div className='container'>

            <Row className=''>
                {
                    stocks.map(stock=>
                        <Col className='g-3' lg={3}>
                            <ProductDetails key={stock._id} stock={stock}></ProductDetails>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default Home;