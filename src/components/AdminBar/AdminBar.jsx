import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './SideBar';
import style from "./adminBar.module.css";

function AdminBar () {
    return (
    <Container fluid>
      <Row className={style.container}>
        <Col xs={2}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
    )
}

export default AdminBar;