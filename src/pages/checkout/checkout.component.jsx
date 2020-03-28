import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import {
  selectCartItems,
  selectCartItemsTotal
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import StripeCheckoutButton from "../../components/stripe/stripe-button.component"
import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TestWarningContainer, TotalCotainer} from './checkout.styles'

const CheckOutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
    <TotalCotainer>
      <span>TOTAL: ${total}</span>
    </TotalCotainer>
    <TestWarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </TestWarningContainer>
      <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const setStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(setStateToProps)(CheckOutPage);
