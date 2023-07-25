import { Dropdown, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function CategoryFilter () {
    const categories = useSelector(state => state.categories)

    return (
    <Dropdown>
        <Dropdown.Toggle variant="transparent">
            Categorias
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {categories.map((category) => (
                <Form.Check 
                label={category.name}
                />

            ))}
        </Dropdown.Menu>
      </Dropdown>
    )
}

export default CategoryFilter;