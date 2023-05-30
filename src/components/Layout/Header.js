import { Fragment } from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assets/mealImage.jpg";
import HeaderCartButton from "./HeaderCartButton";
export default function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt=" A delicious pizza" />
      </div>
    </Fragment>
  );
}