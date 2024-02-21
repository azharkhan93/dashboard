
"use client"

import styled from 'styled-components';
import { SideBar, CustomConatiner } from './components';
// import Container from '../app/Components/DashboardContainer/index'
// import SideBar from '../app/Components/SideBar/index'
// import Cards from './Components/Cards';
// import Image from 'next/image';
const DashboardContainer = styled.div`
display: flex;
justify-content: space-between;
position: relative;
height: 100vh;
background: #000000;
overflow: hidden; 
`;
  





// const Rectangle1 = styled.div`
//   position: absolute;
//   width: 1125px;
//   height: 705px;
//   left: 220px;
//   // top: calc(70% - 997px/2 + 1.5px);
//   background: #E6E6E6;
//   border-radius: 30px;
//   // position: relative;
// `;




// const ParentContainer = styled.div`
//   padding: 20px; 
//   margin-top: 25px
   
// `;
// const HeadingInsideRectangle = styled.h1`
//   color: black;
//   font-size: 24px;
//   text-allign:
//   font: bold;
// `;
// const HeadingInsideRectangle2 = styled.h1`
//   color: black;
//   font-size: 24px;
//   text-allign:
// `;

// const CloseButton = styled.div`
//   position: absolute;
//   top: 40px; 
//   right: 30px; 
// `;

// const SmallDashboardContainer = styled.div`
//   position: relative;
//   // display: flex;
//   // align-items: center;
  
//   height: 58vh; 
//   width: 93%; 
//   background: #000000;
//    border-radius: 30px;
//    margin: 0 auto;
//   // overflow: hidden; 
// `;

// const Heading1 = styled.h1`
// margin-left: 20px;
//   font-family: 'Poppins';
//   font-size: 20px;
//   font-weight: 600;
//   color: white;
//   align-self: flex-start;
// `;

// const HrLine = styled.hr`
//   width: 100%;
//   border: 1px solid rgba(110, 111, 113, 0.45);
//   margin-top: 20px;
 
// `;
// const DummyCard = styled.div`
// margin-top: 10px;
//   box-sizing: border-box;
//   position: absolute;
//   width: 980px;
//   height: 158px;
//   left: calc(35% - 900px/2 + 114.5px);
// background: #E6E6E6;
//   border: 1px solid rgba(72, 72, 72, 0.28);
//   border-radius: 15px;
//   padding: 20px; 
  
// `;
// const CardImageContainer = styled.div`
//   width: 200px; 
//   height: 180px; 
//   // border-radius: 50%; 
//    margin-left: -55px; 
//   overflow: hidden; 

// margin-top: -20px;



 
  
// `;

// const CardImage = styled(Image)`
//   width: 100%;
//   height: 88%;
//    object-fit: contain;
   
//   `;
//   const CardContent3 = styled.div`
//    margin-left: 135px; 
//    margin-top: -165px;
// `;

// const CardHeading = styled.h2`
//   font-size: 20px;
//   margin-bottom: 10px;
//   color: #000000;
// `;

// const CardParagraph = styled.p`
//   font-size: 14px;
//   margin-bottom: 13px;
//   color: #000000;
//   max-width: 370px; 
 
// `;

// const CardDate = styled.span`
//   font-size: 14px;
//   color: #484848;
//    padding-top: -20px;
// `;



// const SvgContainer = styled.div`
//   position: absolute;
//   top: 17%;
//   right: -135px; 
//   transform: translateY(-50%);
//   display: flex;
//   // gap: 10px; 
// `;
// const TextContainer = styled.div`
//   position: absolute;
//   top: 16%;
//   right: 100px; 
//   transform: translateY(-50%);
//   font-size: 17px; 
//   color: black; 
//   // margin-left: -20px;
// `;




