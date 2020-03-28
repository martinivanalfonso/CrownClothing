import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart, removeItem, addItem } from "../../redux/cart/cart.actions";
import { CheckoutItemContainer, RemoveButtonContainer, QuantityContainer, TextContainer, ImageContainer } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
        </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
