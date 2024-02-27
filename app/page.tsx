"use client"
import styled from 'styled-components';
import { SideBar, CustomConatiner } from './components';
import { Box } from './components/styled/Box.styled';
// const DashboardContainer = styled.div`
// display: flex;
// position: relative;
// height: 100vh;
// background: #000000;
// overflow: hidden; 
// justifyContent: space-between;
//       alignItems: center;

// @media (max-width: 767px) {
//   height: 1000%; 
// }
// `;

export default function Home() {
  return (
    <main>
      {/* <DashboardContainer> */}
       <Box 
        display= "flex"
      height="100vh"
      width="100vw"
      justifyContent="space-between"
      alignItems ="center"
      background = "#000000"
      position = "relative"
      overflow = "hidden"
      > 

     <SideBar/>
      <CustomConatiner />

    </Box>
    {/* </DashboardContainer> */}
      
      
    </main>
  );
}
