import { createSlice } from "@reduxjs/toolkit";

const initState = {
    items: [],
    item: {},
    loading: false,
    Error: "",
};

const subCategorySlice = createSlice({
    name: 'subCategory',
    initialState: initState,
    reducers: {
        FETCH_REQUEST(state) {
            state.items = [];
            state.loading = true;
        },
        FETCH_SUCCESS(state, action) {
            state.items = action.payload;
            state.loading = false;
        },
        FETCH_FAIL(state) {
            state.items = [];
            state.loading = false;
        },

        FETCH_SUBCATEGORY_REQUEST(state) {
            state.item = {};
            state.loading = true;
        },
        FETCH_SUBCATEGORY_SUCCESS(state, action) {
            state.item = action.payload;
            state.loading = false;
        },
        FETCH_SUBCATEGORY_FAIL(state) {
            state.item = {};
            state.loading = false;
        },
    }
});

export const subCategoryActions = subCategorySlice.actions
export default subCategorySlice;