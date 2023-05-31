import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartStrat={
items:[],
totalAmount:0
}
const cartReducer =(state,action)=>{
    if(action.type==="Add"){
        // const updatedItems=state.items.concat(action.item);
        const updatedToatlAmount=
        state.totalAmount+action.item.price*action.item.amount;

        const existinCartItemIndex=state.items.findIndex((item)=>
            item.id===action.item.id
        )

        const existingCartItem=state.items[existinCartItemIndex]
        
        let updatedItems;

        if(existingCartItem){
            const updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount+action.item.amount
            };
            updatedItems=[...state.items];
            updatedItems[existinCartItemIndex]=updatedItem;
        }else{
            updatedItems=state.items.concat(action.item);
        }
       
        return {
            items:updatedItems,
            totalAmount:updatedToatlAmount
        };

    }
    if(action.type==="Remove"){
        const existingCartItemIndex=state.items.findIndex((item)=>
        item.id===action.id
    )
    const existingItem=state.items[existingCartItemIndex];
    const updatedToatlAmount=state.totalAmount-existingItem.price;
    
    let updatedItems;
    if(existingItem.amount===1){
        updatedItems =state.items.filter(item=>item.id !==action.id
    )
    }else{
        const updatedItem={...existingItem, amount:existingItem.amount-1}
        updatedItems=[...state.items];
        updatedItems[existingCartItemIndex]=updatedItem
    }
    return {
        items:updatedItems,
        totalAmount:updatedToatlAmount
    }
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