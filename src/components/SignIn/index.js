import React, { useContext, useRef, useState } from 'react'
import { ForgotPassword, ForgotPasswordDiv, LogoWrap, Input, Label, LeftSide, LoginButton, LoginContainer, LoginForm, LoginWrap, Logo, RightSide, SignupButton, Svg, TextSignin, TextWelcome, ErrorMessage } from './SignInElements'
import logo from '../../images/logo-big.PNG'
import svg from '../../images/svg-signin.svg'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const navigate = useNavigate();

    
    const { setCurrentUser, setAuthCredentials } = useContext(AuthContext);

    const [error, setError] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigateToProfile = () => {
        console.log('navigating');
        navigate("/profile");
    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('submitting')
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                const user = userCredential.user;

                setCurrentUser(JSON.stringify(user))
                localStorage.setItem('currentUser', JSON.stringify(user))
                setAuthCredentials(user.email, user.uid);

                navigateToProfile()
            })
            .catch((error) => {
                console.log(error)
                setError(true)
        });
       
    }

  return (
    
    <LoginContainer>
      <LoginWrap> 
          <LeftSide>
              <LogoWrap to="/"><Logo src={logo} /></LogoWrap>
              <Svg src={svg} />
          </LeftSide>

          <RightSide>
              <TextWelcome>Welcome Back!</TextWelcome>
              <TextSignin>Sign in to continue to uk care connection.</TextSignin>

              <LoginForm onSubmit={handleLogin}>
                  <Label>Email</Label>
                  <Input type='email' placeholder='Enter your email address' ref={emailRef} />
                  <Label>Password</Label>
                  <Input placeholder='Enter your password' type='password' ref={passwordRef} />
                  
                  <LoginButton type='submit'>Sign In</LoginButton>

                  {error && <ErrorMessage>Wrong email or password!</ErrorMessage>}
                  <ForgotPasswordDiv to="/forgot-password">
                      <ForgotPassword>Forgot Password?</ForgotPassword>
                  </ForgotPasswordDiv>
                  <SignupButton to="/signup">Don't have an account? Sign Up</SignupButton>
              </LoginForm>
          </RightSide>

      </LoginWrap>
  </LoginContainer>
  )
}

export default SignIn