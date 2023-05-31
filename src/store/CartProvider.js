import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartStrat={
items:[],
totalAmount:0
}
const cartReducer =(state,action)=>{
    if(action.type==="Add"){
        const updatedItems=state.items.concat(action.item);
        const updatedToatlAmount=state.totalAmount+action.item.price;
        return {
            items:updatedItems,
            totalAmount:updatedToatlAmount
        };

    }
    return defaultCartStrat
}
const CartProvider=(props)=>{
    const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartStrat)

    const addItemToCartHandler=item=>{
        dispatchCartAction({type:"Add",item:item})
    };
    const removeItemFromCarthandler=id=>{
        dispatchCartAction({type:"Remove",id:id})
    }
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCarthandler
    };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;