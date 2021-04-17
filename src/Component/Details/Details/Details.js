import React from "react";
import { Col, ListGroup, Row, Tab } from "react-bootstrap";
import BookService from "../BookService/BookService";
import OrderList from "../OrderList/OrderList";
import Review from "../Review/Review";

const Details = () => {
  return (
    <div className="container">
      <Tab.Container id="list-group-tabs-example " defaultActiveKey="#link1">
        <Row>
          <Col sm={3}>
            <h4 className="p-4 text-success">View User Details</h4>
            <ListGroup className="bg-success">
              <ListGroup.Item action variant="warning" href="#link1">
                Service Add
              </ListGroup.Item>
              <ListGroup.Item action variant="warning" href="#link2">
                Total service
              </ListGroup.Item>
              <ListGroup.Item action variant="warning" href="#link3">
                Review
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <BookService></BookService>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <OrderList></OrderList>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <Review></Review>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Details;
