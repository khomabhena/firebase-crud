import React, { useContext, useState } from 'react'
import { ButtonWrap, FileChooser, Image, ImageWrap, Input, InputContainer, InputLabel, Inputwrap, ProfileUpdateContainer, TextArea, Title, UpdateButton, UpdateForm } from './ProfileUpdateElements'
import Img from '../../images/profile-icon.png'
import { AuthContext } from '../Context/AuthContext'
import { db } from '../../firebase'
import { doc, updateDoc } from 'firebase/firestore'

const ProfileUpdate = ({ selectedProfile }) => {
    const [data, setData] = useState({})
    const {userUid} = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await updateDoc(doc(db, "users", userUid), (data));
            console.log("Updated")
        } catch(error) {
            console.log(error)
        }

        console.log(data)
    }
  return (
    <ProfileUpdateContainer selectedProfile={selectedProfile}>
        <Title>My Account {JSON.stringify(data)}</Title>
        <ImageWrap>
            <Image src={Img} />
        </ImageWrap>

        <UpdateForm onSubmit={handleSubmit}>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>First Name</InputLabel>
                    <Input placeholder='Enter your first name' onChange={(e) => setData(data => ({...data, ...{firstName: e.target.value}}))} />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Last Name</InputLabel>
                    <Input placeholder='Enter your last name' onChange={(e) => setData(data => ({...data, ...{lastName: e.target.value}}))} />
                </Inputwrap>
            </InputContainer>
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Job Type</InputLabel>
                    <Input smallHint='true' placeholder='Nurse, Nurse Aid, Adult Care or Hospice Care?' onChange={(e) => setData(data => ({...data, ...{jobType: e.target.value}}))}  />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Email</InputLabel>
                    <Input placeholder='Enter your email' onChange={(e) => setData(data => ({...data, ...{email: e.target.value}}))} />
                </Inputwrap>
            </InputContainer>
            
            <Title>Profile</Title>
            <InputLabel>Introduce Yourself</InputLabel>
            <TextArea placeholder='Write a short paragraph introducing yourself' rows='6' onChange={(e) => setData(data => ({...data, ...{about: e.target.value}}))}  />

            <InputContainer>
                <Inputwrap>
                    <InputLabel>Languages</InputLabel>
                    <Input onChange={(e) => setData(data => ({...data, ...{languages: e.target.value}}))} />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Physical Address</InputLabel>
                    <Input onChange={(e) => setData(data => ({...data, ...{address: e.target.value}}))} />
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
                    <Input onChange={(e) => setData(data => ({...data, ...{facebook: e.target.value}}))} />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>Twitter</InputLabel>
                    <Input onChange={(e) => setData(data => ({...data, ...{twitter: e.target.value}}))} />
                </Inputwrap>
            </InputContainer>
            
            <InputContainer>
                <Inputwrap>
                    <InputLabel>Linkedin</InputLabel>
                    <Input onChange={(e) => setData(data => ({...data, ...{linkedin: e.target.value}}))} />
                </Inputwrap>
                <Inputwrap>
                    <InputLabel>WhatsApp</InputLabel>
                    <Input onChange={(e) => setData(data => ({...data, ...{whatsapp: e.target.value}}))} />
                </Inputwrap>
            </InputContainer>

            {/* <Title>Change Password</Title>
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
            </InputContainer> */}
            <ButtonWrap>
                <UpdateButton type='submit'>Update</UpdateButton>
            </ButtonWrap>
        </UpdateForm>
        
    </ProfileUpdateContainer>
  )
}

export default ProfileUpdate