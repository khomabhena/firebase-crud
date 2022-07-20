import styled from "styled-components";

export const JobDetailsWrapper = styled.div`
    position: relative;
    border: 1px solid var(--greyLight);
    border-radius: 8px;
    padding: 2rem 2rem;
    display: ${({ selectedJobPage }) => (selectedJobPage ? 'flex' : 'none')};
    flex-direction: column;
    align-self: center;
    width: 60%;

    @media screen and (max-width: 912px) {
        width: 80%;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        padding: 1rem 1rem;
    }
`

export const Title = styled.h3`
    color: var(--greyDark);

    @media screen and (max-width: 480px) {
        font-size: 1.1rem;
    }
`

export const CompanyName = styled.p`
    color: var(--grey);

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
    }
`

export const TopContainer = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: row;
    justify-content: stretch;

    @media screen and (max-width: 912px) {
        flex-direction: column;
    }
`

export const TopWrap = styled.div`
    border: 1px solid var(--greyLight);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin: 0 1rem 1.5rem 0;

    @media screen and (max-width: 912px) {
        margin: 0 0 0.5rem 0;
    }

`

export const TopTitle = styled.p`
    color: var(--grey);
`

export const BottomTitle = styled.h4`
    color: var(--greyDark);
`

export const Heading = styled.h3`
    color: var(--greyDark);
`

export const Text = styled.p`
    color: var(--grey);
    margin-bottom: 2rem;
`

export const ButtonBack = styled.button`
    position: absolute;
    padding: 0.5rem 1rem;
    align-self: flex-end;
    border-radius: 8px;
    border: none;
    background: var(--iconAlpha);
    color: var(--greyDark);
    font-weight: 700;
    cursor: pointer;
    top: 2rem;
    right: 2rem;

    @media screen and (max-width: 480px) {
        top: 1rem;
        right: 1rem;
        font-weight: 500;
        padding: 0.5rem 0.5rem;
    }
`

export const ApplyButton = styled.button`
    background: var(--primary);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: var(--primaryWhite);
    font-size: 1.1rem;
    cursor: pointer;

    :hover {
        background: var(--primaryDark);
    }
`