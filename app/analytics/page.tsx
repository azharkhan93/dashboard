"use client"
import styled from 'styled-components';
import { Box } from '../components/styled/Box.styled';
import { Headings } from '../components/styled/Headings.styled';
import { AnalyticsSection } from '../components';


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



const ProfitOverviewContainer = styled.div`
height: 7vh;
width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background: green;
  gap: 5px;
`;

const ProfitHeading = styled.h2`
  font-size: 12px;
  color: black;
  text-align: start;
  /* margin-bottom: 10px; */
`;

const ProfitParagraph = styled.p`
  font-size: 9px;
  text-align: start;
  color: black;
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
              Analytics
            </Headings>

            <Headings fontHeading="22px" textColor="black" >Get insigths for all of your posted articles</Headings>

          </Headings>
          <SvgContainer alignSelf="flex-end">
            <svg width="20" height="22" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.89945 23.2222C7.16349 24.1046 7.70509 24.8782 8.44382 25.4282C9.18255 25.9783 10.079 26.2754 11 26.2754C11.921 26.2754 12.8174 25.9783 13.5562 25.4282C14.2949 24.8782 14.8365 24.1046 15.1006 23.2222H6.89945ZM0 22H22V18.3333L19.5556 14.6667V8.55556C19.5556 7.43202 19.3343 6.31949 18.9043 5.28149C18.4743 4.24348 17.8441 3.30032 17.0497 2.50586C16.2552 1.71141 15.3121 1.08121 14.2741 0.651253C13.2361 0.221296 12.1235 0 11 0C9.87647 0 8.76394 0.221296 7.72593 0.651253C6.68792 1.08121 5.74477 1.71141 4.95031 2.50586C4.15585 3.30032 3.52565 4.24348 3.0957 5.28149C2.66574 6.31949 2.44444 7.43202 2.44444 8.55556V14.6667L0 18.3333V22Z" fill="black" />
            </svg>
          </SvgContainer>
        </Container>
        <ProfitOverviewContainer>
      <ProfitHeading>Overview of Profit</ProfitHeading>
      <ProfitParagraph>
      Overview of Profit
      </ProfitParagraph>
    </ProfitOverviewContainer>

        <AnalyticsSection />


        

      </SmallConatiner>




    </DashboardContainer>
  )
}

export default page;
