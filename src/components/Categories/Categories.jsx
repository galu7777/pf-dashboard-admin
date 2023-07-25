import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Categories.module.css"
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from "react-redux";
import Category from "./Category"
import PaginationComponent from '../Pagination/Pagination';
import { useState } from 'react';

function Categories (){
    const categories = useSelector(state => state.categories)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCategories = categories.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <Container >
            <Row className={style.title}>
                <Col xs={2} className={style.guide}>
                </Col>
            </Row>     
            <ListGroup>
                {currentCategories.map((category) => (
                    <Category
                    id={category.id}
                    name={category.name}
                    />
                ))}
            </ListGroup>
            <Row>
                <PaginationComponent 
                currentPage={currentPage}
                totalPages={Math.ceil(categories.length / itemsPerPage)}
                onPageChange={setCurrentPage}
                />
            </Row>
        </Container>
    )
}

export default Categories