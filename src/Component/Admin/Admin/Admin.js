import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Col, Row, Tab } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { createProvider } from "../../../App";
import Nabver from "../../Home/Nabver/Nabver";
import AddService from "../AddService/AddService";
import AllOrderList from "../AllOrderList/AllOrderList";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageService from "../ManageService/ManageService";

const Admin = () => {
  const [user] = useContext(createProvider);
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/admin?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setValue(data));
  }, [user.email]);
  return (
    <div className="container pt-3">
      {value.email === user.email ? (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link2">
          <Row>
            <Col sm={3}>
              <h5 className="text-center p-3">Admin Panel</h5>
              <ListGroup>
                <ListGroup.Item action variant="warning" href="#link1">
                  All Order List
                </ListGroup.Item>
                <ListGroup.Item action variant="warning" href="#link2">
                  Add Service
                </ListGroup.Item>
                <ListGroup.Item action variant="warning" href="#link3">
                  Make Admin
                </ListGroup.Item>
                <ListGroup.Item action variant="warning" href="#link4">
                  Manage Service
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <AllOrderList></AllOrderList>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <AddService></AddService>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <MakeAdmin></MakeAdmin>
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                  <ManageService></ManageService>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      ) : (
        <div>
          <Nabver></Nabver>
          <h1 className="text-center text-danger">
            Do not allow the general user, just see the page details admin...
          </h1>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default Admin;
