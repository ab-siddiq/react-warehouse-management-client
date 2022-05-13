import React, { useEffect, useState } from 'react';
import { useResolvedPath } from 'react-router-dom';
import ProductDetails from './ProductDetails/ProductDetails';
import { Col, Row } from 'react-bootstrap';
import useStocks from '../../../hooks/useStocks';

const Home = () => {
   
    const [stocks,setStocks] = useStocks();
    
    return (
        <div className='container'>

            <Row className=''>
                {
                    stocks.map(stock=>
                        <Col key={stock._id} className='g-3' lg={3}>
                            <ProductDetails key={stock._id} stock={stock}></ProductDetails>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default Home;