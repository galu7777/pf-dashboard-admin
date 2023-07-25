import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Products.module.css";
import Col from 'react-bootstrap/Col';

function Product (props) {
    return (
        <div>
            <ListGroup.Item action variant="light" className="d-flex">
                <Col className="p-2">{props.id}</Col>
                <Col className={style.imageDiv}>
                    <img src={props.image} className={style.userImage}  alt="image" />
                    <Col className="p-2">{props.name}</Col>
                </Col>
                <Col className="p-2">${props.price}</Col>
                <Col className="p-2">{props.category}</Col>
                <Col className="p-2">EDV</Col>
                    <i class={`bi bi-check-circle ${style.checkyt}`}></i>
            </ListGroup.Item>
        </div>
    )
}

export default Product;