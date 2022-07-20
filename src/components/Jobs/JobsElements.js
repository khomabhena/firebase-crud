import styled from "styled-components";

export const JobWrapper = styled.div`
    display: ${({ selectedJobPage }) => (selectedJobPage ? 'flex' : 'none')};
    flex-direction: column;
    width: 30%;
    margin: 1rem 1rem;
    border: 1px solid var(--greyLight);
    border-radius: 8px;
    padding: 1.5rem;

    @media screen and (max-width: 912px) {
        width: 45%;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        margin: 1rem 0;
    }
`

export const Title = styled.h3`
    color: var(--greyDark);
`

export const FaveIconWrap = styled.div``

export const CompanyName = styled.p`
    color: var(--grey);
    font-size: 1rem;
`

export const SalaryWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1.5rem 0;
`

export const Salary = styled.p`
    background: var(--iconAlpha);
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
    color: var(--primary);
    font-weight: 500;
    font-size: 0.9rem;
`

export const JobType = styled.p`
    background: var(--iconAlpha);
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
    color: var(--greyDark);
    font-weight: 500;
    font-size: 0.9rem;
`

export const JobDescription = styled.p`
    color: var(--grey);
`

export const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background: var(--greyLight);
    margin: 2rem 0 1rem;
`

export const BottomWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Date = styled.p`
    color: var(--grey);
    font-weight: 500;
    align-self: center;
`

export const ApplyButton = styled.button`
    background: var(--primary);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: var(--primaryWhite);
    cursor: pointer;

    :hover {
        background: var(--primaryDark);
        transform: scale(1.1);
    }
`