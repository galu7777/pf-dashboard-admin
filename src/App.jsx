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
import { useDispatch } from 'react-redux';
import { getAllCategories, getAllProducts, getAllUsers } from './redux/actions';
import Categories from './components/Categories/Categories';
import PostCategory from './components/PostCategory/PostCategory';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-3">
            <AdminBar />
          </div>
          <div className="col-8 fondo">
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path='/products' element={<Products />} />
              <Route path='/categories' element={<Categories />}/>
              <Route path='/post-category' element={<PostCategory />}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
