import React from 'react'
import styled from "styled-components"
import StatsCards from "../StatsCards/StatsCards"
import SmallContainer from '../SmallContainer/SmallContainer';
// import { HelloWorld } from './components/HelloWorld';
// import { SmallContiner } from './components/SmallContiner';
// import { smallContiner } from './components/SmallContiner';
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;

`;
const StyledContainer = styled.div`
  width: 1200px;
  height: 700px;
  border-radius: 10px;
  background: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  
`;

const TextContainer = styled.div`
  flex-grow: 1; 
`;

const Heading = styled.h1`
  color: black;
  font-size: 24px;
`;
const Paragraph = styled.h2`
  color: black;
  font-size: 16px;
`;


const SvgContainer = styled.div`
  align-self: flex-end; 
`;




export const CustomConatiner = () => {
  return (
    <CenteredContainer>
        <StyledContainer>
        <Container>
      <TextContainer>
        <Heading>Hey Siddique, 
            </Heading>
            <Paragraph>Here’s an overview of your Dashboard</Paragraph>
        
      </TextContainer>
      <SvgContainer>
        <svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.89945 23.2222C7.16349 24.1046 7.70509 24.8782 8.44382 25.4282C9.18255 25.9783 10.079 26.2754 11 26.2754C11.921 26.2754 12.8174 25.9783 13.5562 25.4282C14.2949 24.8782 14.8365 24.1046 15.1006 23.2222H6.89945ZM0 22H22V18.3333L19.5556 14.6667V8.55556C19.5556 7.43202 19.3343 6.31949 18.9043 5.28149C18.4743 4.24348 17.8441 3.30032 17.0497 2.50586C16.2552 1.71141 15.3121 1.08121 14.2741 0.651253C13.2361 0.221296 12.1235 0 11 0C9.87647 0 8.76394 0.221296 7.72593 0.651253C6.68792 1.08121 5.74477 1.71141 4.95031 2.50586C4.15585 3.30032 3.52565 4.24348 3.0957 5.28149C2.66574 6.31949 2.44444 7.43202 2.44444 8.55556V14.6667L0 18.3333V22Z" fill="black"/>
        </svg>
      </SvgContainer>
    </Container>
    < StatsCards />
    {/* <SmallContiner/> */}
    {/* <HelloWorld/> */}
    
    <SmallContainer />
      </StyledContainer>

      

    </CenteredContainer>
  )
}

