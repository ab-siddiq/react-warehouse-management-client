import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({stock}) =>{
    const {_id, productPhotoUrl,productDescription, productSupplier, productName, productCategory, productQuantity, productUnitPrice} = stock;
    const navigate = useNavigate();

    const handleInventory = id => {
        navigate(`/inventory/${id}`);
    }
    return(

        <div>
            <Card >
                <Card.Img variant="top" style={{height:'200px', width: 'auto'}} src={productPhotoUrl} />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Text>
                    {  productDescription || 'Some quick example text to build on the card title and make up the bulk of                    the cards content.'}
                    </Card.Text>
                    {/* <Card.Text > */}
                    <div className='d-flex justify-content-between'>
                        <p>Price: &#2547; {productUnitPrice}</p> 
                        <p>Available: {productQuantity} Unit</p> 
                    </div>
                    {/* </Card.Text> */}
                    <div className='d-flex justify-content-start m-1 text-white'>
                        <p className="bg-primary my-0  px-2  py-1 rounded">{productCategory}</p>
                        <p className="bg-primary my-0 mx-1 px-2  py-1 rounded">{productSupplier}</p>
                    </div>
                    <div className="d-flex justify-content-end">
                    <Button onClick={()=>{handleInventory(_id)}} variant="primary">Update</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
            
        
    );
}

export default ProductDetails;