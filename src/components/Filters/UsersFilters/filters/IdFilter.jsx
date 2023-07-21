import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function IdFilter () {
    const [ id, setId ] = useState("");

    const handleInput = (e) => {
        const { value } = e.target;
        setId(value)
    }

    return (
        <InputGroup className="mb-3">
            <Button variant="outline-secondary">Filtrar por ID</Button>
            <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            onChange={handleInput}
            />
      </InputGroup>
    )
}

export default IdFilter;