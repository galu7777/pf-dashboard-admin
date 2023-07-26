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