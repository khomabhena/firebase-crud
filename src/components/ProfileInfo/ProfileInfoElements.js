import styled from "styled-components";

export const ProfileImgWrap = styled.div`
    margin-top: 2rem;
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--greyLight);
    
`
export const ProfileImage = styled.img`
    width: 3rem;
    height: 3rem;
`

export const Name = styled.h3`
    margin-top: 2rem;
    color: var(--greyDark);
`

export const Profession = styled.p` 
    color: var(--grey);
    font-size: 1rem;
`

export const SocialMediaWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    height: 3rem;
    justify-content: space-around;
    align-items: center;
`

export const IconWrap = styled.div`
    background: var(--iconAlpha);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 3rem;
    padding: 0 8px;
    border-radius: 4px;
    margin: 0 0.5rem 1rem;
`

export const DocumentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin-top: 1rem;
`

export const DocumentWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
`

export const DocumentLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const DocumentRight = styled.div``

export const IconWrapOutline = styled.div`
    border: 1px solid var(--greyLight);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 4px;
    margin-right: 1rem;
`

export const ContactContainer = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 2rem;
`

export const ContactWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ContactTitle = styled.p`
    font-weight: 700;
    color: var(--greyDark);
`

export const HorizontalLine = styled.div`
    height: 1px;
    width: 100%;
    margin: 1rem 0;
    background: var(--bgDark);
`

export const Title = styled.h3`
    color: var(--greyDark);
`

export const SubTitle = styled.h4`
    color: var(--grey);
`

export const Text = styled.p`
    color: var(--grey);
`