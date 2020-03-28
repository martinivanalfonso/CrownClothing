import React from "react";

import { CartItemsContainer, ItemDetailsContainer, NameContainer} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemsContainer>
    <img src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <span className="price">
        {quantity} x {price}
      </span>
    </ItemDetailsContainer>
  </CartItemsContainer>
);

export default CartItem;
