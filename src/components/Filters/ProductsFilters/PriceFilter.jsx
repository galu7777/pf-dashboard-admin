import { Dropdown, Form } from 'react-bootstrap';
import style from "../Filters.module.css"

function PriceFilter () {
    return (
        <Dropdown>
          <Dropdown.Toggle variant="transparent">
            Precio
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className={style.priceInputs}>
                <Form.Control
                type="number"
                placeholder="Precio minimo"
                />
                <Form.Control
                type="number"
                placeholder="Precio maximo"
                />
            </div>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="opcion1">A-Z</Dropdown.Item>
            <Dropdown.Item eventKey="opcion2">Z-A</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    )
}

export default PriceFilter;