import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Users.module.css"
import { putUsers } from '../../redux/actions';

function User ({ id, full_name, email, status, role, image }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let boolean = false;
    
    const rol = role === 1 ? "usuario" : "admin";
    const estado = status === 1 ? "habilitado" : "inhabilitado";
    const estadoAlert = estado === "inhabilitado" ? "habilitado" : "inhabilitado";
    
    const handleButton = (value) => {
        const stringNum = String(value)
        const updateUsers = {
            status: stringNum
        }
        console.log(updateUsers)
        dispatch(putUsers(id, updateUsers))
        alert(`el usuario ${full_name} a sido ${estadoAlert}`)
        navigate('/home')   
    }

    return (
        <div>
            <ListGroup.Item action variant={boolean ? "dark" : "light"} className={style.userContainer}>
                <h5 className={style.userId}>{id}</h5>
                <div className={style.imageDiv}>
                    <img src={image} className={style.userImage} alt="image" />
                    <h5>{full_name}</h5>
                </div>
                <h5>{email}</h5>
                <h5>{rol}</h5>
                <h5>{estado}</h5>
                {
                    status == 1
                        ? 
                        <button onClick={() => handleButton(0)}>
                        <i className={`bi bi-check-circle p-2`}></i>
                        </button> 
                        : 
                        <button onClick={() => handleButton(1)}>
                        <i className="bi bi-dash-circle"></i>
                        </button>
                }
            </ListGroup.Item>
        </div>
    )
}

export default User;