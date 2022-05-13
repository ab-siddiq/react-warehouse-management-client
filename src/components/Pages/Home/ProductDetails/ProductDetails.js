import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const ProductDetails = ({stock}) =>{
    const {_id, stockDate, productPhotoUrl, productSupplier, productName, productCategory, productQuantity, productUnitPrice, productTotalPrice} = stock

    return(
        
        
            <div>
                {/* <p>{_id}</p>
            <p>{stockDate}</p>
            <p>{productPhotoUrl}</p>
            <p>{productSupplier}</p>
            <p></p>
            <p>{productCategory}</p>
            <p>{productQuantity}</p>
            <p>{productUnitPrice}</p>
            <p>{productTotalPrice}</p> */}
            <Card >
                <Card.Img variant="top" style={{height:'200px', width: 'auto'}} src={productPhotoUrl} />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Text>
                        Price: &#2547; {productUnitPrice}
                    </Card.Text>
                    <Button variant="primary">Buy</Button>
                </Card.Body>
            </Card>
            </div>
            
        
    );
}

export default ProductDetails;