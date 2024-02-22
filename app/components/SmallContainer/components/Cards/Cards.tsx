import styled from 'styled-components';

const CardContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 15px;
  margin: 6px;
  width: 1000px;
  height: 115px;
  display: flex;
  align-items: center;
  border: 1px solid #48484847; 
`;

const CardImage = styled.img`
  width: 133px; 
  height: 115px; 
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; 
  margin-left: 15px; 
`;

const CardHeading = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const CardParagraph = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
  width: 540px;
`;

const CardDate = styled.span`
  font-size: 12px;
  color: #888888;
`;



const cardsData = [
  {
    imageSrc: "/rect15.png",
    heading: "Lorem ipsum dolor",
    paragraph: "Lorem ipsum dolor sit amet consectetur. Arcu purus sed commodo vestibulum nam nisl lorem. Cras facilisi morbi viverra orci tempor. Nulla diam.",
    date: "30 Jan 2024",
    
  },
  {
    imageSrc: "/rect15.png",
    heading: "Lorem ipsum dolor",
    paragraph: "Lorem ipsum dolor sit amet consectetur. Arcu purus sed commodo vestibulum nam nisl lorem. Cras facilisi morbi viverra orci tempor. Nulla diam.",
    date: "30 Jan 2024",
   
  },
  {
    imageSrc: "/rect15.png",
    heading: "Lorem ipsum dolor",
    paragraph: "Lorem ipsum dolor sit amet consectetur. Arcu purus sed commodo vestibulum nam nisl lorem. Cras facilisi morbi viverra orci tempor. Nulla diam.",
    date: "30 Jan 2024",

  },
  
];

export const Cards = () => {
  return (
    <CardContainer>
      {cardsData.map((card, index) => (
        <Card key={index}>
          <CardImage src={card.imageSrc} alt={`Card ${index + 1}`} />
          <CardContent>
            <CardHeading>{card.heading}</CardHeading>
            <CardParagraph>{card.paragraph}</CardParagraph>
            <CardDate>{card.date}</CardDate>
          </CardContent>
          
          
        </Card>
      ))}
    </CardContainer>
  );
};


// import styled from "styled-components"
// const CardContainer = styled.div`
//   position: absolute;
//   display: flex;
//   align-items: start;
//   justify-content: center;
//   flex-direction: column;
//   margin-left: auto;
//   margin-right: auto;
// `;
// const Card = styled.div`
//   background: ;
//   border-radius: 15px;
//   margin: 6px;
//   width: 1000px;
//   height: 120px;
//   display: flex;
//   align-items: center;
//   // justify-content: space-between;
// `;

// const CardImage = styled.img`
//   width: 130px; 
//   height: 123px; 
//   // border-radius: 50%;
//   //  margin-right: 15px;
// `;
// const CardContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px; 
//   margin-left: 15px; 
// `;

// const CardHeading = styled.h2`
//   font-size: 18px;
//   font-weight: bold;
//   margin-bottom: 4px;
// `;

// const CardParagraph = styled.p`
//   font-size: 14px;
//   margin-bottom: 4px;
//   width: 540px;
// `;

// const CardDate = styled.span`
//   font-size: 12px;
//   color: #888888;
// `;
// const IconContainer = styled.div`

//   display: flex;
//   align-items: center;
//   gap: 4px;
//    margin-left: 30px;
// `;

