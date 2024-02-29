
import React from 'react'

import { LineChart } from './components/LineChart'
import { CircleChart } from './components/CircleChart'
import { StatsCards } from './components/StatsCards'
import styled from 'styled-components';
import { Box } from '../styled/Box.styled';


const ChartDiv = styled(Box)`
/* display: flex;
justify-content: space-between;
align-items: center;
height: 60vh;
width: 87vw;
background: #E6E6E6; */
margin: auto;

@media (max-width: 767px) {
  flex-direction: column;
  height: auto;

    width: 97vw;
  }

`;

export const AnalyticsSection = () => {
  return (
    <>
    <ChartDiv
    height= "60vh"
    width= "87vw"
    display = "flex"
    justifyContent = "space-between"
    alignItems = "center"
     background = "#E6E6E6"
    >
    <LineChart />
    <CircleChart/>
    </ChartDiv>
    <StatsCards/>
    </>
  )
}
