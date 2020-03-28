import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "./header.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contact">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin/">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
        {hidden ? null : <CartDropdown />}
      </ OptionsContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
