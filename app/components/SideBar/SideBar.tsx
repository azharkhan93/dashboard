"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import { NvigationSection } from './components/NavigationSection';

const SidebarContainer = styled.div`
width: 18%;
height: 100vh;
background-color: grey;
display: flex;
flex-direction: column;
align-items: center;

justify-content: center;
gap: 10px;
/* margin: auto; */

 @media (max-width: 768px) {
   display: ${(props: { isOpen: any; }) => (props.isOpen ? 'block' : 'none')};
  //  width: 160px;
  //  gap: 10px;
}
`;
const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  color: green;
  z-index: 5;
  width: 100%;
  height: 70px; /* Set height according to your design */

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: green;
    height: 70px; 
    width: 80px;
  }
`;
// const HamburgerMenu = styled.div`
//   display: none; 
//   cursor: pointer;
//   color: green;
//   z-index: 5;


//   @media (max-width: 768px) {
//     display: block; 
//     background-color: green;
//     height: 1px;
//   }
// `;

const SvgWrapper1 = styled.div`
  display: none; 
  cursor: pointer;
  color: green;
  // z-index: 5;

`;
const SvgWrapper = styled.div`
  width: 70px; 
  height: 70px; 

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const EmailText = styled.p`
  font-size: 15px; 
  color: white; 
`;

const BottomCircle = styled.div`

  width: 70px;
  height: 70px;
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  
`;



export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
    <HamburgerMenu onClick={toggleSidebar}>
      
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </HamburgerMenu>
    

    <SidebarContainer isOpen={isOpen} >
    
    <SvgWrapper>
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="white" fillOpacity="0.19" />
          </svg>
        </SvgWrapper>
        <EmailText>siddique@gmail.com</EmailText>
        <NvigationSection/>

        {/* <HelloWorld/> */}
        
        <BottomCircle>
          <svg width="100%" height="100%" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="43" cy="43" r="43" fill="white" fillOpacity="0.07" />
          </svg>
        </BottomCircle> 
        

      </SidebarContainer>
      </>
  );
}



