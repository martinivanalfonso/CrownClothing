import React from "react";
import FormInput from '../form-input/form-input.component'
import { SignInContainer, TitleContainer, ButtonsContainer} from './sign-in.styles'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password} = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" });

    } catch (error) {
      console.log(error)
    }

  };
  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <ButtonsContainer>

          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
          </ButtonsContainer>

        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