// export const Cards = () => {
//   return (
//     <CardContainer>
//         <Card>
//           <CardImage src="/rect15.png" alt="Card 1" />
//           <CardContent>
//           <CardHeading>Lorem ipsum dolor</CardHeading>
//           <CardParagraph>Lorem ipsum dolor sit amet consectetur. Arcu purus sed commodo vestibulum nam nisl lorem. Cras facilisi morbi viverra orci tempor. Nulla diam.</CardParagraph>
//           <CardDate>30 Jan 2024</CardDate>
//         </CardContent>
//         </Card>
//         <Card>
//           <CardImage src="/rect15.png" alt="Card 1" />
//           <CardContent>
//           <CardHeading>Lorem ipsum dolor</CardHeading>
//           <CardParagraph>Lorem ipsum dolor sit amet consectetur. Arcu purus sed commodo vestibulum nam nisl lorem. Cras facilisi morbi viverra orci tempor. Nulla diam.</CardParagraph>
//           <CardDate>30 Jan 2024</CardDate>
//         </CardContent>
//         </Card>
//         <Card>
//           <CardImage src="/rect15.png" alt="Card 1" />
//           <CardContent>
//           <CardHeading>Lorem ipsum dolor</CardHeading>
//           <CardParagraph>Lorem ipsum dolor sit amet consectetur. Arcu purus sed commodo vestibulum nam nisl lorem. Cras facilisi morbi viverra orci tempor. Nulla diam.</CardParagraph>
//           <CardDate>30 Jan 2024</CardDate>
//         </CardContent>
//         <IconContainer>
//         <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M11 11.0003C12.6201 11.0003 13.9334 9.68697 13.9334 8.06689C13.9334 6.4468 12.6201 5.13347 11 5.13347C9.37993 5.13347 8.0666 6.4468 8.0666 8.06689C8.0666 9.68697 9.37993 11.0003 11 11.0003Z" fill="black"/>
// <path d="M21.9563 7.81755C21.0938 5.58643 19.5964 3.65695 17.6492 2.26759C15.702 0.878232 13.3904 0.0898893 11 0C8.60964 0.0898893 6.29802 0.878232 4.35083 2.26759C2.40363 3.65695 0.906232 5.58643 0.0436893 7.81755C-0.0145631 7.97868 -0.0145631 8.15511 0.0436893 8.31623C0.906232 10.5474 2.40363 12.4768 4.35083 13.8662C6.29802 15.2556 8.60964 16.0439 11 16.1338C13.3904 16.0439 15.702 15.2556 17.6492 13.8662C19.5964 12.4768 21.0938 10.5474 21.9563 8.31623C22.0146 8.15511 22.0146 7.97868 21.9563 7.81755ZM11 12.8337C10.0572 12.8337 9.1356 12.5541 8.35171 12.0303C7.56781 11.5066 6.95684 10.7621 6.59605 9.89107C6.23526 9.02005 6.14086 8.06161 6.32479 7.13694C6.50872 6.21227 6.96271 5.36291 7.62936 4.69626C8.29601 4.02961 9.14537 3.57561 10.07 3.39169C10.9947 3.20776 11.9532 3.30216 12.8242 3.66294C13.6952 4.02373 14.4397 4.63471 14.9635 5.4186C15.4872 6.2025 15.7668 7.12411 15.7668 8.06689C15.7649 9.33053 15.262 10.5419 14.3685 11.4354C13.475 12.3289 12.2636 12.8318 11 12.8337Z" fill="black"/>
// </svg>

//           <span>3.2K</span>
//         </IconContainer>
//         <IconContainer>
//         <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M11 11.0003C12.6201 11.0003 13.9334 9.68697 13.9334 8.06689C13.9334 6.4468 12.6201 5.13347 11 5.13347C9.37993 5.13347 8.0666 6.4468 8.0666 8.06689C8.0666 9.68697 9.37993 11.0003 11 11.0003Z" fill="black"/>
// <path d="M21.9563 7.81755C21.0938 5.58643 19.5964 3.65695 17.6492 2.26759C15.702 0.878232 13.3904 0.0898893 11 0C8.60964 0.0898893 6.29802 0.878232 4.35083 2.26759C2.40363 3.65695 0.906232 5.58643 0.0436893 7.81755C-0.0145631 7.97868 -0.0145631 8.15511 0.0436893 8.31623C0.906232 10.5474 2.40363 12.4768 4.35083 13.8662C6.29802 15.2556 8.60964 16.0439 11 16.1338C13.3904 16.0439 15.702 15.2556 17.6492 13.8662C19.5964 12.4768 21.0938 10.5474 21.9563 8.31623C22.0146 8.15511 22.0146 7.97868 21.9563 7.81755ZM11 12.8337C10.0572 12.8337 9.1356 12.5541 8.35171 12.0303C7.56781 11.5066 6.95684 10.7621 6.59605 9.89107C6.23526 9.02005 6.14086 8.06161 6.32479 7.13694C6.50872 6.21227 6.96271 5.36291 7.62936 4.69626C8.29601 4.02961 9.14537 3.57561 10.07 3.39169C10.9947 3.20776 11.9532 3.30216 12.8242 3.66294C13.6952 4.02373 14.4397 4.63471 14.9635 5.4186C15.4872 6.2025 15.7668 7.12411 15.7668 8.06689C15.7649 9.33053 15.262 10.5419 14.3685 11.4354C13.475 12.3289 12.2636 12.8318 11 12.8337Z" fill="black"/>
// </svg>

//           <span>3.2K</span>
//         </IconContainer>
//         </Card>
//       </CardContainer>
//   )
// }
