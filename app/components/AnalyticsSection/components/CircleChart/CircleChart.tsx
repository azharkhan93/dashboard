import styled from "styled-components"
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,ArcElement,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Col } from "@/app/components/styled/Col.styled";
ChartJS.register(CategoryScale,LinearScale,BarElement,ArcElement, PointElement,LineElement,Title,Tooltip,Legend);



const AnotherInnerDiv = styled(Col)`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 20vw;
  background-color: white; */
  border: 2px solid red;
  margin: 10px;
  /* border-radius: 10px; */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 2%;

  @media (max-width: 767px) {
 width: 80vw;
  }
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
 const CustomSVG = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="6" fill="#15C39A" />
      <circle cx="6" cy="6" r="5.5" stroke="white" strokeOpacity="0.19" />
    </svg>
  );
  const CustomSVG1 = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#484848"/>
<circle cx="6" cy="6" r="5.5" stroke="white" stroke-opacity="0.19"/>
</svg>

  );
 




export const CircleChart = () =>{
    return (


        <AnotherInnerDiv
        display = "flex"
        alignItems = "center"
        justifyContent = "center"
        flex-direction = "column"
        height= "50vh"
        width = "20vw"
        background = "white"
        borderradius = "10px"
        >

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
              <CustomSVG1 />
              <Paragraph>Incomplete</Paragraph>

            </GapDiv>
          </AnotherInnerDiv>

    )
}