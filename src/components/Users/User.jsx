import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Users.module.css"

function User (props) {
    let boolean = false;

    return (
        <div>
            <ListGroup.Item action variant={boolean ? "dark" : "light"} className={style.userContainer}>
                <h5 className={style.userId}>{props.id}</h5>
                <div className={style.imageDiv}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKDHjOS7DtL_t35dplixSlxRm4QPWKUaYdA&usqp=CAU" className={style.userImage} alt="image" />
                    <h5>{props.name}</h5>
                </div>
                <h5>{props.email}</h5>
                <h5>{props.rol}</h5>
                <h5>{props.state}</h5>
                    <h5>Editar</h5>
                    <i class={`bi bi-check-circle ${style.check}`}></i>
            </ListGroup.Item>
        </div>
    )
}

export default User;