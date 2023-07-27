
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Table } from 'react-bootstrap';
import User from './User';
import { useSelector } from 'react-redux';
import IdFilter from '../Filters/UsersFilters/userFilters/IdFilter';
import UserNameFilter from '../Filters/UsersFilters/userFilters/UserNameFilter';
import { useState } from 'react';
import PaginationComponent from '../Pagination/Pagination';

function Users () {
    const users = useSelector(state => state.users)
    const idSorted = useSelector(state => state.userIdSort)
    const userNameSort = useSelector(state => state.userNameSort)

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    
    const applyFilters = (nameOrder, idOrder, arr) => {
        const nameSortedArray = arr.slice().sort((a, b) => {
                if (nameOrder === "a-z") {
                      return a.full_name.localeCompare(b.full_name);
                    } else if (nameOrder === "z-a") {
                            return b.full_name.localeCompare(a.full_name);
                        } else {
                                return 0;
            }
        });
        
        const idSortedArray = nameSortedArray.sort((a, b) => {
            if (idOrder === "asc") {
                return a.id - b.id;
            } else if (idOrder === "des") {
                return b.id - a.id;
            } else {
                return 0;
            }
        });
        
        return idSortedArray;
    };
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = applyFilters(userNameSort,idSorted,users).slice(indexOfFirstItem, indexOfLastItem);

    return (
<Container >
    <Row className={style.title}>
        <Col xs={2} >
            <IdFilter setCurrentPage={setCurrentPage}/>
            <UserNameFilter setCurrentPage={setCurrentPage}/>
        </Col>
    </Row>     
    <ListGroup>
      {currentUsers.map((user) => (
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
      ))}
    </ListGroup>
     <Row>
        <PaginationComponent 
        currentPage={currentPage}
        totalPages={Math.ceil(users.length / itemsPerPage)}
        onPageChange={setCurrentPage}
        /> 
      </Row>
</Container>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps, null)(Users);