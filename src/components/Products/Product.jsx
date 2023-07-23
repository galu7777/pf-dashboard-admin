import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Products.module.css"

function Product () {
    let boolean = true;

    return (
        <div>
            <ListGroup.Item action variant={boolean ? "dark" : "light"} className={style.productContainer}>
                <h5 className={style.productId}>ID</h5>
                <div className={style.imageDiv}>
                    <img src="https://img.freepik.com/vector-gratis/pelota-baloncesto-aislada_1284-42545.jpg?w=2000" className={style.userImage}  alt="image" />
                    <h5>Nombre</h5>
                </div>
                <h5>Vendedor</h5>
                <h5>Precio</h5>
                <h5>Categoria</h5>
                <h5>EDV</h5>
                    <h5>Editar</h5>
                    <i class={`bi bi-check-circle ${style.checkyt}`}></i>
            </ListGroup.Item>
        </div>
    )
}

export default Product;