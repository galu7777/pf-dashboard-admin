import {
        GET_ALL_PRODUCTS,
        GET_ALL_CATEGORIES,
        GET_ALL_USERS,
        PRODUCT_ID_FILTER, 
        PRODUCT_ID_SORT, 
        PRODUCT_NAME_FILTER, 
        PRODUCT_NAME_SORT,
        PUT_PRODUCTS,
        PUT_USERS,
    } 
from "./actionTypes"

const initialState = {
    products: [],
    upProducts: [],
    categories: [],
    users: [],
    upUsers: [],
    productIdFilter: {},
    productIdSort: "",
    productNameSort: ""
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products: payload,
            }

        case GET_ALL_CATEGORIES:
            return{
                ...state,
                categories: payload
            }

        case GET_ALL_USERS:
            return{
                ...state,
                users: payload
            }

        case PUT_PRODUCTS:
            return {
                ...state,
                upProducts: payload
            }

        case PUT_USERS:
            return {
                ...state,
                upUsers: payload
            }

        case PRODUCT_ID_FILTER:
            return{
                ...state,
                products: payload.name ? [payload] : products
            }
        
        case PRODUCT_ID_SORT:
            return {
                ...state,
                productIdSort: payload,
                productNameSort: ""
            }

        case PRODUCT_NAME_FILTER:
            function removeAccents(str) {
                return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              }
            const nameArr = state.products.filter((product) => removeAccents(product.name).includes(payload))
        return{
            ...state,
            products: nameArr.length === 0 ? products : nameArr
        }


        case PRODUCT_NAME_SORT:
        return{
            ...state,
            productNameSort: payload,
            productIdSort: ""
        }

        default:
            return{
                ...state
            }
    }
}