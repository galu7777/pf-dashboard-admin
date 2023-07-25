import { useEffect } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Users from './components/Users/Users';
import AdminBar from './components/AdminBar/AdminBar';
import Products from './components/Products/Products';
import PostProduct from './components/PostProduct/PostProduct';
import BannedUsers from './components/BannedUsers/BannedUsers';
import { useDispatch } from 'react-redux';
import { getAllProducts } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
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
              <Route path="/post-product" element={<PostProduct />} />
              <Route path='/banned-users' element={<BannedUsers />}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
