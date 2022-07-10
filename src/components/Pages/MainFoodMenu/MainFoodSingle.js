import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainFoodSingle = ({ data }) => {
  return (
    <Col md={4} className="mb-5">
      <Card>
        <Card.Img variant="top" height={400} src={data.image} />
        <Card.Body>
          <Card.Title className="text-uppercase">{data.foodname}</Card.Title>
          <Card.Text className="fw-bold fs-4">{data.price} $</Card.Text>
          <Link to={`/menu/${data.product_id}`}>
            {" "}
            <Button variant="primary">Buy Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MainFoodSingle;
