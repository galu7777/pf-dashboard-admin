import React from 'react';
import { Nav } from 'react-bootstrap';
import style from "./adminBar.module.css";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div>
      <Nav defaultActiveKey="/home" className={style.textContainer}>
        <Nav.Link>
          <Link to="/home" className={style.text}>
            Página principal
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/users" className={style.text}>
            Usuarios
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/products" className={style.text}>
            Productos
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/categories" className={style.text}>
            Categorias
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/banned-users" className={style.text}>
            Usuarios baneados
          </Link>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;