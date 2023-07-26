
import { Container, Row, Table } from 'react-bootstrap';

import ProductIdFilter from '../Filters/ProductsFilters/ProductIdFilter';
import ProductNameFilter from '../Filters/ProductsFilters/ProductNameFilter';
import CategoryFilter from '../Filters/ProductsFilters/CategoryFilter';
import ProductStatusFilter from '../Filters/ProductsFilters/ProductStatusFilter';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PaginationComponent from '../Pagination/Pagination';
import RestartFilters from '../Filters/ProductsFilters/RestartFilters';

import style from "./Products.module.css";

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
        <div className={style.restar}>
        <ProductStatusFilter onChange={handleFilterChange} />
          <RestartFilters />
        </div>
      <Table striped bordered hover table-bordered>
        <thead>
          <tr>
            <th><ProductIdFilter /></th>
            <th><ProductNameFilter /></th>
            <th>Precio</th>
            <th><CategoryFilter onChange={handleFilterChange} /></th>
            {/* <th><ProductStatusFilter onChange={handleFilterChange} /></th>
            <th><RestartFilters /></th> */}
          </tr>
        </thead>
        <tbody>
  {currentProducts.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td> <img src={product.image} alt={product.name} style={{ width: '50px' }} /> {product.name} </td>
      <td>{product.price}</td>
      <td>{product.category}</td>
      {/* Filtrar por estado de venta */}
      {/* <td>Filtrar por estado de venta</td> */}
      {/* Otras columnas si las tienes */}
    </tr>
  ))}
</tbody>
      </Table>
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