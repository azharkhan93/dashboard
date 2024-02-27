import styled from 'styled-components';

const CardContainer = styled.div`
  // position: absolute;
  display: flex;
  align-items: center;
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


