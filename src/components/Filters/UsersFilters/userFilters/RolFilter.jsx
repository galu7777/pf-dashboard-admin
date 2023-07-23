import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function RolFilter () {
    return (
    <DropdownButton variant='transparent' title="Filtrar por rol">
      <Dropdown.Item href="#/action-1" variant="secondary">Administardor</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Cliente</Dropdown.Item>
    </DropdownButton>
    )
}

export default RolFilter;