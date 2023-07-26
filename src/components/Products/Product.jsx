import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Products.module.css";
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { putProducts } from '../../redux/actions';

function Product({ id, name, image, category, price, status }) {
  const dispatch = useDispatch();
  const estado = status === 1 ? "habilitado" : "inhabilitado";
  const estadoAlert = estado === "inhabilitado" ? "habilitado" : "inhabilitado";
  const Category = category[0].name;

  const handleButton = (value) => {
    const stringNum = String(value)
    const updateProducts = {
        status: stringNum
    }
    console.log(updateProducts)
    dispatch(putProducts(id, updateProducts))
    alert(`el producto "${name}" a sido ${estadoAlert}`)   
  }




  return (
    // <div>
    //   <ListGroup.Item action variant="light" className="d-flex">
    //     <Col className="p-2">{id}</Col>
    //     <Col className={style.imageDiv}>
    //       <img src={image} className={style.userImage} alt="image" />
    //       <Col className="p-2" style={{ whiteSpace: 'nowrap' }}>{name}</Col>
    //     </Col>
    //     <Col className="p-2">${price}</Col>
    //     <Col className="p-2">{category}</Col>
    //     <Col className="p-2">EDV</Col>

    //     {
    //       status === 1
    //         ? 
    //         <button onClick={() => handleButton(0)}>
    //           <i className={`bi bi-check-circle p-2`}></i>
    //         </button> 
    //         : 
    //         <button onClick={() => handleButton(1)}>
    //           <i className="bi bi-dash-circle"></i>
    //         </button>
    //     }

    //   </ListGroup.Item>
    // </div>
    <tr>
        <td>{id}</td>
        <td> <img src={image} alt={name} style={{ width: '50px' }} /> {name} </td>
        <td>{price}</td>
        {/* <td>{category}</td> */}
        {/* Filtrar por estado de venta */}
        {/* <td>Filtrar por estado de venta</td> */}
        {/* Otras columnas si las tienes */}
        <td>{Category}</td>
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
  )
}

export default Product;
