import ProductDetails from "./ProductDetails/ProductDetails";
import { Col, Row } from "react-bootstrap";
import useStocks from "../../../hooks/useStocks";
import Slider from "./Slider/Slider";

const Home = () => {
  const [stocks] = useStocks();

  return (
    <>
      <Slider></Slider>

      <div className="container mt-5">
        <Row className="">
          {stocks.slice(0,6).map((stock) => (
            <Col key={stock._id} className="g-3" lg={4}>
              <ProductDetails key={stock._id} stock={stock}></ProductDetails>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
