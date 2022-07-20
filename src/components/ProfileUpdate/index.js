import React from 'react'
import { ButtonWrap, FileChooser, Image, ImageIcon, ImageWrap, Input, InputContainer, InputLabel, Inputwrap, ProfileUpdateContainer, TextArea, Title, UpdateButton, UpdateForm } from './ProfileUpdateElements'
import { BsFillPersonFill } from 'react-icons/bs'
import Img from '../../images/profile-icon.png'

const ProfileUpdate = ({ selectedProfile }) => {
  return (
    <ProfileUpdateContainer selectedProfile={selectedProfile}>
        <Title>My Account</Title>
        <ImageWrap>
            <Image src={Img} />
        </ImageWrap>

        <UpdateForm>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>First Name</InputLabel>
                    <Input placeholder='Enter your first name' />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Last Name</InputLabel>
                    <Input placeholder='Enter your last name' />
                </Inputwrap>
            </InputContainer>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Job Type</InputLabel>
                    <Input smallHint='true' placeholder='Nurse, Nurse Aid, Adult Care or Hospice Care?' />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Email</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>
            
            <Title>Profile</Title>
            <InputLabel>Introduce Yourself</InputLabel>
            <TextArea placeholder='Write a short paragraph introducing yourself' rows='6' />

            <InputContainer>
                <Inputwrap>
                    <InputLabel>Languages</InputLabel>
                    <Input />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Physical Address</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>
            <InputLabel>Attachements CV</InputLabel>
            <FileChooser type='file' />
            <InputLabel>National ID/Passport</InputLabel>
            <FileChooser type='file' />

            <Title>Social Media</Title>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Facebook</InputLabel>
                    <Input />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Twitter</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>
            
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Linkedin</InputLabel>
                    <Input />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>WhatsApp</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>

            <Title>Change Password</Title>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Current Password</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>New Password</InputLabel>
                    <Input />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Confirm Password</InputLabel>
                    <Input />
                </Inputwrap>
            </InputContainer>
        </UpdateForm>

        <ButtonWrap>
            <UpdateButton>Update</UpdateButton>
        </ButtonWrap>
        
    </ProfileUpdateContainer>
  )
}

export default ProfileUpdate