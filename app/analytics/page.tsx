"use client"
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
// import { Chart, ArcElement, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Box } from '../components/styled/Box.styled';
import { Headings } from '../components/styled/Headings.styled';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
   BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
   BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend

 
  
);



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


const ChartDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 60vh;
width: 87vw;
background: #E6E6E6;
margin: auto;

@media (max-width: 767px) {
  flex-direction: column;
  height: auto;

    width: 97vw;
  }

`;
const InnerDiv = styled.div`
  height: 50vh;
  width: 50vw;
  background-color: white;
  border: 2px solid red;
  margin: 10px; 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
  flex-direction: column;

    width: 95vw;
  }
`;
const AdditionalDiv = styled.div`
  height: 40vh;
  width: 40vw;
  background-color: white;  
  border: 2px solid yellow; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* margin: 10px; */
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;

  @media (max-width: 767px) {
 width: 94vw;
  }
`;
const AnotherInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 20vw;
  background-color: white;
  border: 2px solid red;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 2%;
  @media (max-width: 767px) {
 width: 80vw;
  }
   

`;

const NewDiv = styled.div`
position: relative;
margin-top: 10%;
  height: 25vh;  
  width: 20vw;   
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
 width: 44vw;
  }
`;

const Heading = styled.h2`
  font-size: 14px;
  color: black;
  
`;

const Paragraph = styled.p`
  font-size: 12px;
  color: black;
  text-align: center;
`;
const GapDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px; 
  gap: 3px;
`;
const CompletionText = styled.p`
  position: absolute;
  
  color: black;
  font-size: 13px;
`;

const Container4 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: white;
  height: 40px;

  /* @media (max-width: 767px){
    flex-direction: column;
  } */
  /* width: 40px; */
`;
const DummySvg = styled.svg`
 height: 18px;
 width: 15px;
 `
 ;
const ParentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25vh; 
  width: 87vw;
  margin: auto;
  
  background-color: #E6E6E6; 
  @media (max-width: 767px){
    flex-direction: column;
    height: auto; 
    width: 97vw;
    gap: 20px;

  }
 
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  
  border-radius: 10px;
  /* overflow: hidden; */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 15vh;
  width: 20vw;
  @media (max-width: 767px){
    height: 18vh;
    width: 81vw;
    

  }
  
`;

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  /* flex-grow: 1; */
`

const Heading5 = styled.div`
  font-size: 14px;
`;

const Paragraph5 = styled.div`
  margin-top: 7px;
  color: #555;
  font-size: 12px;
`;

const SvgContainer5 = styled.div`
flex-grow: 1;

 display: flex;
  align-items: center;
  justify-content: flex-end; 
  background-color: white;
`;

const StyledSvg = styled.svg`
  width: 100px;
  height: 47px;
  
`;






const CustomSVG = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="6" fill="#15C39A" />
    <circle cx="6" cy="6" r="5.5" stroke="white" strokeOpacity="0.19" />
  </svg>
);

