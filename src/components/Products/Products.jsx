import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Products.module.css"
import { Col, Container, Row } from 'react-bootstrap';

function Products () {
    return (
        <div>
            <Container className={style.container}>
    <Row className={style.title}>
        <Col xs={2}>
            <h1>Productos</h1>
        </Col>
    </Row>     
    <ListGroup>
      <ListGroup.Item action variant="info">
        Info
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>
      <ListGroup.Item action variant="info">
        Info
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>
      <ListGroup.Item action variant="info">
        Info
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>
      <ListGroup.Item action variant="info">
        Info
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>
      <ListGroup.Item action variant="info">
        Info
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>
      <ListGroup.Item action variant="info">
        Info
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>
      {/* <ListGroup.Item action variant="dark">
        Dark
      </ListGroup.Item> */}
    </ListGroup>
</Container>
        </div>
    )
}

export default Products;