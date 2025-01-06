export { add } from "../reducers/productSlice";

import { remove } from "../reducers/productSlice";

export const asyncremove = (id) => async (dispatch, getState) => {
    // const state = getState();
    // console.log(state);
    setTimeout(() => {
        dispatch(remove(id));
    }, 2000);
};
