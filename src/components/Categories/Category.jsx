import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Categories.module.css"
import { Col, Container, Row } from 'react-bootstrap';

function Category (props) {

    return (
        <ListGroup.Item action variant="light" className="d-flex">
                <Col className={style.userId}>{props.id}</Col>
                <Col>{props.name}</Col>
                <Col>Estado</Col>
                <i class={`bi bi-check-circle ${style.check}`}></i>
        </ListGroup.Item>
    )
}

export default Category;