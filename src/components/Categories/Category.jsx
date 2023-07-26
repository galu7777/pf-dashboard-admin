import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Categories.module.css"
import { Col, Container, Row } from 'react-bootstrap';

function Category (props) {

    return (
        <ListGroup.Item action variant="light" className="d-flex align-items-center">
                <Col className="p-2">{props.id}</Col>
                <img className={style.userImage} src={props.image} alt="category image" />
                <Col className="p-2">{props.name}</Col>
                <Col className="p-2">Estado</Col>
                <i class={`bi bi-check-circle ${style.check}`}></i>
        </ListGroup.Item>
    )
}

export default Category;