import { Button, Container, Form } from "react-bootstrap";
import style from "./PostCategories.module.css"

function PostCategory () {



    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar el formulario
        console.log('Formulario enviado');
      };

    return (
        <>
            <Container className={`d-flex justify-content-center ${style.container}`}>
              <Form onSubmit={handleSubmit} style={{ maxWidth: '800px' }}>
                <h1 className={`d-flex justify-content-center ${style.container}`}>Crear Categoria</h1>
                <hr />
                <Form.Group controlId="formName">
                  
                  <Form.Control
                    type="text" 
                    placeholder="Nombre de la Categoria"
                                   
                  />
                  
                </Form.Group>
                <Form.Text muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
                </Form.Text>

               
                    <br></br>
                <Form.Select>
                    <option>Activo</option>
                    <option>Inactivo</option>
                </Form.Select>
        
                <br></br>
            
                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </Container>
            <br></br>
            <footer className={`d-flex justify-content-center ${style.container}`}>
                <div>
                    <p>&copy; 2023 Mi Empresa. Todos los derechos reservados.</p>
                </div>
            </footer>
        </>
          );
}

export default PostCategory;