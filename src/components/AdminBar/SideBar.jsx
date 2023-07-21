import React from 'react';
import { Nav } from 'react-bootstrap';
import style from "./adminBar.module.css";


const Sidebar = () => {
  return (
    <div >
      <Nav defaultActiveKey="/home" >
        <Nav.Link href="/dashboard" className={style.text}>Página principal</Nav.Link>
        <Nav.Link href="/users" className={style.text}>Usuarios</Nav.Link>
        <Nav.Link href="/products" className={style.text}>Productos</Nav.Link>
        <Nav.Link className={style.text}>Usuarios baneados</Nav.Link>
        {/* Agrega más enlaces de navegación aquí */}
      </Nav>
    </div>
  );
};

export default Sidebar;