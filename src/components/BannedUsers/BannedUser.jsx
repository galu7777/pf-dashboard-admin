import ListGroup from 'react-bootstrap/ListGroup';
import style from "./BannedUsers.module.css"

function BannedUser () {
    let boolean = "light";
    return (
        <div>
            <ListGroup.Item action variant={boolean ? "dark" : "light"} className={style.userContainer}>
                <h5 className={style.userId}>ID</h5>
                <div className={style.imageDiv}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKDHjOS7DtL_t35dplixSlxRm4QPWKUaYdA&usqp=CAU" className={style.userImage} alt="image" />
                    <h5>Nombre</h5>
                </div>
                <h5>Email</h5>
                <h5>Rol</h5>
                <h5>Estado</h5>
                    <h5>Editar</h5>
                    <i class={`bi bi-check-circle ${style.check}`}></i>
            </ListGroup.Item>
        </div>
    )
}

export default BannedUser;