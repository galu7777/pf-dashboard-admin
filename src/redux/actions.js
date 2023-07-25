import axios from "axios"
import { GET_ALL_CATEGORIES, 
        GET_ALL_PRODUCTS, 
        PRODUCT_ID_FILTER, 
        PRODUCT_ID_SORT, 
        PRODUCT_NAME_FILTER,
        PRODUCT_NAME_SORT 
        } 
from "./actionTypes";

export const getAllProducts = () => {
    return async function (dispatch){
        try {
            const response = await axios.get("https://api-market-henry-jczt.onrender.com/PF/products")
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getAllCategories = () => {
    return async function (dispatch){
        try {
            const response = await axios.get("https://api-market-henry-jczt.onrender.com/PF")
            return dispatch({
                type: GET_ALL_CATEGORIES,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const productIdFilter = (id) => {
    return async function (dispatch){
        try {
            const response = await axios.get(`https://api-market-henry-jczt.onrender.com/PF/products/${id}`)
            return dispatch({
                type: PRODUCT_ID_FILTER,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const productIdSort = (order) => {
    return{
        type: PRODUCT_ID_SORT,
        payload: order
    }
}

export const productNameFilter = (name) => {
    return{
        type: PRODUCT_NAME_FILTER,
        payload: name
    }
}

export const productNameSort = (order) => {
    return{
        type: PRODUCT_NAME_SORT,
        payload: order
    }
}