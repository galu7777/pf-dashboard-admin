import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Products.module.css"

function Product (props) {
    return (
        <div>
            <ListGroup.Item action variant="light" className={style.productContainer}>
                <h5 className={style.productId}>{props.id}</h5>
                <div className={style.imageDiv}>
                    <img src="https://img.freepik.com/vector-gratis/pelota-baloncesto-aislada_1284-42545.jpg?w=2000" className={style.userImage}  alt="image" />
                    <h5>{props.name}</h5>
                </div>
                <h5>Vendedor</h5>
                <h5>${props.price}</h5>
                <h5>{props.category}</h5>
                <h5>EDV</h5>
                    <i class={`bi bi-check-circle ${style.checkyt}`}></i>
            </ListGroup.Item>
        </div>
    )
}

export default Product;