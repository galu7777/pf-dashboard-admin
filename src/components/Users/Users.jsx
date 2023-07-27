import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Users.module.css"
import { Col, Container, Row, Table } from 'react-bootstrap';
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
        
        <Table striped bordered hover table-bordered>
          <thead>
            <tr>
              <th><IdFilter /></th>
              <th><UserNameFilter /></th>
              <th><EmailFilter /></th>
              <th><RolFilter /></th>
              <th><StateFilter /></th>
              {/* <th><ProductStatusFilter onChange={handleFilterChange} /></th>
              <th><RestartFilters /></th> */}
            </tr>
          </thead>
          <tbody>
          {users.map((user) => (
                
                <tr  key={user.id} >
                 <td> {user.id} </td>
                 <td> {user.image} {user.name} </td>
                 <td> {user.email} </td>
                 <td> {user.role} </td>
                 <td> {user.status} </td>
                  </tr>
                
              ))}
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