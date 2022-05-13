import React  from "react";
import { Table } from "react-bootstrap";


const ManageProduct = () => {

    return (
        <div className="container mt-5">
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
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>
                        <button>edit</button>
                        <button>update</button>
                        <button>delete</button>
                    </td>
                </tr>
               
            </tbody>
        </Table>
        </div>
    );
}

export default ManageProduct;