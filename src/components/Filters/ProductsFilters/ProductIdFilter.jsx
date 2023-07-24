import React, { useEffect, useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import style from "../Filters.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { productIdFilter, productIdSort } from '../../../redux/actions';

function ProductIdFilter () {
    const [ selectedOption, setSelectedOption ] = useState(null);
    const [ input, setInput ] = useState("");
    const idFilter = useSelector(state => state.ProductIdFilter)
    const dispatch = useDispatch();

    const inputHandler = (e) => {
      const { value } = e.target;
      setInput(value)
    }

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      if(option === "asc"){
        dispatch(productIdSort(option))
      } else if (option === "des"){
        dispatch(productIdSort(option))
      }
    }

    const handleClick = (value) => {
      dispatch(productIdFilter(value))
    }

    console.log(idFilter)

    return (
    <Dropdown>
      <Dropdown.Toggle variant="transparent">
        ID
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <div className={style.idProductFilter}>
        <Form.Control
          type="number"
          placeholder="Escribe aquí"
          value={input}
          onChange={(e) => inputHandler(e)}
          />
          <button onClick={() => handleClick(input)}>
            <i class="bi bi-search" ></i>
          </button>
        </div>
      <Dropdown.Divider />
      <Dropdown.Item 
      active={selectedOption === 'asc'}
      onClick={() => handleOptionSelect('asc')}
      >Asc</Dropdown.Item>
      <Dropdown.Item 
      active={selectedOption === 'des'}
      onClick={() => handleOptionSelect('des')}
      >Des</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
}

export default ProductIdFilter;