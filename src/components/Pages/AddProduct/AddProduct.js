import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddProduct = () => {
  return (
    <div className="container mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Product Stock Date</Form.Label>
          <Form.Control type="date" placeholder="" />
        </Form.Group>
      <Row>
      <Form.Group as={Col} className="mb-3">
          <Form.Label>Product Category</Form.Label>
          <Form.Select>
            <option>Select Product Category</option>
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
            <option>e</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Select>
            <option>Select Product Name</option>
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
            <option>e</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Product Supplier</Form.Label>
          <Form.Select>
            <option>Select Product Supplier</option>
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
            <option>e</option>
          </Form.Select>
        </Form.Group>
      </Row>
        
        <Row>
        <Form.Group as={Col} className="mb-3" controlId="">
          <Form.Label>Product Unit</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        </Row>
        <div className="d-grid">
        <Button variant="primary" size='lg' type="submit">
          Add Product
        </Button>
        </div>
       
      </Form>
    </div>
  );
};

export default AddProduct;
