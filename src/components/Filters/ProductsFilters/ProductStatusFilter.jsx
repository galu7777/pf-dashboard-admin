import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function ProductStatusFilter () {
    return (
    <DropdownButton variant='transparent' title="Filtrar por estado de venta">
      <Dropdown.Item href="#/action-1" variant="secondary">Estado 1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Estado 2</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Estado 3</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Estado 4</Dropdown.Item>
    </DropdownButton>
    )
}

export default ProductStatusFilter;