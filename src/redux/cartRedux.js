import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProducts:(state,action)=>{
            state.quantity +=1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        delProducts:(state,action)=>{
            const nextCartItem = state.products.filter(
                (cartItem)=>cartItem._id!==action.payload._id
            );
            state.quantity -=1;
            state.products = nextCartItem;
            state.total -= action.payload.price * action.payload.quantity*1;
        },
    },
})

export const {addProducts,delProducts} = cartSlice.actions;
export default cartSlice.reducer;