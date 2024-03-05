"use client"
import React from 'react';
import { Box } from "@/app/components/styled/Box.styled";
import { Col } from "@/app/components/styled/Col.styled";
import { Headings } from "@/app/components/styled/Headings.styled";
import styled from "styled-components"

const Card = styled(Col)`
  border: 1px solid #ccc;
  padding: 20px;
`;

const SmallDiv = styled(Box)`
  border: 3px solid #48484866;
`;

const Svg = styled.div``;

const TextOnRight = styled.h1`
/* align-self: flex-end; */
font-size: 22px;
color: black;
`;

const FlexColumn = styled(Col)``;

const CardBody = styled(Col)`
  gap: 10px;
  border: 1px solid #48484866;
`;

const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const Svg2 = styled.div`
`;

const Text = styled(Headings)`

`;

const CircleSvg = () => (
  <Svg>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#D9D9D9" fillOpacity="0.24" />
      <circle cx="16" cy="16" r="15" stroke="#484848" strokeOpacity="0.1" strokeWidth="2" />
    </svg>
  </Svg>
);

const CheckSvg = () => (
  <Svg2>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.5" cy="12.5" r="12.5" fill="#6DD26D" />
      <circle cx="12.5" cy="12.5" r="10" stroke="#484848" strokeOpacity="0.1" strokeWidth="5" />
      <path d="M7 13L10.5 16.5L17.5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Svg2>
);

export const BilCards = () => {
  const cardData = [
    {
      title: 'Plus',
      description: 'for individual user',
      price: '$20/mo',
      features: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
    },
    {
        title: 'Plus',
        description: 'for individual user',
        price: '$20/mo',
        features: [
          'Lorem ipsum dolor sit amet',
          'Lorem ipsum dolor sit amet',
          'Lorem ipsum dolor sit amet',
        ],
      },
  ];

  return (
    <>
      {cardData.map((card, index) => (
        <Card
          key={index}
          display="flex"
          alignItems="center"
          justifyContent="center"
          overFlow="hidden"
          background="white"
          flexDirection="column"
        >
          <SmallDiv
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderRadius="10px"
            background="#FFFFFF"
            height="8vh"
            width="23vw"
          >
            <CircleSvg />
            <FlexColumn
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              background="#FFFFFF"
            >
              <Text fontHeading="18px" textColor="#6E6F71">
                {card.title}
              </Text>
              <Text fontHeading="14px" textColor="#6E6F71">
                {card.description}
              </Text>
            </FlexColumn>
            <TextOnRight >
              {card.price}
            </TextOnRight>
          </SmallDiv>
          <CardBody
            display="flex"
            alignItems="center"
            justifyContent="center"
            background="#D9D9D9"
            flexDirection="column"
            height="30vh"
            width="21vw"
            borderradius="5px"
          >
            {card.features.map((feature, featureIndex) => (
              <SvgWrapper key={featureIndex}>
                <CheckSvg />
                <Text fontHeading="16px" textColor="#6E6F71">
                  {feature}
                </Text>
              </SvgWrapper>
            ))}
          </CardBody>
        </Card>
      ))}
    </>
  );
};

