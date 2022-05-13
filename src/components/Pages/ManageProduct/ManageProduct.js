import React  from "react";
import { Table } from "react-bootstrap";
import useStocks from "../../../hooks/useStocks";
import ProductDetails from './../Home/ProductDetails/ProductDetails';


const ManageProduct = () => {
    const [stocks,setStocks] = useStocks();

    const handleDeleteStock = id =>{
        console.log(id);
    }
    const handleUpdateStock = id =>{
        console.log(id);
    }

    return (
        <div className="container mt-5">
            {stocks.length}
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Stock Date</th>
                <th>Photo URL</th>
                <th>Product Supplier</th>
                <th>Product Category</th>
                <th>Product Name</th>
                <th>Product Count</th>
                <th>Product Unit Price</th>
                <th>Product Total Price</th>
                <th>Action</th>
              
                </tr>
            </thead>
            <tbody>
                {stocks.map(stock=><tr>

                            <td>{stock._id}</td>
                            <td>{stock.stockDate}</td>
                            <td>{stock.productPhotoUrl}</td>
                            <td>{stock.productSupplier}</td>
                            <td>{stock.productName}</td>
                            <td>{stock.productCategory}</td>
                            <td>{stock.productQuantity}</td>
                            <td>{stock.productUnitPrice}</td>
                            <td>{stock.productTotalPrice}</td>
                            <td>
                            <button onClick={()=>{handleUpdateStock(stock._id)}}>update</button>
                            <button onClick={()=>{handleDeleteStock(stock._id)}}>delete</button>
                    </td>
                        </tr>)}
                    
           
               
            </tbody>
        </Table>
        </div>
    );
}

export default ManageProduct;