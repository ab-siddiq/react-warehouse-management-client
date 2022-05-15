import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateStock = () => {
  const { stockId } = useParams();
  const [stock, setStock] = useState({});

  const stockDateRef = useRef("");
  const photoUrlRef = useRef("");
  const supplierRef = useRef("");
  const productDescriptionRef = useRef("");
  const productCategoryRef = useRef("");
  const productNameRef = useRef("");
  const productQuantityRef = useRef("");
  const productUnitPriceRef = useRef("");
  const productTotalPriceRef = useRef("");
  const productSupplierList = [
    { id: 1, name: "square" },
    { id: 2, name: "acme" },
    { id: 3, name: "incepta" },
    { id: 4, name: "beximco" },
    { id: 5, name: "aci" },
  ];
  const productCategoryList = [
    { id: 1, name: "injection" },
    { id: 2, name: "tablet" },
    { id: 3, name: "inheler" },
    { id: 4, name: "cirap" },
  ];
  const productNameList = [
    { id: 1, name: "Abacavir" },
    { id: 2, name: "Acetazolamide" },
    { id: 3, name: "Aciclovir" },
    { id: 4, name: "Ampicillin" },
  ];

  const handleUpdateStock = (e) => {
    e.preventDefault();
    const stockDate = stockDateRef.current.value;
    const productPhotoUrl = photoUrlRef.current.value;
    const productDescription = productDescriptionRef.current.value;
    const productSupplier = supplierRef.current.value;
    const productName = productNameRef.current.value;
    const productCategory = productCategoryRef.current.value;
    const productQuantity = productQuantityRef.current.value;
    const productUnitPrice = productUnitPriceRef.current.value;
    const productTotalPrice = productTotalPriceRef.current.value;
    const stock = {
      stockDate,
      productPhotoUrl,
      productDescription,
      productSupplier,
      productName,
      productCategory,
      productQuantity,
      productUnitPrice,
      productTotalPrice,
    };

    fetch(`https://agile-dawn-21628.herokuapp.com/stock/${stockId}`, {
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
    fetch(`https://agile-dawn-21628.herokuapp.com/stock/${stockId}`)
      .then((res) => res.json())
      .then((data) => setStock(data));
  }, [stockId]);

  return (
    <div className="container my-5">
      {stock.stockDate}
      <Form onSubmit={handleUpdateStock}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className='ms-1 font-weight-bold'>Stock Id</Form.Label>
              <Form.Control type="text" value={stock._id} readOnly />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className='ms-1 font-weight-bold'>Date</Form.Label>
              <Form.Control
                ref={stockDateRef}
                type="date"
                defaultValue={stock.stockDate}
                placeholder="Enter Name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className='ms-1 font-weight-bold'>Photo Url</Form.Label>
              <Form.Control
                ref={photoUrlRef}
                defaultValue={stock.productPhotoUrl}
                type="text"
                placeholder="Photo Url"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className='ms-1 font-weight-bold'>Product Description</Form.Label>
              <Form.Control
                ref={productDescriptionRef}
                defaultValue={stock.productDescription}
                as="textarea"
                rows={3}
                placeholder="Product Description"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3" as={Col} controlId="formGridState">
            <Form.Label className='ms-1 font-weight-bold'>Choose Supplier</Form.Label>
            <Form.Select ref={supplierRef} defaultValue={stock.productSupplier}>
              <option>Choose Supplier</option>
              {productSupplierList.map((sup) => (
                <option key={sup.id}>{sup.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} controlId="formGridState">
            <Form.Label className='ms-1 font-weight-bold'>Product Category</Form.Label>
            <Form.Select
              ref={productCategoryRef}
              defaultValue={stock.productCategory}
            >
              <option>Choose Product Category</option>
              {productCategoryList.map((category) => (
                <option key={category.id}>{category.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} controlId="formGridState">
            <Form.Label className='ms-1 font-weight-bold'>Product Name</Form.Label>
            <Form.Select ref={productNameRef} defaultValue={stock.productName}>
              <option>Choose product</option>
              {productNameList.map((name) => (
                <option key={name.id}>{name.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className='ms-1 font-weight-bold'>Product Quantity</Form.Label>
              <Form.Control
                ref={productQuantityRef}
                defaultValue={stock.productQuantity}
                type="text"
                placeholder="Product Quantity"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className='ms-1 font-weight-bold'>Product Unit Price</Form.Label>
              <Form.Control
                ref={productUnitPriceRef}
                defaultValue={stock.productUnitPrice}
                type="text"
                placeholder="Product Unit Price"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className='ms-1 font-weight-bold'>Product Total Price</Form.Label>
              <Form.Control
                ref={productTotalPriceRef}
                defaultValue={stock.productTotalPrice}
                type="text"
                placeholder="Product Total Price"
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateStock;
