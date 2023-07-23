import React, { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';

function EmailFilter () {
    const [selectedOption, setSelectedOption] = useState(''); // Estado para almacenar la opción seleccionada

    const handleOptionSelect = (eventKey, event) => {
      setSelectedOption(eventKey);
    };
    return (
    <Dropdown onSelect={handleOptionSelect}>
      <Dropdown.Toggle variant="transparent">
        Email
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

export default EmailFilter;