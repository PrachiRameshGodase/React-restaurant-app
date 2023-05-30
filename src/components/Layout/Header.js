import { Fragment } from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assets/mealImage.jpg";
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        <h1>.</h1>
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt=" A delicious pizza" />
      </div>
    </Fragment>
  );
}