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
            let ispresent = false;
            state.products.forEach((item)=>{
                if(item.id==action.payload.id){
                    ispresent=true;
                }
            })
            if(ispresent){
                alert("this product is already in cart");
                return;
            }else{
              state.quantity +=1;
              state.products.push(action.payload);
              state.total += action.payload.price * action.payload.quantity;
            }
         
        },
        delProducts:(state,action)=>{
            const nextCartItem = state.products.filter(
                (cartItem)=>cartItem.id!==action.payload.id
            );
            state.quantity -=1;
            state.products = nextCartItem;
            state.total -= action.payload.price * action.payload.quantity*1;
        },
        moveProductsFromCartToDatabase:(state)=>{
            state.quantity =0;
            state.products = [];
            state.total = 0;
        },
    },
})

export const {addProducts,delProducts,moveProductsFromCartToDatabase} = cartSlice.actions;
export default cartSlice.reducer;