const DoughnutChart = () => {
  const data = {
    // labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [1, 1, 1,],
        backgroundColor: ['#484848', '#15C39A', '#000'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '92%',
    // height: 100,
    // width: 100,


  };

  return <Doughnut data={data} options={options} />;
};


const options = {
  responsive: true,
  maintainAspectRatio: false,
  // cutout: '92%',
  // height: 100,
  // width: 100,


};


const data = {
  labels: ['16/04', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [120, 200, 150, 400, 250, 300, 180],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [300, 150, 100, 350, 200, 250, 120],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


const MyChartComponent = () => {
  return <Line options={options} data={data} />;
};







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
        <ChartDiv>
          <InnerDiv>
          <Container
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          background="
          #E6E6E6"

          overflow="hidden"
        >
          <Headings flexGrow={1}>
            <Headings fontHeading="12px" textColor="black">
              Revenue Updates
            </Headings>

            <Headings fontHeading="9px" textColor="black" >Overview of Profit</Headings>

          </Headings>
          
          <SvgContainer >
          <Container4>
          <DummySvg>

          <svg width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M0 20.7031C0 21.0139 0.123465 21.312 0.343234 21.5318C0.563003 21.7515 0.861074 21.875 1.17188 21.875H20.7031C21.0139 21.875 21.312 21.7515 21.5318 21.5318C21.7515 21.312 21.875 21.0139 21.875 20.7031V7.03125H0V20.7031ZM15.625 8.78906C15.625 8.73726 15.6456 8.68758 15.6822 8.65096C15.7188 8.61433 15.7685 8.59375 15.8203 8.59375H17.7734C17.8252 8.59375 17.8749 8.61433 17.9115 8.65096C17.9482 8.68758 17.9688 8.73726 17.9688 8.78906V10.7422C17.9688 10.794 17.9482 10.8437 17.9115 10.8803C17.8749 10.9169 17.8252 10.9375 17.7734 10.9375H15.8203C15.7685 10.9375 15.7188 10.9169 15.6822 10.8803C15.6456 10.8437 15.625 10.794 15.625 10.7422V8.78906ZM15.625 12.6953C15.625 12.6435 15.6456 12.5938 15.6822 12.5572C15.7188 12.5206 15.7685 12.5 15.8203 12.5H17.7734C17.8252 12.5 17.8749 12.5206 17.9115 12.5572C17.9482 12.5938 17.9688 12.6435 17.9688 12.6953V14.6484C17.9688 14.7002 17.9482 14.7499 17.9115 14.7865C17.8749 14.8232 17.8252 14.8438 17.7734 14.8438H15.8203C15.7685 14.8438 15.7188 14.8232 15.6822 14.7865C15.6456 14.7499 15.625 14.7002 15.625 14.6484V12.6953ZM11.7188 8.78906C11.7188 8.73726 11.7393 8.68758 11.776 8.65096C11.8126 8.61433 11.8623 8.59375 11.9141 8.59375H13.8672C13.919 8.59375 13.9687 8.61433 14.0053 8.65096C14.0419 8.68758 14.0625 8.73726 14.0625 8.78906V10.7422C14.0625 10.794 14.0419 10.8437 14.0053 10.8803C13.9687 10.9169 13.919 10.9375 13.8672 10.9375H11.9141C11.8623 10.9375 11.8126 10.9169 11.776 10.8803C11.7393 10.8437 11.7188 10.794 11.7188 10.7422V8.78906ZM11.7188 12.6953C11.7188 12.6435 11.7393 12.5938 11.776 12.5572C11.8126 12.5206 11.8623 12.5 11.9141 12.5H13.8672C13.919 12.5 13.9687 12.5206 14.0053 12.5572C14.0419 12.5938 14.0625 12.6435 14.0625 12.6953V14.6484C14.0625 14.7002 14.0419 14.7499 14.0053 14.7865C13.9687 14.8232 13.919 14.8438 13.8672 14.8438H11.9141C11.8623 14.8438 11.8126 14.8232 11.776 14.7865C11.7393 14.7499 11.7188 14.7002 11.7188 14.6484V12.6953ZM11.7188 16.6016C11.7188 16.5498 11.7393 16.5001 11.776 16.4635C11.8126 16.4268 11.8623 16.4062 11.9141 16.4062H13.8672C13.919 16.4062 13.9687 16.4268 14.0053 16.4635C14.0419 16.5001 14.0625 16.5498 14.0625 16.6016V18.5547C14.0625 18.6065 14.0419 18.6562 14.0053 18.6928C13.9687 18.7294 13.919 18.75 13.8672 18.75H11.9141C11.8623 18.75 11.8126 18.7294 11.776 18.6928C11.7393 18.6562 11.7188 18.6065 11.7188 18.5547V16.6016ZM7.8125 12.6953C7.8125 12.6435 7.83308 12.5938 7.86971 12.5572C7.90633 12.5206 7.95601 12.5 8.00781 12.5H9.96094C10.0127 12.5 10.0624 12.5206 10.099 12.5572C10.1357 12.5938 10.1562 12.6435 10.1562 12.6953V14.6484C10.1562 14.7002 10.1357 14.7499 10.099 14.7865C10.0624 14.8232 10.0127 14.8438 9.96094 14.8438H8.00781C7.95601 14.8438 7.90633 14.8232 7.86971 14.7865C7.83308 14.7499 7.8125 14.7002 7.8125 14.6484V12.6953ZM7.8125 16.6016C7.8125 16.5498 7.83308 16.5001 7.86971 16.4635C7.90633 16.4268 7.95601 16.4062 8.00781 16.4062H9.96094C10.0127 16.4062 10.0624 16.4268 10.099 16.4635C10.1357 16.5001 10.1562 16.5498 10.1562 16.6016V18.5547C10.1562 18.6065 10.1357 18.6562 10.099 18.6928C10.0624 18.7294 10.0127 18.75 9.96094 18.75H8.00781C7.95601 18.75 7.90633 18.7294 7.86971 18.6928C7.83308 18.6562 7.8125 18.6065 7.8125 18.5547V16.6016ZM3.90625 12.6953C3.90625 12.6435 3.92683 12.5938 3.96346 12.5572C4.00008 12.5206 4.04976 12.5 4.10156 12.5H6.05469C6.10649 12.5 6.15617 12.5206 6.19279 12.5572C6.22942 12.5938 6.25 12.6435 6.25 12.6953V14.6484C6.25 14.7002 6.22942 14.7499 6.19279 14.7865C6.15617 14.8232 6.10649 14.8438 6.05469 14.8438H4.10156C4.04976 14.8438 4.00008 14.8232 3.96346 14.7865C3.92683 14.7499 3.90625 14.7002 3.90625 14.6484V12.6953ZM3.90625 16.6016C3.90625 16.5498 3.92683 16.5001 3.96346 16.4635C4.00008 16.4268 4.04976 16.4062 4.10156 16.4062H6.05469C6.10649 16.4062 6.15617 16.4268 6.19279 16.4635C6.22942 16.5001 6.25 16.5498 6.25 16.6016V18.5547C6.25 18.6065 6.22942 18.6562 6.19279 18.6928C6.15617 18.7294 6.10649 18.75 6.05469 18.75H4.10156C4.04976 18.75 4.00008 18.7294 3.96346 18.6928C3.92683 18.6562 3.90625 18.6065 3.90625 18.5547V16.6016ZM20.7031 1.5625H17.9727V0H15.6289V1.5625H6.24609V0H3.90234V1.5625H1.17188C1.01857 1.56121 0.866521 1.59027 0.724494 1.648C0.582468 1.70574 0.453268 1.791 0.344339 1.89889C0.23541 2.00677 0.148905 2.13514 0.0898074 2.27661C0.0307098 2.41807 0.000187837 2.56983 0 2.72314V5.46875H21.875V2.72314C21.8748 2.56983 21.8443 2.41807 21.7852 2.27661C21.7261 2.13514 21.6396 2.00677 21.5307 1.89889C21.4217 1.791 21.2925 1.70574 21.1505 1.648C21.0085 1.59027 20.8564 1.56121 20.7031 1.5625Z" fill="white"/>
</svg>
</DummySvg>
      
      <Headings fontHeading="12px" textColor="black">
              Revenue Updates
            </Headings>
            <DummySvg>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7H9ZM7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928933C14.6805 0.538408 14.0474 0.538408 13.6569 0.928933L8 6.58579L2.34315 0.928933C1.95262 0.538408 1.31946 0.538408 0.928933 0.928933C0.538408 1.31946 0.538408 1.95262 0.928933 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="white"/>
</svg>

        </DummySvg>
    </Container4>
    <GapDiv>
              
              <CustomSVG />
              <Paragraph>Complete</Paragraph>
              <CustomSVG />
              <Paragraph>Incomplete</Paragraph>

            </GapDiv>
    
        {/* <DummySvg>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7H9ZM7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928933C14.6805 0.538408 14.0474 0.538408 13.6569 0.928933L8 6.58579L2.34315 0.928933C1.95262 0.538408 1.31946 0.538408 0.928933 0.928933C0.538408 1.31946 0.538408 1.95262 0.928933 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="white"/>
</svg>

        </DummySvg> */}
          </SvgContainer>


        </Container>
        <AdditionalDiv>
            
            <MyChartComponent />
            </AdditionalDiv>
            
          </InnerDiv>


          <AnotherInnerDiv>

            <Heading>Profile updates</Heading>
            <Paragraph>
              Overview of Profile
            </Paragraph>
            <NewDiv>
              <DoughnutChart />
              <CompletionText>70% Complete</CompletionText>
            </NewDiv>

            <GapDiv>
              
              <CustomSVG />
              <Paragraph>Complete</Paragraph>
              <CustomSVG />
              <Paragraph>Incomplete</Paragraph>

            </GapDiv>
          </AnotherInnerDiv>


          

        </ChartDiv>
        <ParentContainer>
        <CardContainer>
      <CardContent>
        <Heading5>Profile Views</Heading5>
        <Paragraph5>678K+</Paragraph5>
        <Paragraph5>678K+</Paragraph5>
      </CardContent>
      <SvgContainer5>
        <StyledSvg >
        <svg width="109" height="47" viewBox="0 0 109 47" fill="#6DD26D" xmlns="http://www.w3.org/2000/svg">
<rect y="21" width="5" height="26" rx="2" fill="#6DD26D"/>
<rect x="13" y="12" width="5" height="35" rx="2" fill="#6DD26D"/>
<rect x="26" y="12" width="5" height="35" rx="2" fill="#6DD26D"/>
<rect x="39" width="5" height="47" rx="2" fill="#6DD26D"/>
<rect x="52" y="4" width="5" height="43" rx="2" fill="#6DD26D"/>
<rect x="65" y="12" width="5" height="35" rx="2" fill="#6DD26D"/>
<rect x="78" y="24" width="5" height="23" rx="2" fill="#6DD26D"/>
<rect x="91" y="4" width="5" height="43" rx="2" fill="#6DD26D"/>
<rect x="104" y="21" width="5" height="26" rx="2" fill="#6DD26D"/>
</svg>

        </StyledSvg>
      </SvgContainer5>
    </CardContainer>
    <CardContainer>
      <CardContent>
        <Heading5>Profile Views</Heading5>
        <Paragraph5>678K+</Paragraph5>
        <Paragraph5>678K+</Paragraph5>
      </CardContent>
      <SvgContainer5>
        <StyledSvg >
        <svg width="109" height="47" viewBox="0 0 109 47" fill="#6DD26D" xmlns="http://www.w3.org/2000/svg">
<rect y="21" width="5" height="26" rx="2" fill="#6DD26D"/>
<rect x="13" y="12" width="5" height="35" rx="2" fill="#6DD26D"/>
<rect x="26" y="12" width="5" height="35" rx="2" fill="#6DD26D"/>
<rect x="39" width="5" height="47" rx="2" fill="#6DD26D"/>
<rect x="52" y="4" width="5" height="43" rx="2" fill="#6DD26D"/>
<rect x="65" y="12" width="5" height="35" rx="2" fill="#6DD26D"/>
<rect x="78" y="24" width="5" height="23" rx="2" fill="#6DD26D"/>
<rect x="91" y="4" width="5" height="43" rx="2" fill="#6DD26D"/>
<rect x="104" y="21" width="5" height="26" rx="2" fill="#6DD26D"/>
</svg>

        </StyledSvg>
      </SvgContainer5>
    </CardContainer>
    <CardContainer>
      <CardContent>
        <Heading5>Profile Views</Heading5>
        <Paragraph5>678K+</Paragraph5>
        <Paragraph5>678K+</Paragraph5>
      </CardContent>
      <SvgContainer5>
        <StyledSvg >
        <svg width="109" height="47" viewBox="0 0 109 47" fill="#6DD26D" xmlns="http://www.w3.org/2000/svg">
<rect y="21" width="5" height="26" rx="2" fill="#6DD26D"/>
<rect x="13" y="12" width="5" height="35" rx="2" fill="#6DD26D"/>
<rect x="26" y="12" width="5" height="35" rx="2" fill="#6DD26D"/>
<rect x="39" width="5" height="47" rx="2" fill="#6DD26D"/>
<rect x="52" y="4" width="5" height="43" rx="2" fill="#6DD26D"/>
<rect x="65" y="12" width="5" height="35" rx="2" fill="#6DD26D"/>
<rect x="78" y="24" width="5" height="23" rx="2" fill="#6DD26D"/>
<rect x="91" y="4" width="5" height="43" rx="2" fill="#6DD26D"/>
<rect x="104" y="21" width="5" height="26" rx="2" fill="#6DD26D"/>
</svg>

        </StyledSvg>
      </SvgContainer5>
    </CardContainer>
    </ParentContainer>

      </SmallConatiner>




    </DashboardContainer>
  )
}

export default page;
