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

const Svg = styled.div`
  
`;

const TextOnRight = styled.div`
 
`;

const FlexColumn = styled(Col)`

`;

const CardBody = styled(Col)`
 
  gap: 10px;
  border: 1px solid  #48484866;
`;
const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const Svg2 = styled.div`
  /* height: 8px;
  width: 8px; */
`;

const Text = styled(Headings)`
  /* Text styling here */
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
    return (
        <>
            <Card
                display="flex"
                alignItems="center"
                justifyContent="center"
                overFlow="hidden"
                background="white"
                flex-direction="column"


            >
                <SmallDiv
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    // overFlow= "hidden"
                    // background= "white"
                    // flex-direction = "column"
                    borderradius="10px"
                    background="#FFFFFF"
                    height="8vh"
                    width="23vw"

                >


                    <CircleSvg />


                    <FlexColumn
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flex-direction="column"
                        background="#FFFFFF"
                    >
                        <Text
                            fontHeading="18px" textColor="#6E6F71"
                        >
                            Plus
                        </Text>
                        {/* <h2>Plus</h2> */}

                        <Text fontHeading="14px" textColor="#6E6F71"
                        >
                            for individual user
                        </Text>
                    </FlexColumn>
                    <TextOnRight
                        fontHeading="20px" textColor="black"


                    >
                        $20/mo</TextOnRight>
                </SmallDiv>
                <CardBody
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    background="#D9D9D9"
                    flex-direction="column"
                    height="30vh"
                    width="21vw"
                    borderradius="5px"
                >


                    <SvgWrapper


                    >
                        <CheckSvg />

                        <Text fontHeading="16px" textColor="#6E6F71"
                        >
                            Lorem ipsum dolor sit amet</Text>
                    </SvgWrapper>
                    <SvgWrapper>
                        <CheckSvg />

                        <Text fontHeading="16px" textColor="#6E6F71"
                        >
                            Lorem ipsum dolor sit amet</Text>
                    </SvgWrapper>
                    <SvgWrapper>
                        <CheckSvg />

                        <Text fontHeading="16px" textColor="#6E6F71"
                        >
                            Lorem ipsum dolor sit amet</Text>
                    </SvgWrapper>

                </CardBody>


            </Card>
            <Card
                display="flex"
                alignItems="center"
                justifyContent="center"
                overFlow="hidden"
                background="white"
                flex-direction="column"


            >
                <SmallDiv
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    // overFlow= "hidden"
                    // background= "white"
                    // flex-direction = "column"
                    borderradius="10px"
                    background="#FFFFFF"
                    height="8vh"
                    width="23vw"

                >


                    <CircleSvg />


                    <FlexColumn
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flex-direction="column"
                        background="#FFFFFF"
                    >
                        <Text
                            fontHeading="18px" textColor="#6E6F71"
                        >
                            Plus
                        </Text>
                        {/* <h2>Plus</h2> */}

                        <Text fontHeading="14px" textColor="#6E6F71"
                        >
                            for individual user
                        </Text>
                    </FlexColumn>
                    <TextOnRight
                        fontHeading="20px" textColor="black"


                    >
                        $20/mo</TextOnRight>
                </SmallDiv>
                <CardBody
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    background="#D9D9D9"
                    flex-direction="column"
                    height="30vh"
                    width="21vw"
                    borderradius="5px"
                >


                    <SvgWrapper


                    >
                        <CheckSvg />

                        <Text fontHeading="16px" textColor="#6E6F71"
                        >
                            Lorem ipsum dolor sit amet</Text>
                    </SvgWrapper>
                    <SvgWrapper>
                        <CheckSvg />

                        <Text fontHeading="16px" textColor="#6E6F71"
                        >
                            Lorem ipsum dolor sit amet</Text>
                    </SvgWrapper>
                    <SvgWrapper>
                        <CheckSvg />

                        <Text fontHeading="16px" textColor="#6E6F71"
                        >
                            Lorem ipsum dolor sit amet</Text>
                    </SvgWrapper>

                </CardBody>


            </Card>

        </>
    )
}
