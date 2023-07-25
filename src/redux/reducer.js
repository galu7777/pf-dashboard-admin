import { GET_ALL_PRODUCTS, PRODUCT_ID_FILTER, PRODUCT_ID_SORT } from "./actionTypes"

const initialState = {
    products: [],
    productIdFilter: {},
    productIdSort: "asc",
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products: payload
            }

        case PRODUCT_ID_FILTER:
            return{
                ...state,
                productIdFilter: payload
            }
        
        case PRODUCT_ID_SORT:
            return {
                ...state,
                productIdSort: payload
            }
                
        default:
            return{
                ...state
            }
    }
}