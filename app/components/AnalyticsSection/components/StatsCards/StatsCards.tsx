import { Box } from '@/app/components/styled/Box.styled';
import { Col } from '@/app/components/styled/Col.styled';
import React from 'react';
import styled from 'styled-components';

const ParentContainer = styled(Box)`
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25vh; 
  width: 87vw; */
  margin: auto;
  /* background-color: #E6E6E6;  */

  @media (max-width: 767px){
    flex-direction: column;
    height: auto; 
    width: 97vw;
    gap: 20px;
  }
`;

const CardContainer = styled(Box)`
  /* display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px; */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* height: 15vh;
  width: 20vw; */

  @media (max-width: 767px){
    height: 18vh;
    width: 81vw;
  }
`;

const CardContent = styled(Col)`
  padding: 20px;
  /* display: flex;
  flex-direction: column;
  align-items: start; */
`;

const Heading5 = styled.div`
  font-size: 14px;
`;

const Paragraph5 = styled.div`
  margin-top: 7px;
  color: black;
  font-size: 14px;
  font-weight: bold;
`;
const Paragraph6 = styled.div`
  margin-top: 7px;
  color: black;
  font-size: 10px;
  /* font-weight: bold; */
`;
const Paragraph6WithSvg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 3px; 
  }
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

const NewSvg = (
  <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.56667 8.26667L8.26667 7.56667L1.7 1L7.66667 1V0L0 0L0 7.66667H1L1 1.7L7.56667 8.26667Z" fill="#13DEB9"/>
  </svg>
);

const data = [
  { heading: 'Profile Views', value: '678K+', percentageText: '+9%', svg: NewSvg },
  { heading: 'Total Impression', value: '228K+', percentageText: '+4%', svg: NewSvg},
  { heading: 'Comment count', value: '178K+', percentageText: '+29%', svg: NewSvg },
];
const CommonSvg = (
  <StyledSvg>
   <svg width="109" height="47" viewBox="0 0 109 47" fill="none" xmlns="http://www.w3.org/2000/svg">
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
);


export const StatsCards = () => {
  return (
    <ParentContainer
    display=  "flex"
  alignItems= "center"
  justifyContent = "space-between"
  height = "25vh" 
  width = "87vw"
  background ="#E6E6E6"
  >
      {data.map((item, index) => (
        <CardContainer 

        display= "flex"
  alignItems= "center"
  // justifyContent= "space-between"
  height = "15vh" 
  width = "20vw"
  background ="white"
  borderradius= "10px"
        key={index}
        >
          <CardContent
          display= "flex"
          alignItems= "start"
          flex-direction = "column"
          background = "white"
          >
            <Heading5>{item.heading}</Heading5>
            <Paragraph5>{item.value}</Paragraph5>
            <Paragraph6WithSvg>
              {item.svg}
              <Paragraph6>{`${item.percentageText}`}</Paragraph6>
            </Paragraph6WithSvg>
          </CardContent>
          <SvgContainer5>
            {CommonSvg}
          </SvgContainer5>
        </CardContainer>
      ))}
    </ParentContainer>
  );
};