export default function Home() {
  return (
    <main>
      <DashboardContainer>
      {/* <CustomConatiner /> */}
      <SideBar/>
      <CustomConatiner />
      
      
      
        
        
    
        {/* <CustomConatiner /> */}

        {/* <SideBar/>
      
      <Rectangle1>
        
      
      <ParentContainer>
      <CloseButton>
      <svg width="20" height="20" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.89945 23.2222C7.16349 24.1046 7.70509 24.8782 8.44382 25.4282C9.18255 25.9783 10.079 26.2754 11 26.2754C11.921 26.2754 12.8174 25.9783 13.5562 25.4282C14.2949 24.8782 14.8365 24.1046 15.1006 23.2222H6.89945ZM0 22H22V18.3333L19.5556 14.6667V8.55556C19.5556 7.43202 19.3343 6.31949 18.9043 5.28149C18.4743 4.24348 17.8441 3.30032 17.0497 2.50586C16.2552 1.71141 15.3121 1.08121 14.2741 0.651253C13.2361 0.221296 12.1235 0 11 0C9.87647 0 8.76394 0.221296 7.72593 0.651253C6.68792 1.08121 5.74477 1.71141 4.95031 2.50586C4.15585 3.30032 3.52565 4.24348 3.0957 5.28149C2.66574 6.31949 2.44444 7.43202 2.44444 8.55556V14.6667L0 18.3333V22Z" fill="black"/>
    </svg>
      </CloseButton>
      <HeadingInsideRectangle>Hey Siddique,</HeadingInsideRectangle>
      <HeadingInsideRectangle2>Here’s an overview of your Dashboard</HeadingInsideRectangle2>
      <Cards/>
      
    
    
    
    </ParentContainer>
    <SmallDashboardContainer >
    <Heading1>Recent Posts</Heading1>
    
    <HrLine />
    <DummyCard>
    <CardImageContainer>
          <CardImage
            src="/person.png" 
            alt="Dummy Image"
            width={300}
            height={300}
          />
        </CardImageContainer>
        <CardContent3>
        <CardHeading>Lorem ipsum dolor</CardHeading>
        <CardParagraph>Lorem ipsum dolor sit amet consectetur. Arcu purus sed commodo vestibulum nam nisl lorem. Cras facilisi morbi viverra orci tempor. Nulla diam.</CardParagraph>
        <CardDate>30 Jan 2024</CardDate>
      </CardContent3>
      <SvgContainer>
       
        <svg width="150" height="30" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 17.0003C12.6201 17.0003 13.9334 15.687 13.9334 14.0669C13.9334 12.4468 12.6201 11.1335 11 11.1335C9.37993 11.1335 8.0666 12.4468 8.0666 14.0669C8.0666 15.687 9.37993 17.0003 11 17.0003Z" fill="black"/>
<path d="M21.9563 13.8176C21.0938 11.5864 19.5964 9.65695 17.6492 8.26759C15.702 6.87823 13.3904 6.08989 11 6C8.60964 6.08989 6.29802 6.87823 4.35083 8.26759C2.40363 9.65695 0.906232 11.5864 0.0436893 13.8176C-0.0145631 13.9787 -0.0145631 14.1551 0.0436893 14.3162C0.906232 16.5474 2.40363 18.4768 4.35083 19.8662C6.29802 21.2556 8.60964 22.0439 11 22.1338C13.3904 22.0439 15.702 21.2556 17.6492 19.8662C19.5964 18.4768 21.0938 16.5474 21.9563 14.3162C22.0146 14.1551 22.0146 13.9787 21.9563 13.8176ZM11 18.8337C10.0572 18.8337 9.1356 18.5541 8.35171 18.0303C7.56781 17.5066 6.95684 16.7621 6.59605 15.8911C6.23526 15.0201 6.14086 14.0616 6.32479 13.1369C6.50872 12.2123 6.96271 11.3629 7.62936 10.6963C8.29601 10.0296 9.14537 9.57561 10.07 9.39169C10.9947 9.20776 11.9532 9.30216 12.8242 9.66294C13.6952 10.0237 14.4397 10.6347 14.9635 11.4186C15.4872 12.2025 15.7668 13.1241 15.7668 14.0669C15.7649 15.3305 15.262 16.5419 14.3685 17.4354C13.475 18.3289 12.2636 18.8318 11 18.8337Z" fill="black"/>
</svg>
        
        <svg width="150" height="30" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          
        </svg>
      </SvgContainer>
      <TextContainer>
        3.2k
      </TextContainer>
        
        
        
      </DummyCard>
    
</SmallDashboardContainer>

    
</Rectangle1> */}
      
      </DashboardContainer>
      
    </main>
  );
}
