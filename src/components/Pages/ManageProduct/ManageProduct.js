import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React  from "react";
import { Table } from "react-bootstrap";
import useStocks from "../../../hooks/useStocks";
import ProductDetails from './../Home/ProductDetails/ProductDetails';


const ManageProduct = () => {
    const [stocks,setStocks] = useStocks();

    const handleDeleteStock = id =>{

        const url = `http://localhost:5000/stock/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                const remaining = stocks.filter(stock=>stock._id !== id);
                setStocks(remaining);
            }
        })
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
                {stocks.map(stock=><tr key={stock._id}>

                            <td>{stock._id}</td>
                            <td>{stock.stockDate}</td>
                            <td>{stock.productPhotoUrl}</td>
                            <td>{stock.productSupplier}</td>
                            <td>{stock.productName}</td>
                            <td>{stock.productCategory}</td>
                            <td>{stock.productQuantity}</td>
                            <td>{stock.productUnitPrice}</td>
                            <td>{stock.productTotalPrice}</td>
                            <td className="d-flex justify-content-around align-items-end">
                            <a className="text-green" onClick={()=>{handleUpdateStock(stock._id)}}><FontAwesomeIcon icon={faPencil} /></a>
                            <a className="text-danger" onClick={()=>{handleDeleteStock(stock._id)}}><FontAwesomeIcon icon={faTrashCan} /></a>
                    </td>
                        </tr>)}
                    
           
               
            </tbody>
        </Table>
        </div>
    );
}

export default ManageProduct;