import React from 'react'
import { ContactContainer, ContactTitle, ContactWrap, DocumentContainer, DocumentLeft, DocumentRight, DocumentWrap, HorizontalLine, IconWrap, IconWrapOutline, Name, Profession, ProfileImage, ProfileImgWrap, SocialMediaWrap, SubTitle, Text, Title } from './ProfileInfoElements'
import { BsFillPersonFill, BsDownload } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiTwitter, FiPhoneCall } from 'react-icons/fi'
import { HiDocumentText } from 'react-icons/hi'
import Img from '../../images/profile-icon.png'

const ProfileInfo = () => {
    return (
        <>
            <ProfileImgWrap>
              <ProfileImage src={Img} />
            </ProfileImgWrap>
            <Name>Jansh Dickens</Name>
            <Profession>Nurse Aid</Profession>
            <SocialMediaWrap>
              <IconWrap><FaFacebook /></IconWrap>
              <IconWrap><FiTwitter /></IconWrap>
              <IconWrap><FaWhatsapp /></IconWrap>
              <IconWrap><FiPhoneCall /></IconWrap>
            </SocialMediaWrap>
    
            <HorizontalLine />
    
            <DocumentContainer>
              <Title>Resume</Title>
              <DocumentWrap>
                <DocumentLeft>
                  <IconWrapOutline>
                    <HiDocumentText />
                  </IconWrapOutline>
                  <SubTitle>Resume.pdf</SubTitle>
                </DocumentLeft>
                <DocumentRight>
                  <IconWrapOutline>
                    <BsDownload />
                  </IconWrapOutline>
                </DocumentRight>
              </DocumentWrap>
            </DocumentContainer>
    
            <HorizontalLine />
    
            <ContactContainer>
              <Title>Contacts</Title>
              <ContactWrap>
                <ContactTitle>Email</ContactTitle>
                <Text>jansh@gmail.com</Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Phone Number</ContactTitle>
                <Text>+44 345 678 0023</Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Location</ContactTitle>
                <Text>New Caledonia</Text>
              </ContactWrap>
            </ContactContainer>
        </>
      )
}

export default ProfileInfo