import { Line } from 'react-chartjs-2';
import styled from "styled-components"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Box } from '@/app/components/styled/Box.styled';
// import { Headings } from '@/app/components/styled/Headings.styled';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend);

const InnerDiv = styled(Box)`

  border: 2px solid red;
  /* margin: 10px;  */
  /* border-radius: 10px; */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
  flex-direction: column;

    width: 95vw;
  }
`;
const AdditionalDiv = styled(Box)`
  /* height: 40vh;
  width: 40vw;
  background-color: white;   */
  border: 2px solid yellow; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  /* border-radius: 10px; */

  @media (max-width: 767px) {
 width: 94vw;
  }
`;



const CustomSVG = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="6" r="6" fill="#15C39A" />
        <circle cx="6" cy="6" r="5.5" stroke="white" strokeOpacity="0.19" />
    </svg>
);





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
const options = {
    responsive: true,
    maintainAspectRatio: false,
    // cutout: '92%',
    // height: 100,
    // width: 100,


};


const MyChartComponent = () => {
    return <Line options={options} data={data} />;
};


export const LineChart = () => {
    return (

        <InnerDiv
            display="flex"
            alignItems="center"
            justifyContent="center"

            height="50vh"
            width="50vw"
            background="white"
            borderradius="10px"
        >

            <AdditionalDiv
            height="40vh"
            width="40vw"
            background="white"
            borderradius="10px">

                <MyChartComponent />
            </AdditionalDiv>

        </InnerDiv>

    )
}