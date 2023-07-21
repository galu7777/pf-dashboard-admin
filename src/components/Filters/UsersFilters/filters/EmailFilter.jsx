import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function EmailFilter () {
    return (
        <InputGroup className="mb-3">
            <Button variant="outline-secondary">Filtrar Email</Button>
            <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            />
        </InputGroup>
    )
}

export default EmailFilter;