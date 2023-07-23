import React, { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';

function ProductNameFilter () {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (eventKey, event) => {
      setSelectedOption(eventKey);
    };
    return (
    <Dropdown onSelect={handleOptionSelect}>
      <Dropdown.Toggle variant="transparent">
        Nombre
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Form.Control
          type="text"
          placeholder="Escribe aquí"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        <Dropdown.Divider />
        <Dropdown.Item eventKey="opcion1">A-Z</Dropdown.Item>
        <Dropdown.Item eventKey="opcion2">Z-A</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
}

export default ProductNameFilter;