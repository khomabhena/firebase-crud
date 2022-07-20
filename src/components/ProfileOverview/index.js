import React from 'react'
import { Text, SubTitle, Title } from '../ProfileInfo/ProfileInfoElements'
import { EducationContainer, EducationDetailsWrap, EducationWrap, Language, Letter, LetterWrap, OverviewWrap, Skill, SkillsContainer, SkillsWrap } from './ProfileOverviewElements'


const ProfileOverview = ({ selectedProfile }) => {

    const about = "Developer with over 5 years' experience working in both the public and private sectors. Diplomatic, personable, and adept at managing sensitive situations. Highly organized, self-motivated, and proficient with computers. Looking to boost students’ satisfactions scores for International University. Bachelor's degree in communications" +

    "It describes the candidate's relevant experience, skills, and achievements. The purpose of this career summary is to explain your qualifications for the job in 3-5 sentences and convince the manager to read the whole resume document.";
  
    const desc = "There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.";


  return (
    <OverviewWrap selectedProfile={selectedProfile}>
          <Title>About</Title>
          <Text>{about}</Text>

          
          <EducationContainer>
          <Title>Education</Title>
            <EducationWrap>          
              <LetterWrap>
                  <Letter>B</Letter>
              </LetterWrap>
              <EducationDetailsWrap>
                <SubTitle>BCA - Bachelor of Nursing</SubTitle>
                <Text>International University - (2000 - 2004)</Text>
                <Text>{desc}</Text>
              </EducationDetailsWrap>
            </EducationWrap>
            <EducationWrap>          
              <LetterWrap>
                  <Letter>M</Letter>
              </LetterWrap>
              <EducationDetailsWrap>
                <SubTitle>MCA - Master of Computer Application</SubTitle>
                <Text>International University - (2010 - 2012)</Text>
                <Text>{desc}</Text>
              </EducationDetailsWrap>
            </EducationWrap>
            <EducationWrap>          
              <LetterWrap>
                  <Letter>D</Letter>
              </LetterWrap>
              <EducationDetailsWrap>
                <SubTitle>Design Communication Visual</SubTitle>
                <Text>International University - (2012 - 2015)</Text>
                <Text>{desc}</Text>
              </EducationDetailsWrap>
            </EducationWrap>
          </EducationContainer>

          <Title>Experiences</Title>
          <EducationContainer>
            <EducationWrap>          
              <LetterWrap>
                  <Letter>W</Letter>
              </LetterWrap>
              <EducationDetailsWrap>
                <SubTitle>Web Design &amp; Development Team</SubTitle>
                <Text>Creative Agency - (2013 -2016)</Text>
                <Text>{desc}</Text>
              </EducationDetailsWrap>
            </EducationWrap>
            <EducationWrap>          
              <LetterWrap>
                  <Letter>P</Letter>
              </LetterWrap>
              <EducationDetailsWrap>
                <SubTitle>Project Manager</SubTitle>
                <Text>EU Care Home (2016 - Present)</Text>
                <Text>{desc}</Text>
              </EducationDetailsWrap>
            </EducationWrap>
            <EducationWrap>          
              <LetterWrap>
                  <Letter>D</Letter>
              </LetterWrap>
              <EducationDetailsWrap>
                <SubTitle>Design Communication Visual</SubTitle>
                <Text>International University - (2012 - 2015)</Text>
                <Text>{desc}</Text>
              </EducationDetailsWrap>
            </EducationWrap>
          </EducationContainer>

          <Title>Skills</Title>
          <SkillsContainer>
            <SkillsWrap>
              <Skill>Cloud Management</Skill>
            </SkillsWrap>
            <SkillsWrap>
              <Skill>Responsive Design</Skill>
            </SkillsWrap>
            <SkillsWrap>
              <Skill>Home Care</Skill>
            </SkillsWrap>
          </SkillsContainer>

          <Title>Spoken Languages</Title>
          <SkillsContainer>
            <SkillsWrap>
              <Language>English</Language>
            </SkillsWrap>
            <SkillsWrap>
              <Language>German</Language>
            </SkillsWrap>
            <SkillsWrap>
              <Language>French</Language>
            </SkillsWrap>
          </SkillsContainer>
    </OverviewWrap>
  )
}

export default ProfileOverview