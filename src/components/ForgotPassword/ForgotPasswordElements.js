import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
    background: var(--bgDark);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LoginWrap = styled.div`
    background: var(--primaryWhite);
    min-height: 80vh;
    width: 70vw;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.2);
    margin: 3rem 2rem;

    @media screen and (max-width: 912px) {
        flex-direction: column;
        min-height: auto;
    }

    @media screen and (max-width: 480px) {
        width: 90%;
        margin: 3rem 2rem;
    }
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    justify-content: space-around;

    @media screen and (max-width: 912px) {
        width: 100%;
        padding: 3rem 1rem;
    }
`

export const LogoWrap = styled(Link)`
    display: flex;
    justify-content: center;
`

export const Logo = styled.img`
    width: 40%;
    height: auto;
    cursor: pointer;
`

export const Svg = styled.img`
    width: 60%;
    height: auto;
`


// Right side of login page
export const RightSide = styled.div`
    background: var(--primaryDark);
    /* background: linear-gradient(140deg, var(--primaryLightAlpha), var(--primaryDark)); */
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white);

    @media screen and (max-width: 912px) {
        width: 100%;
        padding: 4rem 1rem;
    }
`

export const TextWelcome = styled.p`
    color: var(--primaryWhite);
    font-size: 1.3rem;
    font-weight: 700;

    @media screen and (max-width: 480px) {
        font-size: 1.1rem;
    }
`

export const TextSignin = styled.p`
    font-size: 1.1rem;
    margin-top: 0.5rem;
    padding-bottom: 2rem;
    color: var(--greyLight);

    @media screen and (max-width: 480px) {
        font-size: 0.95rem;
    }
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    position: relative;

    @media screen and (max-width: 480px) {
        width: 95%;
    }
`

export const Label = styled.label`
    font-size: 0.9rem;
    margin-top: 1rem;
    color: var(--greyLight);
`

export const Input = styled.input`
    border-radius: 4px;
    border: none;
    height: 40px;
    font-size: 1.2rem;
    margin-top: 0.2rem;
    padding: 0.6rem 0.6rem;
    background: var(--primaryLightAlpha);
    color: var(--greyLight);

    ::placeholder {
        color: var(--grey);
        font-size: 1rem;
    }

    :focus {
        outline: none;
    }

`

export const ForgotPasswordDiv = styled(Link)`
    margin-top: 1rem;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-decoration: none;
`
export const ForgotPassword = styled.p`
    color: var(--greyLight);
    padding-left: 2rem;
    cursor: pointer;
`

export const LoginButton = styled(Link)`
    margin-top: 2rem;
    font-size: 1.1rem;
    font-weight: 700;
    height: 40px;
    border-radius: 4px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primaryWhite);
    background: var(--primary);
    text-decoration: none;
    cursor: pointer;
`

export const SignupButton = styled(Link)`
    font-size: 1rem;
    height: 40px;
    margin-top: 1.5rem;
    border: none;
    text-align: center;
    vertical-align: middle;
    color: var(--greyLight);
    cursor: pointer;
    text-decoration: none;
`