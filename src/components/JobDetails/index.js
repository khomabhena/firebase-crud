import React from 'react'
import { ApplyButton, BottomTitle, ButtonBack, CompanyName, Heading, JobDetailsWrapper, Text, Title, TopContainer, TopTitle, TopWrap } from './JobDetailsElements'

const JobDetails = ({ selectedJobPage, toggleJobPage }) => {
    const duties = "Certified Nursing Assistants help perform critical tasks that ensure patients are well-cared for and safe during their hospital stay. Checking vital signs, keeping patients clean, and other duties like this are extremely important for patient care and satisfaction."

  return (
    <JobDetailsWrapper selectedJobPage={selectedJobPage}>
        <ButtonBack onClick={() => toggleJobPage('jobs')}>Back to Jobs</ButtonBack>
        <Title>Assistant Nurse Aid</Title>
        <CompanyName>Uk Care Connection</CompanyName>
        <TopContainer>
            <TopWrap>
                <TopTitle>Experience</TopTitle>
                <BottomTitle>Minimum 1 Year</BottomTitle>
            </TopWrap>
            <TopWrap>
                <TopTitle>Employement Type</TopTitle>
                <BottomTitle>Full Time</BottomTitle>
            </TopWrap>
            <TopWrap>
                <TopTitle>Location</TopTitle>
                <BottomTitle>Bristol</BottomTitle>
            </TopWrap>
            <TopWrap>
                <TopTitle>Salary per Month</TopTitle>
                <BottomTitle>$1200</BottomTitle>
            </TopWrap>
        </TopContainer>
        <Heading>Job Description</Heading>
        <Text>{duties}</Text>
        <Heading>Responsibilities</Heading>
        <Text>{duties}</Text>
        <Heading>Qualification</Heading>
        <Text>{duties}</Text>
        <Heading>Skills &amp; Experience</Heading>
        <Text>{duties}</Text>
        <ApplyButton>Apply for this Job</ApplyButton>
    </JobDetailsWrapper>
  )


}

export default JobDetails