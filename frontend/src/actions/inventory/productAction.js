import axios from "axios";
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  CLEAR_ERRORS,
} from "../../constatnts/inventory/productConstant";
export const getProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCT_REQUEST,
    });
    const { data } = await axios.get(`http://localhost:3000/api/v1/products`);
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      products: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      error: error,
    });
  }
};
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
