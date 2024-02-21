import React from 'react'
import styled from 'styled-components';



const cardsData = [
    { heading: '23K', paragraph: 'Total Views', svg: <svg width="67" height="59" viewBox="0 0 67 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="67" height="58.8169" rx="5" fill="white" fillOpacity="0.23"/>
    <path d="M32.4998 36.5004C34.7826 36.5004 36.6332 34.6498 36.6332 32.367C36.6332 30.0841 34.7826 28.2335 32.4998 28.2335C30.2169 28.2335 28.3663 30.0841 28.3663 32.367C28.3663 34.6498 30.2169 36.5004 32.4998 36.5004Z" fill="#FCFCFC"/>
    <path d="M47.9384 32.0156C46.723 28.8718 44.6131 26.153 41.8693 24.1952C39.1255 22.2375 35.8682 21.1267 32.5 21C29.1318 21.1267 25.8745 22.2375 23.1307 24.1952C20.3869 26.153 18.277 28.8718 17.0616 32.0156C16.9795 32.2427 16.9795 32.4913 17.0616 32.7183C18.277 35.8622 20.3869 38.581 23.1307 40.5387C25.8745 42.4965 29.1318 43.6073 32.5 43.734C35.8682 43.6073 39.1255 42.4965 41.8693 40.5387C44.6131 38.581 46.723 35.8622 47.9384 32.7183C48.0205 32.4913 48.0205 32.2427 47.9384 32.0156ZM32.5 39.0838C31.1715 39.0838 29.8729 38.6899 28.7683 37.9519C27.6637 37.2138 26.8028 36.1648 26.2944 34.9374C25.7861 33.7101 25.653 32.3595 25.9122 31.0566C26.1714 29.7537 26.8111 28.5568 27.7505 27.6175C28.6898 26.6781 29.8867 26.0384 31.1896 25.7792C32.4925 25.52 33.8431 25.653 35.0704 26.1614C36.2978 26.6698 37.3468 27.5307 38.0849 28.6353C38.8229 29.7399 39.2169 31.0385 39.2169 32.367C39.2141 34.1476 38.5056 35.8544 37.2465 37.1135C35.9875 38.3726 34.2806 39.0811 32.5 39.0838Z" fill="#FCFCFC"/>
    </svg>
     },
    { heading: '13K', paragraph: 'Total Likes', svg: <svg width="67" height="59" viewBox="0 0 67 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="67" height="58.8169" rx="5" fill="white" fillOpacity="0.23"/>
    <path d="M48 26.4545C48 25.7794 47.7318 25.132 47.2545 24.6546C46.7771 24.1773 46.1296 23.9091 45.4545 23.9091H37.4109L38.6327 18.0927C38.6582 17.9655 38.6709 17.8255 38.6709 17.6855C38.6709 17.1636 38.4545 16.68 38.1109 16.3364L36.7618 15L28.3873 23.3745C27.9164 23.8455 27.6364 24.4818 27.6364 25.1818V37.9091C27.6364 38.5842 27.9045 39.2316 28.3819 39.709C28.8593 40.1864 29.5067 40.4545 30.1818 40.4545H41.6364C42.6927 40.4545 43.5964 39.8182 43.9782 38.9018L47.8218 29.9291C47.9364 29.6364 48 29.3309 48 29V26.4545ZM20 40.4545H25.0909V25.1818H20V40.4545Z" fill="white"/>
    </svg>
    },
    { heading: '75%', paragraph: 'Complete', svg:<svg width="67" height="59" viewBox="0 0 67 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="67" height="58.8169" rx="5" fill="white" fillOpacity="0.23"/>
    <path d="M35 18C36.1934 18 37.3444 18.1523 38.4531 18.457C39.5618 18.7617 40.5944 19.2018 41.5508 19.7773C42.5072 20.3529 43.3831 21.0299 44.1787 21.8086C44.9743 22.5872 45.6556 23.4632 46.2227 24.4365C46.7897 25.4098 47.2256 26.4466 47.5303 27.5469C47.835 28.6471 47.9915 29.7982 48 31C48 32.1934 47.8477 33.3444 47.543 34.4531C47.2383 35.5618 46.7982 36.5944 46.2227 37.5508C45.6471 38.5072 44.9701 39.3831 44.1914 40.1787C43.4128 40.9743 42.5368 41.6556 41.5635 42.2227C40.5902 42.7897 39.5534 43.2256 38.4531 43.5303C37.3529 43.835 36.2018 43.9915 35 44C33.8066 44 32.6556 43.8477 31.5469 43.543C30.4382 43.2383 29.4056 42.7982 28.4492 42.2227C27.4928 41.6471 26.6169 40.9701 25.8213 40.1914C25.0257 39.4128 24.3444 38.5368 23.7773 37.5635C23.2103 36.5902 22.7744 35.5534 22.4697 34.4531C22.165 33.3529 22.0085 32.2018 22 31C22 29.8066 22.1523 28.6556 22.457 27.5469C22.7617 26.4382 23.2018 25.4056 23.7773 24.4492C24.3529 23.4928 25.0299 22.6169 25.8086 21.8213C26.5872 21.0257 27.4632 20.3444 28.4365 19.7773C29.4098 19.2103 30.4466 18.7744 31.5469 18.4697C32.6471 18.165 33.7982 18.0085 35 18ZM42.6553 26.6963L40.9287 24.9697L32.5625 33.3359L29.0713 29.8447L27.3447 31.5713L32.5625 36.7891L42.6553 26.6963Z" fill="white"/>
    </svg>
    
     },
    { heading: '23%', paragraph: 'Remaining', svg: <svg width="67" height="59" viewBox="0 0 67 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="67" height="58.8169" rx="5" fill="white" fillOpacity="0.23"/>
    <path d="M49 29C49 37.28 42.28 44 34 44C25.72 44 19 37.28 19 29C19 24.86 20.68 21.11 23.395 18.395L34 29V14C42.28 14 49 20.72 49 29Z" fill="white"/>
    </svg>
     },
  ];
const CardsRowContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin: 20px;
  
`;
const CardContainer3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
   gap: 7px;
  width: 220px;
  height: 100px;
  background-color: black;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
`;

const Svg3 = styled.svg`
  width: 60px;
  height: 50px;
  fill: #FCFCFC;
 
   
`;

const ContentContainer2 = styled.div`
   display: flex;
 flex-direction: column;
   align-items: center;
  text-align: center;
   justify-content: center;
`;

const Heading = styled.h3`
  font-size: 18px;
  color: white;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: white;
`;

 const Cards = () => {
  return (
    <div>
      <CardsRowContainer>
        {cardsData.map((card, index) => (
          <CardContainer3 key={index}>
            <Svg3>{card.svg}</Svg3>
            <ContentContainer2>
              <Heading>{card.heading}</Heading>
              <Paragraph>{card.paragraph}</Paragraph>
            </ContentContainer2>
          </CardContainer3>
        ))}
      </CardsRowContainer>
    </div>
  )
}
export default Cards;

