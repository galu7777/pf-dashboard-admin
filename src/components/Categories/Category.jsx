import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Categories.module.css"

function Category (props) {

    return (
        <ListGroup.Item action variant="light" className={style.userContainer}>
                <h5 className={style.userId}>{props.id}</h5>
                <div className={style.imageDiv}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKDHjOS7DtL_t35dplixSlxRm4QPWKUaYdA&usqp=CAU" className={style.userImage} alt="image" />
                    <h5>{props.name}</h5>
                </div>
                <h5>Estado</h5>
                    <i class={`bi bi-check-circle ${style.check}`}></i>
        </ListGroup.Item>
    )
}

export default Category;