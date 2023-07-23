import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function StateFilter () {
    return (
    <DropdownButton variant='transparent' title="Filtrar por estado">
      <Dropdown.Item href="#/action-1" variant="secondary">Activo</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Inactivo</Dropdown.Item>
    </DropdownButton>
    )
}

export default StateFilter;