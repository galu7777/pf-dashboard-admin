import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Container, Row } from 'react-bootstrap';
import RolFilter from '../Filters/UsersFilters/userFilters/RolFilter';
import IdFilter from '../Filters/UsersFilters/userFilters/IdFilter';
import UserNameFilter from '../Filters/UsersFilters/userFilters/UserNameFilter';
import EmailFilter from '../Filters/UsersFilters/userFilters/EmailFilter';
import StateFilter from '../Filters/UsersFilters/userFilters/StateFilter';
import BannedUser from './BannedUser';
import style from "./BannedUsers.module.css"

function BannedUsers () {
    return (
        <Container fluid >
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
              <BannedUser/>
              <BannedUser/>
              <BannedUser/>
              <BannedUser/>
              <BannedUser/>
              <BannedUser/>
              <BannedUser/>
              <BannedUser/>
              <BannedUser/>
              <BannedUser/>
            </ListGroup>
        </Container>
            )
}

export default BannedUsers;