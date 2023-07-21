import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Users from './components/Users/Users';
import AdminBar from './components/AdminBar/AdminBar';
import Products from './components/Products/Products';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <AdminBar />
          </div>
          <div className="col-10">
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path='/products' element={<Products />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
