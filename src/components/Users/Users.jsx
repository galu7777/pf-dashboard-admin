import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Users.module.css"
import { Col, Container, Row } from 'react-bootstrap';
import User from './User';
import UsersFilters from '../Filters/UsersFilters/UsersFilters';

function Users () {
    return (
<Container className={style.container}>
    <Row className={style.title}>
        <Col xs={2} className={style.guide}>
            <h4>Id</h4>
            <h4>nombre</h4>
            <h4>Email</h4>
            <h4>Rol</h4>
            <h4>Estado</h4>
        </Col>
    </Row>     
    <ListGroup>
        {/* Maximo 8 clientes por pagina */}
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
    </ListGroup>
    <Row>
        <Col>
        <UsersFilters />
        </Col>
    </Row>
</Container>
    )
}

export default Users;