import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Users.module.css"
import { Col, Container, Row } from 'react-bootstrap';
import User from './User';
import RolFilter from '../Filters/UsersFilters/userFilters/RolFilter';
import IdFilter from '../Filters/UsersFilters/userFilters/IdFilter';
import UserNameFilter from '../Filters/UsersFilters/userFilters/UserNameFilter';
import EmailFilter from '../Filters/UsersFilters/userFilters/EmailFilter';
import StateFilter from '../Filters/UsersFilters/userFilters/StateFilter';

function Users () {
    return (
<Container >
    <Row className={style.title}>
        <Col xs={2} className={style.guide}>
            <IdFilter />
            <UserNameFilter />
            <EmailFilter />
            <RolFilter />
            <StateFilter />
        </Col>
    </Row>     
    <ListGroup>
        {/* Maximo 10 clientes por pagina */}
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
    </ListGroup>
</Container>
    )
}

export default Users;