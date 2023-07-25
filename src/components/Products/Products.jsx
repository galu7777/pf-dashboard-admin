import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Products.module.css"
import { Col, Container, Row } from 'react-bootstrap';
import Product from './Product';
import ProductIdFilter from '../Filters/ProductsFilters/ProductIdFilter';
import ProductNameFilter from '../Filters/ProductsFilters/ProductNameFilter';
import CategoryFilter from '../Filters/ProductsFilters/CategoryFilter';
import ProductStatusFilter from '../Filters/ProductsFilters/ProductStatusFilter';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PaginationComponent from '../Pagination/Pagination';
import RestartFilters from '../Filters/ProductsFilters/RestartFilters';

function Products () {
  const products = useSelector((state) => state.products);
  const idSorted = useSelector((state) => state.productIdSort)
  const productNameSort = useSelector(state => state.productNameSort)
  let boolean = true;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const applyFilters = (nameOrder, idOrder, arr) => {
    const nameSortedArray = arr.slice().sort((a, b) => {
        if (nameOrder === "a-z") {
            return a.name.localeCompare(b.name);
        } else if (nameOrder === "z-a") {
            return b.name.localeCompare(a.name);
        } else {
            return 0;
        }
    });

    const idSortedArray = nameSortedArray.sort((a, b) => {
        if (idOrder === "asc") {
            return a.id - b.id;
        } else if (idOrder === "des") {
            return b.id - a.id;
        } else {
            return 0;
        }
    });

    return idSortedArray;
};



  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = applyFilters(productNameSort, idSorted, products).slice(indexOfFirstItem, indexOfLastItem);
  console.log(products)

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
            boolean={!boolean}
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