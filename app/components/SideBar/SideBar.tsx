"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import { HelloWorld } from '../CustomConatiner/components/HelloWorld';
const SidebarContainer = styled.div`
width: 220px;
height: 100vh;
background-color: grey;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 30px;

@media (max-width: 768px) {
  display: none; 
  height: 130vh;
  // background-color: green;
  // height: 1px;
}
  // @media (max-width: 768px) {
  //   display: ${(props: { isOpen: any; }) => (props.isOpen ? 'block' : 'none')};
`;
const SvgWrapper1 = styled.div`
  display: none; 
  cursor: pointer;
  color: green;
  // z-index: 5;


  @media (max-width: 768px) {
    display: block; 
    background-color: green;
    height: 1px;
  }
`;
const SvgWrapper = styled.div`
  width: 70px; 
  height: 70px; 
`;

const EmailText = styled.p`
  font-size: 14px; 
  color: white; 
`;

const BottomCircle = styled.div`

  width: 70px;
  height: 70px;
`;



export const SideBar = () => {

  return (
    <>
    <SvgWrapper1 >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" fill="green">
          <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
        </svg>
      </SvgWrapper1>
    <SidebarContainer >
    <SvgWrapper>
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="white" fillOpacity="0.19" />
          </svg>
        </SvgWrapper>
        <EmailText>siddique@gmail.com</EmailText>

        <HelloWorld/>
        
        <BottomCircle>
          <svg width="100%" height="100%" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="43" cy="43" r="43" fill="white" fillOpacity="0.07" />
          </svg>
        </BottomCircle> 
        

      </SidebarContainer>
      </>
  );
}



