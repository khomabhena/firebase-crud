import React from 'react'
import { Input, Label, LeftSide, LoginButton, LoginContainer, 
  LoginForm, LoginWrap, Logo, LogoWrap, RightSide, SignupButton, Svg, TextSignin, TextWelcome } from './ForgotPasswordElements'
import logo from '../../images/logo-big.PNG'
import svg from '../../images/svg-forgot-password.svg'


const ForgotPassword = () => {
  return (
    <LoginContainer>
      <LoginWrap> 
          <LeftSide>
              <LogoWrap to="/"><Logo src={logo} /></LogoWrap>
              <Svg src={svg} />
          </LeftSide>

          <RightSide>
              <TextWelcome>Reset Password!</TextWelcome>
              <TextSignin>You will be sent an email with reset instructions!</TextSignin>

              <LoginForm>
                  <Label>Email</Label>
                  <Input placeholder='Enter your email address' />
                  <LoginButton to="">Send Request</LoginButton>
                  <SignupButton to="/signin">Remembered It? Go to Login</SignupButton>
              </LoginForm>
          </RightSide>

      </LoginWrap>
  </LoginContainer>
  )
}

export default ForgotPassword