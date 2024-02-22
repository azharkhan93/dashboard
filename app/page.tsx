"use client"
import styled from 'styled-components';
import { SideBar, CustomConatiner } from './components';

const DashboardContainer = styled.div`
display: flex;
justify-content: space-between;
position: relative;
height: 100vh;
background: #000000;
overflow: hidden; 
`;
  



export default function Home() {
  return (
    <main>
      <DashboardContainer>
      <SideBar/>
      <CustomConatiner />
      
      </DashboardContainer>
      
    </main>
  );
}
