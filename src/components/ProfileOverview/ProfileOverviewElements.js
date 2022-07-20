import styled from "styled-components";


export const OverviewWrap = styled.div`
    display: ${({ selectedProfile }) => (selectedProfile === 'overview' ? '' : 'none')};
    padding: 1rem 2rem;

    @media screen and (max-width: 480px) {
        padding: 1rem 0;
    }
`

export const About = styled.p``


//Also works for experiences
export const EducationContainer = styled.div`
    margin-top: 2rem;
`

export const EducationWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
`

export const LetterWrap = styled.div`
    background: var(--iconAlpha);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 3rem;
    padding: 0 8px;
    border-radius: 4px;
`

export const Letter = styled.p``

export const EducationDetailsWrap = styled.div`
    margin-left: 2rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 480px) {
        margin-left: 0.9rem;
    }
`


//Skills also works for spoken languages
export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const SkillsWrap = styled.div`
    background: var(--iconAlpha);
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 2rem; */
    padding: 0.3rem 1rem;
    margin: 1rem 1rem 2rem 0;
    border-radius: 4px;
`

export const Skill = styled.p`
    color: var(--primary);
    font-size: 0.9rem;
`

export const LanguageWrap = styled.div``

export const Language = styled.p`
    color: var(--primaryDark);
    font-size: 0.9rem;
`
