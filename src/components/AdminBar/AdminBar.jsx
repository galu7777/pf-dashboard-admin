import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Sidebar from './SideBar';
import style from "./adminBar.module.css";
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

function AdminBar () {
    return (
        <Navbar expand="lg" className={`flex-grow-1 ${style.container}`}>
      <Container className="flex-column">

          <Link to="/home" className={style.text}>
            Página principal
          </Link>
          
          <Link to="/users" className={style.text}>
            Usuarios
          </Link>
          
          <Link to="/products" className={style.text}>
            Productos
          </Link>
          
          <Link to="/categories" className={style.text}>
            Categorias
          </Link>
          
          <Link to="/post-category" className={style.text}>
            Crear Categoria
          </Link>

      </Container>
    </Navbar>
    )
}

export default AdminBar;