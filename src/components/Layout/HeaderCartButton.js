import { useContext,useEffect,useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/Cartlcon";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const [btnIsHighLighted,setbtnIsHighLighted]=useState(false);
  const cartCtx=useContext(CartContext);
  const {items}=cartCtx;

  const numberOfCartItems=cartCtx.items.reduce((currNumber,item)=>{
    return currNumber+item.amount;
  },0);

  

  const btnClasses=`${classes.button} ${btnIsHighLighted ? classes.bump:""}`

  useEffect(()=>{
    if(cartCtx.items.length===0){
      return;
    }
    setbtnIsHighLighted(true);

    const timer=setTimeout(()=>{
      setbtnIsHighLighted(false);
    },300);

    return()=>{
      clearTimeout(timer);
    }

  },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}