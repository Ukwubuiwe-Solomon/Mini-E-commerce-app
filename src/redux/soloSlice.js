/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData:[]
}

export const soloSlice = createSlice({
    name:"solo",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const item = state.productData.find((item)=>item.id === action.payload.id)
            if(item){
                item.quantity += action.payload.quantity
            }
            else{
                state.productData.push(action.payload)
            }
            
        },
        deleteItem:(state,action)=>{
            state.productData = state.productData.filter((item)=>item.id !== action.payload)
        },
        resetCart:(state)=>{
            state.productData = []
        },
        incrementQuantity:(state,action)=>{
            const item = state.productData.find((item)=>
            item.id === action.payload.id
            )
            if(item){
                item.quantity++
            }
        },
        decrementQuantity:(state,action)=>{
            const item = state.productData.find((item)=>
            item.id === action.payload.id
            )
            if(item.quantity===1){
                item.quantity = 1
            }
            else{ item.quantity--
            }
    }
}
})

export const {addToCart,deleteItem,incrementQuantity,decrementQuantity,resetCart} = soloSlice.actions;
export default soloSlice.reducer;