import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: var(--primaryWhite);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 5px 3px 8px var(--greyLight);

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding-left: 5rem;
    padding-right: 5rem;
    

`

// export const NavLogo = styled(LinkR)`
export const NavLogo = styled.img`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    
    @media screen and (max-width: 820px) {
        margin-left: 8px;
    }

`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 820px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 820px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: var(--grey);
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    border-bottom: ${({ selectedPage }) => (selectedPage ? `3px solid var(--primary)` : 'transparent')};

    &.active {
        border-bottom: 3px solid var(--primaryDark);
    }

    :hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 912px) {
        font-size: 1rem;
    }
`


export const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const ImageWrap = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--greyLight);
`

export const Image = styled.img`
    height: 40px;
    width: auto;
`

export const Name = styled.p`
    margin: 0 1rem;
    color: var(--grey);
    font-size: 1.1rem;
`