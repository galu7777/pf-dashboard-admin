import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Products.module.css"
import { Col, Container, Row } from 'react-bootstrap';
import Product from './Product';
import ProductIdFilter from '../Filters/ProductsFilters/ProductIdFilter';
import ProductNameFilter from '../Filters/ProductsFilters/ProductNameFilter';
import CategoryFilter from '../Filters/ProductsFilters/CategoryFilter';
import ProductStatusFilter from '../Filters/ProductsFilters/ProductStatusFilter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../redux/actions';
import PaginationComponent from '../Pagination/Pagination';
import RestartFilters from '../Filters/ProductsFilters/RestartFilters';

function Products () {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const idSorted = useSelector((state) => state.productIdSort)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const arrFiltered = (arr) => {
    if(idSorted === "asc"){
        return arr.sort((a, b) => a.id - b.id);
    }
    if(idSorted === "des"){
        return arr.sort((a, b) => b.id - a.id);
    }
    return arr;
}

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = arrFiltered(products).slice(indexOfFirstItem, indexOfLastItem);

    return (
      <Container>
      <Row className={style.title}>
          <Col xs={2} className={style.guide}>
            <ProductIdFilter />
            <ProductNameFilter />
              <h4>Vendedor</h4>
              <h4>Precio</h4>
              <CategoryFilter />
              <ProductStatusFilter />
              <RestartFilters />
          </Col>
      </Row>     
      <ListGroup>
        {
            currentProducts.map((product) => (
            <Product
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            category={product.category}
            />
          ))
        }
      </ListGroup>
      <Row>
        <PaginationComponent 
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / itemsPerPage)}
        onPageChange={setCurrentPage}
        /> 
      </Row>
  </Container>
    )
}

export default Products;