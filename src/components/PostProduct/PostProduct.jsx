import { Form, Button } from "react-bootstrap";
import "./PostProduct.style.css"

function PostProduct () {
    return (
        <div>
          <div className="createContainer">
            <Form className="formContainer" >
              <h1>Crear tu Producto</h1>
              <Form.Group >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                //   value={input.name}
                //   onChange={handleChange}
                  placeholder="Nombre del producto"
                />
                {/* {error.name && <Form.Text className="text-danger">{error.name}</Form.Text>} */}
              </Form.Group>
    
              <Form.Group >
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                //   value={input.description}
                //   onChange={handleChange}
                  placeholder="Inserte aquí su descripción..."
                />
                {/* {error.description && <Form.Text className="text-danger">{error.description}</Form.Text>} */}
              </Form.Group>
    
              <Form.Group >
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                //   value={input.price}
                //   onChange={handleChange}
                  placeholder="Ej: 750.70"
                />
                {/* {error.price && <Form.Text className="text-danger">{error.price}</Form.Text>} */}
              </Form.Group>
    
              <Form.Group controlId="category">
                <Form.Label>Categoría</Form.Label>
                <Form.Control as="select" name="CategoryId">
                  <option value="nn">Seleccione un valor</option>
                  {/* {allCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))} */}
                </Form.Control>
                {/* {error.CategoryId && <Form.Text className="text-danger">{error.CategoryId}</Form.Text>} */}
              </Form.Group>
    
              <Form.Group >
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" name="image"  accept="image/*" />
                {/* {error.image && <Form.Text className="text-danger">{error.image}</Form.Text>} */}
              </Form.Group>
    
              <Form.Group >
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="number"
                  name="stock"
                //   value={input.stock}
                //   onChange={handleChange}
                  placeholder="65"
                />
                {/* {error.stock && <Form.Text className="text-danger">{error.stock}</Form.Text>} */}
              </Form.Group>
    
              <Form.Group >
                <Form.Label>Puntuación</Form.Label>
                <Form.Control
                  type="number"
                  name="rating"
                //   value={input.rating}
                //   onChange={handleChange}
                  placeholder="Ej: 4.5"
                />
                {/* {error.rating && <Form.Text className="text-danger">{error.rating}</Form.Text>} */}
              </Form.Group>
    
              <Button variant="primary" type="submit">
                Crear
              </Button>
              {/* {success && <p></p>} */}
            </Form>
          </div>
        </div>
      );
}

export default PostProduct;