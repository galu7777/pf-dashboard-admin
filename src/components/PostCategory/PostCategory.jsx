import { Container, Form } from "react-bootstrap";
import style from "./PostCategories.module.css";

function PostCategory () {
    return (
        <div>
            <h1>Crear categoria</h1>
            <Form>
                <Form.Label htmlFor="inputPassword5">Nombre</Form.Label>
                <Form.Control
                type="text"
                />
                <Form.Text muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
                </Form.Text>
                <Form.Select>
                    <option>Activo</option>
                    <option>Inactivo</option>
                </Form.Select>
            </Form>
        </div>
    )
}

export default PostCategory;