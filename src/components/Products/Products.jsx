import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Container, Row } from 'react-bootstrap';
import Product from './Product';
import ProductIdFilter from '../Filters/ProductsFilters/ProductIdFilter';
import ProductNameFilter from '../Filters/ProductsFilters/ProductNameFilter';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PaginationComponent from '../Pagination/Pagination';
import RestartFilters from '../Filters/ProductsFilters/RestartFilters';

function Products () {
  const products = useSelector((state) => state.products);
  const idSorted = useSelector((state) => state.productIdSort)
  const productNameSort = useSelector(state => state.productNameSort)

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

const handleFilterChange = () => {
  setCurrentPage(1);
};

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = applyFilters(productNameSort, idSorted, products).slice(indexOfFirstItem, indexOfLastItem);

    return (
      <Container fluid>
      <Row className="d-flex align-items-center">
        <Col xs={6} sm={4} md={2}>
          <ProductIdFilter setCurrentPage={setCurrentPage}/>
        </Col>
        <Col xs={6} sm={4} md={2}>
          <ProductNameFilter setCurrentPage={setCurrentPage}/>
        </Col>
        <Col xs={6} sm={4}>
          Precio
        </Col>
        <Col xs={6} sm={4} md={2}>
          <h6>categories</h6>
        </Col>
        <Col xs={6} sm={4} md={2}>
        </Col>
        <Col xs={6} sm={4} md={2}>
          <RestartFilters />
        </Col>
      </Row>
      <ListGroup>
        {
          currentProducts.map((product) => (
            <Product
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            category={product.category}
            status={product.status}
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