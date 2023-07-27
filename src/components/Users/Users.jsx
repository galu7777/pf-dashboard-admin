
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Table } from 'react-bootstrap';
import User from './User';
import RolFilter from '../Filters/UsersFilters/userFilters/RolFilter';
import IdFilter from '../Filters/UsersFilters/userFilters/IdFilter';
import UserNameFilter from '../Filters/UsersFilters/userFilters/UserNameFilter';
import EmailFilter from '../Filters/UsersFilters/userFilters/EmailFilter';
import StateFilter from '../Filters/UsersFilters/userFilters/StateFilter';
import { connect } from 'react-redux';
import style from "./Users.module.css"

function Users ({ users }) {
    return (
        <Container fluid>
            {/* <div className={style.restar}>
                <IdFilter />
                <UserNameFilter />
                <EmailFilter />
                <RolFilter />
                <StateFilter />
            </div>     */}
            <Table striped bordered hover table-bordered>
                <thead>
                    <tr>
                    {/* <th><ProductIdFilter setCurrentPage={setCurrentPage}/></th>
                    <th><ProductNameFilter setCurrentPage={setCurrentPage}/></th> */}
                    <th><IdFilter /></th>
                    <th><UserNameFilter /></th>
                    <th><EmailFilter /></th>
                    <th><RolFilter /></th>
                    <th><StateFilter /></th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
        </Table>
        </Container>

    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps, null)(Users);