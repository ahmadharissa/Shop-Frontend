import axios from "axios";

//redux
import { subCategoryActions } from "./subCategorySlice";

export const getSubCategories = () => async (dispatch) => {
    dispatch(subCategoryActions.FETCH_REQUEST());
    try {
        const res = await axios.get(process.env.REACT_APP_API + '/subCategory');
        dispatch(subCategoryActions.FETCH_SUCCESS(res.data),);
    } catch (error) {
        dispatch(subCategoryActions.FETCH_FAIL());
    }
};

export const getSubCategory = (id) => async (dispatch) => {
    dispatch(subCategoryActions.FETCH_SUBCATEGORY_REQUEST());
    try {
        const res = await axios.get(process.env.REACT_APP_API + `/subCategory/${id}`);
        dispatch(subCategoryActions.FETCH_SUBCATEGORY_SUCCESS(res.data),);
    } catch (error) {
        dispatch(subCategoryActions.FETCH_SUBCATEGORY_FAIL());
    }
};