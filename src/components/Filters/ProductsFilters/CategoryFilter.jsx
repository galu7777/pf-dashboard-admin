import { Dropdown, Form } from 'react-bootstrap';

function CategoryFilter () {
    return (
    <Dropdown>
        <Dropdown.Toggle variant="transparent">
            Categorias
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Form.Check 
        aria-label="option 1" 
        label="Categoria 1"
        />
        <Form.Check 
        aria-label="option 1" 
        label="Categoria 2"
        />
        <Form.Check 
        aria-label="option 1" 
        label="Categoria 3"
        />
        </Dropdown.Menu>
      </Dropdown>
    )
}

export default CategoryFilter;