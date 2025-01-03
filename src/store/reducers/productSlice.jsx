import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            id: 1,
            name: "Product 1",
            price: 100,
        },
        {
            id: 2,
            name: "Product 2",
            price: 200,
        },
    ],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        add: (state, action) => {
            state.data.push(action.payload);
        },
    },
});

export default productSlice.reducer;
export const { add } = productSlice.actions;
