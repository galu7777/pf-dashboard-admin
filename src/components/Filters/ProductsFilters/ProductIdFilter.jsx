import React, { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';

function ProductIdFilter () {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (eventKey, event) => {
      setSelectedOption(eventKey);
    };
    return (
    <Dropdown onSelect={handleOptionSelect}>
      <Dropdown.Toggle variant="transparent">
        ID
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Form.Control
          type="text"
          placeholder="Escribe aquí"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
      </Dropdown.Menu>
    </Dropdown>
    )
}

export default ProductIdFilter;