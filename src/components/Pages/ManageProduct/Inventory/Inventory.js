import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useStocks from "../../../../hooks/useStocks";

const Inventory = () => {
  const [stocks, setStocks] = useStocks();
  const { inventoryId } = useParams();
  const [stock, setStock] = useState({});
//   const [newProductQuantity, setNewProductQuantity] = useState(1);
  
  const productQuantityRef = useRef("");
    console.log(productQuantityRef)

 
 
  const handleUpdateInventory = (e) => {
    e.preventDefault();
   
    const productQuantity = productQuantityRef.current.value;
    console.log(productQuantity)
  
    //  const newQuantity = productQuantity -1;
    //  setNewProductQuantity(newProductQuantity);

    const stock = {
        productQuantity
    };

    fetch(`http://localhost:5000/inventory/${inventoryId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(stock),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => setStock(data));
  }, []);
  return (
    <div className="my-5">
      <Row>
        <Col>
          <div className="container mt-5">
            {stock.stockDate}
            <Form onSubmit={handleUpdateInventory}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    {/* <Form.Label>Stock Id</Form.Label> */}
                    <Form.Control
                      type="text"
                      value={stock._id}
                      readOnly
                      placeholder="Stock Id"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    {/* <Form.Label>Date</Form.Label> */}
                    <Form.Control
                    //   ref={stockDateRef}
                      type="date"
                      defaultValue={stock.stockDate}
                      readOnly
                      placeholder="Enter Name"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    {/* <Form.Label>Photo Url</Form.Label> */}
                    <Form.Control
                    //   ref={photoUrlRef}
                      defaultValue={stock.productPhotoUrl}
                      type="text"
                      readOnly
                      placeholder="Photo Url"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    {/* <Form.Label>Product Description</Form.Label> */}
                    <Form.Control
                    //   ref={productDescriptionRef}
                      defaultValue={stock.productDescription}
                      as="textarea"
                      rows={3}
                      readOnly
                      placeholder="Product Description"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group className="mb-3" as={Col} controlId="formGridState">
                  <Form.Control
                    // ref={productSupplierRef}
                    defaultValue={stock.productSupplier}
                    type="text"
                    readOnly
                    placeholder="Product Supplier"
                  />
                </Form.Group>
                <Form.Group className="mb-3" as={Col} controlId="formGridState">
                  <Form.Control
                    // ref={productCategoryRef}
                    defaultValue={stock.productCategory}
                    type="text"
                    readOnly
                    placeholder="Product Category"
                  />
                </Form.Group>
                <Form.Group className="mb-3" as={Col} controlId="formGridState">
                  <Form.Control
                    // ref={productNameRef}
                    defaultValue={stock.productName}
                    type="text"
                    readOnly
                    placeholder="Product Name"
                  />
                </Form.Group>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    {/* <Form.Label>Product Quantity</Form.Label> */}
                    <Form.Control
                    //   ref={productQuantityRef}
                      value='2'
                      type="text"
                      readOnly
                      placeholder="Product Quantity"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    {/* <Form.Label>Product Unit Price</Form.Label> */}
                    <Form.Control
                    //   ref={productUnitPriceRef}
                      defaultValue={stock.productUnitPrice}
                      type="text"
                      readOnly
                      placeholder="Product Unit Price"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    {/* <Form.Label>Product Total Price</Form.Label> */}
                    <Form.Control
                    //   ref={productTotalPriceRef}
                      defaultValue={stock.productTotalPrice}
                      type="text"
                      readOnly
                      placeholder="Product Total Price"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                  Delivered
                </Button>
              </div>
            </Form>
          </div>
        </Col>

        <Col>
          <div className="container mt-5 ">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Id</th>
                  <th>Product Supplier</th>
                  <th>Product Category</th>
                  <th>Product Name</th>
                  <th>Product Count</th>
                  <th>Product Unit Price</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((stock, i) => (
                  <tr key={stock._id}>
                    <td>{i + 1}</td>
                    <td>{stock._id}</td>
                    <td>{stock.productSupplier}</td>
                    <td>{stock.productName}</td>
                    <td>{stock.productCategory}</td>
                    <td>{stock.productQuantity}</td>
                    <td>{stock.productUnitPrice}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Inventory;
