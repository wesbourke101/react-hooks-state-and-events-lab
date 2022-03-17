import React, {useState} from "react";

function Item({ name, category }) {
  const [isItemInCart, cartStatus] = useState(false)

  function whereIsTheItem() {
    cartStatus(isItemInCart => !isItemInCart)
  }
  const changeCartStatus = isItemInCart ? "In-Cart" : "Add to Cart"

  return (
    <li className={isItemInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={whereIsTheItem}>{changeCartStatus}</button>
    </li>
  );
}

export default Item;
