import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Products.module.css"
import { Col, Container, Row } from 'react-bootstrap';
import Product from './Product';
import ProductIdFilter from '../Filters/ProductsFilters/ProductIdFilter';
import ProductNameFilter from '../Filters/ProductsFilters/ProductNameFilter';
import PriceFilter from '../Filters/ProductsFilters/PriceFilter';
import CategoryFilter from '../Filters/ProductsFilters/CategoryFilter';
import ProductStatusFilter from '../Filters/ProductsFilters/ProductStatusFilter';

function Products () {
    return (
      <Container>
      <Row className={style.title}>
          <Col xs={2} className={style.guide}>
            <ProductIdFilter />
            <ProductNameFilter />
              <h4>Vendedor</h4>
              <PriceFilter />
              <CategoryFilter />
              <ProductStatusFilter />
          </Col>
      </Row>     
      <ListGroup>
          {/* Maximo 8 clientes por pagina */}
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </ListGroup>
      {/* <Row>
          <Col>
          <ProductsFilters />
          </Col>
      </Row> */}
  </Container>
    )
}

export default Products;