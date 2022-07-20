import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
    background: var(--bgDark);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginWrap = styled.div`
    background: var(--primaryWhite);
    margin-top: 10vh;
    margin-bottom: 10vh;
    min-height: 80vh;
    width: 70vw;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 5px 5px 8px 5px var(--greyLight);

    @media screen and (max-width: 912px) {
        flex-direction: column;
        width: 85%;
    }

    @media screen and (max-width: 480px) {
        width: 95%;
    }
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    justify-content: flex-start;
    margin: 4rem 0;

    @media screen and (max-width: 912px) {
        width: 100%;
        margin: 1rem 0;
        justify-content: center;
    }
`
export const LogoWrap = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Logo = styled.img`
    width: 40%;
    height: auto;
    margin-top: 4rem;
`

export const Svg = styled.img`
    width: 70%;
    height: auto;
    margin-top: 6rem;
`


// Right side of login page
export const RightSide = styled.div`
    background: var(--primaryDark);
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white);
    padding-top: 4rem;
    padding-bottom: 4rem;

    @media screen and (max-width: 912px) {
        width: 100%;
    }
`

export const TextWelcome = styled.p`
    color: var(--primaryWhite);
    font-size: 1.3rem;
    font-weight: 700;
`

export const TextSignin = styled.p`
    font-size: 1.1rem;
    margin-top: 0.5rem;
    padding-bottom: 2rem;
    color: var(--greyLight);
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
    margin-top: 1.2rem;
    color: var(--greyLight);
`

export const Input = styled.input`
    border-radius: 4px;
    border: none;
    height: 40px;
    margin-top: 0.2rem;
    padding: 0.6rem 0.6rem;
    font-size: 1.2rem;
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

export const LoginButton = styled.button`
    font-size: 1rem;
    height: 40px;
    border-radius: 4px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--primaryWhite);
    background: var(--primary);
    cursor: pointer;
    margin-top: 2rem;
`

export const SignupButton = styled(Link)`
    font-size: 1rem;
    height: 40px;
    margin-top: 1rem;
    border: none;
    text-decoration: none;
    text-align: center;
    color: var(--greyLight);
    cursor: pointer;
`

export const ErrorMessage = styled.p`
    color: red;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`