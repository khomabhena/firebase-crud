import React, { useContext, useState } from 'react'
import { ErrorMessage, Input, Label, LeftSide, LoginButton, LoginContainer, 
    LoginForm, LoginWrap, Logo, LogoWrap, RightSide, SignupButton, Svg, TextSignin, TextWelcome } from './SignUpElements'
import logo from '../../images/logo-big.PNG'
import svg from '../../images/svg-signup.svg'
import { auth, db } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { AuthContext } from '../Context/AuthContext'
import { doc, setDoc } from "firebase/firestore"; 
import { async } from '@firebase/util'


const SignUp = () => {
    
    const {setAuthCredentials, userUid, userEmail} = useContext(AuthContext);

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [uid, setUid] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleUploadData = async (uid, dataToUpload) => {
        const res = await setDoc(doc(db, "users", uid), (dataToUpload));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setAuthCredentials(email, password)
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!')
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    
                    setAuthCredentials(user.email, user.uid)

                    const dataToUpload = {
                        uid: user.uid,
                        email: email,
                        firstName: firstName,
                        lastName: lastName
                    }

                    handleUploadData(user.uid, dataToUpload)

                })
                .catch((error) => {
                    setErrorMessage(error.message)
            });
        }
    }

  return (
    <LoginContainer>
        <LoginWrap>
            
            <LeftSide>
                <LogoWrap to="/"><Logo src={logo} /></LogoWrap>
                <Svg src={svg} />
            </LeftSide>

            <RightSide>
                <TextWelcome>Let's Get Started</TextWelcome>
                <TextSignin>Sign Up and get access to all the features.</TextSignin>

                <LoginForm onSubmit={handleSubmit}>
                    <Label>Firstname</Label>
                    <Input placeholder='Enter your Firstname' onChange={(e) => setFirstName(e.target.value)} type='text' required />
                    <Label>Lastname</Label>
                    <Input placeholder='Enter your Lastname' onChange={(e) => setLastName(e.target.value)} type='text' required />
                    <Label>Email Address</Label>
                    <Input placeholder='Enter your email address' onChange={(e) => setEmail(e.target.value)} type='email' required />
                    <Label>Password</Label>
                    <Input placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} type='password' required />
                    <Label>Confirm Password</Label>
                    <Input placeholder='Confirm your password' onChange={(e) => setConfirmPassword(e.target.value)} type='password' required />
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    <LoginButton type='submit'>Sign Up</LoginButton>
                    <SignupButton to="/signin">Already a member? Sign In</SignupButton>
                </LoginForm>
            </RightSide>

        </LoginWrap>
    </LoginContainer>
  )
}

export default SignUp