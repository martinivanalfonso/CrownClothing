import React from 'react';

import { SignInAndSignUpPageContainer } from './sign-in-and-sign-up.styles'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUp = () => {
    return (
        <SignInAndSignUpPageContainer>
            <SignIn />
            <SignUp />
        </SignInAndSignUpPageContainer>
    );
};

export default SignInAndSignUp