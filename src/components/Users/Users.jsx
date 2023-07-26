import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Users.module.css"
import { Col, Container, Row } from 'react-bootstrap';
import User from './User';
import RolFilter from '../Filters/UsersFilters/userFilters/RolFilter';
import IdFilter from '../Filters/UsersFilters/userFilters/IdFilter';
import UserNameFilter from '../Filters/UsersFilters/userFilters/UserNameFilter';
import EmailFilter from '../Filters/UsersFilters/userFilters/EmailFilter';
import StateFilter from '../Filters/UsersFilters/userFilters/StateFilter';
import { connect } from 'react-redux';

function Users ({ users }) {
    return (
        <Container fluid>
            <Row className="d-flex align-items-center">
                <Col xs={6} sm={4} md={2}>
                    <IdFilter />
                </Col>
                <Col xs={6} sm={4} md={2}>                    
                    <UserNameFilter />
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <EmailFilter />
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <RolFilter />
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <StateFilter />
                </Col>
            </Row>     
            <ListGroup>
                {/* Maximo 10 clientes por pagina */}
            {
                users.map((user) => (
                    <User
                        key={user.id}
                        id={user.id}
                        full_name={user.full_name}
                        email={user.email}
                        password={user.password}
                        phone={user.phone}
                        direction_shipping={user.direction_shipping}
                        status={user.status}
                        role={user.role}
                    />
                ))
            }     
            </ListGroup>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps, null)(Users);