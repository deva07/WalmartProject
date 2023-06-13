import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null,
};

export const petSlice = createSlice({
    name:"DogProduct",
    initialState,
    reducers:{
        addToCart:(state,action) =>{

            const list = state.productData.find(
                (list) => list._id === action.payload._id
            );

            if(list)
            {
                list.quantity += action.payload.quantity;
            }
            else
            {
            state.productData.push(action.payload);
            }
        },
        deleteItem: (state, action) => {
            state.productData = state.productData.filter(
                (list) => list._id !== action.payload
            );
        },
        resetCart: (state) => {
            state.productData = [];
        },
        incrementQuantity: (state, action) => {
            const list = state.productData.find(
                (list) => list._id === action.payload._id
            );
            if (list) {
                list.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const list = state.productData.find(
                (list) => list._id === action.payload._id
            );
            if(list.quantity === 1) {
                list.quantity = 1;
            }
            else {
                list.quantity --;
            }
        }
    },
});

export const { 
    addToCart,
    deleteItem,
    resetCart,
    incrementQuantity,
    decrementQuantity,
 } = petSlice.actions;
export default petSlice.reducer;