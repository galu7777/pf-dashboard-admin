import { useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Users.module.css"
import { getAllUsers, putUsers } from '../../redux/actions';
import Swal from 'sweetalert2';


function User({ id, full_name, email, status, role, image }) {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
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
        Swal.fire('El Cambio de Estado', `el usuario ${full_name} ha sido ${estadoAlert}`, 'success')
            .then((result) => {
                // Este código se ejecutará después de que el cuadro de diálogo se cierre.
                if (result.isConfirmed) {
                    dispatch(getAllUsers());
                }
            });
    }

    return (
        <div>
            {/* <ListGroup.Item action variant={boolean ? "dark" : "light"} className={style.userContainer}>
                <h5 className={style.userId}>{id}</h5>
                <div className={style.imageDiv}>
                    <img src={image} className={style.userImage} alt="image" />
                    <h5>{full_name}</h5>
                </div>
                <h5>{email}</h5>
                <h5>{rol}</h5>
                <h5>{estado}</h5>
                {
                    status === 1
                    ? 
                    <button onClick={() => handleButton(0)}>
                        <i className={`bi bi-check-circle p-2`}></i>
                        {estado}
                    </button> 
                    : 
                    <button onClick={() => handleButton(1)}>
                        <i className={`bi bi-dash-circle`}></i>
                        {estado}
                    </button>
                }
            </ListGroup.Item> */}
            <tr>
                <td>{id}</td>
                <td> <img src={image} alt={full_name} style={{ width: '50px' }} /> {full_name} </td>
                <td>{email}</td>
                {/* <td>{category}</td> */}
                {/* Filtrar por estado de venta */}
                {/* <td>Filtrar por estado de venta</td> */}
                {/* Otras columnas si las tienes */}
                <td>{rol}</td>
                <td>{estado}</td>
                <td>
                {
                    status === 1
                    ? 
                    <button onClick={() => handleButton(0)}>
                        <i className={`bi bi-check-circle p-2`}></i>
                        {estado}
                    </button> 
                    : 
                    <button onClick={() => handleButton(1)}>
                        <i className={`bi bi-dash-circle`}></i>
                        {estado}
                    </button>
                }
                </td>
            </tr>
        </div>
    )
}

export default User;
