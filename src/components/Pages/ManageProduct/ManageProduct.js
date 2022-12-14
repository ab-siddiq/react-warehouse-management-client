import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useStocks from "../../../hooks/useStocks";

const ManageProduct = () => {
  const [stocks, setStocks] = useStocks();
  const navigate = useNavigate();

  const handleDeleteStock = (id) => {
    const url = `https://agile-dawn-21628.herokuapp.com/stock/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = stocks.filter((stock) => stock._id !== id);
          setStocks(remaining);
        }
      });
  };
  const handleUpdateStock = (id) => {
    navigate(`/update/stock/${id}`);
  };

  return (
    <div className="container mt-5 ">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Stock Date</th>
            <th>Photo URL</th>
            <th>Product Description</th>
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
          {stocks.map((stock, i) => (
            <tr key={stock._id}>
              <td>{i + 1}</td>
              <td>{stock._id}</td>
              <td>{stock.stockDate}</td>
              <td>{stock.productPhotoUrl}</td>
              <td>{stock.productDescription}</td>
              <td>{stock.productSupplier}</td>
              <td>{stock.productName}</td>
              <td>{stock.productCategory}</td>
              <td>{stock.productQuantity}</td>
              <td>{stock.productUnitPrice}</td>
              <td>{stock.productTotalPrice}</td>
              <td className="d-flex justify-content-around align-items-end">
                <a
                  className="text-green"
                  onClick={() => {
                    handleUpdateStock(stock._id);
                  }}
                >
                  <FontAwesomeIcon icon={faPencil} />
                </a>
                <a
                  className="text-danger"
                  onClick={() => {
                    handleDeleteStock(stock._id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProduct;
