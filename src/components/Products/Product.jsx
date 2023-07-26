import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Products.module.css";
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { putProducts } from '../../redux/actions';

function Product(props) {
  const dispatch = useDispatch();
  const id = props.id;
  
  const handleButton = (value) => {
    const stringNum = String(value)
    const updateProducts = {
        status: stringNum
    }
    console.log(updateProducts)
    dispatch(putProducts(id, updateProducts))   
  }




  return (
    <div>
      <ListGroup.Item action variant="light" className="d-flex">
        <Col className="p-2">{props.id}</Col>
        <Col className={style.imageDiv}>
          <img src={props.image} className={style.userImage} alt="image" />
          <Col className="p-2" style={{ whiteSpace: 'nowrap' }}>{props.name}</Col>
        </Col>
        <Col className="p-2">${props.price}</Col>
        <Col className="p-2">{props.category}</Col>
        <Col className="p-2">EDV</Col>
        {
          props.status == 1
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

export default Product;
