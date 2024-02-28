"use client"

import styled from 'styled-components';
import { Box } from '../components/styled/Box.styled';
import { Headings } from '../components/styled/Headings.styled';

import { Buttons } from '../components/styled/Buttons.styled';
import { PricingCards } from '../components';



const DashboardContainer = styled(Box)`
  
  @media (max-width: 767px) {
    height: auto;
  }
`;


const SmallConatiner = styled(Box)`
@media (max-width: 767px) {
    height: auto;
    width: 97vw;
  }
  
`;


const Container = styled(Box)`
position: relative;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 2%;
  @media (max-width: 767px) {
    /* height: auto;
    width: 98vh; */
  }
  `;

const SvgContainer = styled(Headings)`
position: absolute;
top: 0;
right: 0;
`;

const MainDiv = styled(Box)`

border: 3px solid #48484866;
flex-direction: column;

margin: auto;

@media (max-width: 767px) {
  flex-direction: column;
  height: auto;

    width: 97vw;
  }

`;
const InnerDiv = styled.div`
margin-left: 20px;
margin-top: 20px;
  height: 25vh; 
  width: 75vw;  
  background-color: white; 
  border: 3px solid #48484866;
  border-radius: 10px;
  display: flex;
  align-items: center;

 
`;
const Container2 = styled.div`
/* position: relative; */
  display: flex;
  width: 20vw;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f0f0f0;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
`;

const SVG = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Text = styled.p`
  font-size: 11px;
  font-weight: bold;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
/* width: 8vw; */
width: 7vw;
  padding: 8px;
  background-color:#484848;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
`;
const Divider = styled.hr`
/* position: absolute; */
  height: 2px;
  width: 13%; 
  background-color: #ccc;
  
  border: none;
  transform: rotate(90deg);
`;

const AdditionalText = styled.p`
  font-size: 30px;
  font-weight: bold;

`;



const page = () => {
  
  return (
    <DashboardContainer
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      background="#000000"
      position="relative"
      overflow="hidden"
    >

      <SmallConatiner
        height="98vh"
        width="90vw"

        background="
        #E6E6E6"
        position="relative"
        overflow="hidden"
        borderradius="10px"

      >
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          background="
          #E6E6E6"

          overflow="hidden"
        >
          <Headings flexGrow={1}>
            <Headings fontHeading="24px" textColor="black">
            Bill & Payment Information
            </Headings>

            <Headings fontHeading="22px" textColor="black" >select your updated packages</Headings>

          </Headings>
          <SvgContainer alignSelf="flex-end">
            <svg width="20" height="22" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.89945 23.2222C7.16349 24.1046 7.70509 24.8782 8.44382 25.4282C9.18255 25.9783 10.079 26.2754 11 26.2754C11.921 26.2754 12.8174 25.9783 13.5562 25.4282C14.2949 24.8782 14.8365 24.1046 15.1006 23.2222H6.89945ZM0 22H22V18.3333L19.5556 14.6667V8.55556C19.5556 7.43202 19.3343 6.31949 18.9043 5.28149C18.4743 4.24348 17.8441 3.30032 17.0497 2.50586C16.2552 1.71141 15.3121 1.08121 14.2741 0.651253C13.2361 0.221296 12.1235 0 11 0C9.87647 0 8.76394 0.221296 7.72593 0.651253C6.68792 1.08121 5.74477 1.71141 4.95031 2.50586C4.15585 3.30032 3.52565 4.24348 3.0957 5.28149C2.66574 6.31949 2.44444 7.43202 2.44444 8.55556V14.6667L0 18.3333V22Z" fill="black" />
            </svg>
          </SvgContainer>


        </Container>
        <MainDiv
        display="flex"
        justifyContent="space-between"
        alignItems="start"
        height="84vh"
        width="87vw"

        background="
        white"
        overflow="hidden"
        borderradius="10px"
        >

            <InnerDiv>
            <Container2>
      <ContentWrapper>
        <SVG >
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13" cy="13" r="13" fill="#6DD26D"/>
<circle cx="13" cy="13" r="10" stroke="white" stroke-opacity="0.19" stroke-width="6"/>
</svg>

        </SVG>
        <Text>Current Plan</Text>
      </ContentWrapper>
      <ButtonsWrapper>
        <Button>Monthly</Button>
        <Button>Anually</Button>
      </ButtonsWrapper>
      
    </Container2>
    <Divider />
    <AdditionalText>$520/mo</AdditionalText>


    
                
            </InnerDiv>



            <Container2>
      <ContentWrapper>
        
        <Text>Other Plan</Text>
      </ContentWrapper>
      <ButtonsWrapper>
        <Button>Monthly</Button>
        <Button>Anually</Button>
      </ButtonsWrapper>
      
    </Container2>
    <PricingCards/>
    

          

        

        </MainDiv>
        
        
        

      </SmallConatiner>




    </DashboardContainer>
  )
}

export default page;
