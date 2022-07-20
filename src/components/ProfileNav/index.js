import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Image, ImageWrap, MobileIcon, Name, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu, RightSide } from './ProfileNavElements'
import { IconContext } from 'react-icons/lib'
import logo from '../../images/logo-big.PNG'
import profileIcon from '../../images/profile-icon.png'

const ProfileNav = ({ selectedPage, togglePage }) => {

  return (
    <>
    <IconContext.Provider value={{color: `var(--grey)`}}>        
    <Nav>
            <NavbarContainer>
                <NavLogo to="/" src={logo} />
                <MobileIcon ><FaBars /></MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="profile" selectedPage={selectedPage === 'profile'} onClick={() => togglePage('profile')}
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Profile {() => selectedPage === 'profile'}</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="jobs" selectedPage={selectedPage === 'jobs'} onClick={() => togglePage('jobs')}
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Suggested Jobs</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="qualifications"
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Qualifications</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="experience"
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Experience</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="trainings"
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Trainings</NavLinks>
                    </NavItem>
                </NavMenu>
                <RightSide>
                    <ImageWrap>
                        <Image src={profileIcon} />
                    </ImageWrap>
                    <Name>Hi, Jansh</Name>
                </RightSide>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default ProfileNav