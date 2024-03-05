"use client"
import styled from 'styled-components';
import { SettingsSection } from '../components/SettingsSection';
import { Box } from '../components/styled/Box.styled';
import { Headings } from '../components/styled/Headings.styled';


const DashboardContainer = styled(Box)`
  
  @media (max-width: 767px) {
    height: auto;
  }
`;

const SmallConatiner = styled(Box)`

@media (max-width: 767px) {
    height: auto;
    width: 97vw;
  }
  `;


const Container = styled(Box)`
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 2%;
  @media (max-width: 767px) {
    /* height: auto;
    width: 98vh; */
  }
  `;



const SvgContainer = styled(Headings)`
position: absolute;
top: 0;
right: 0;
`;



const MainDiv = styled(Box)`
/* position: relative;
display: flex;
justify-content: space-between;

align-items: center;
height: 80vh;
width: 87vw;
background: green; */
margin: auto;

@media (max-width: 767px) {
  flex-direction: column;
  height: auto;

    width: 97vw;
  }

`;


const Button3 = styled.button`
height: 5vh;
width: 7vw;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-left: 8px;
 background-color: #484848;
 color: white;
 border: none;
 border-radius: 5px;
 cursor: pointer;
`;



const RedBorderDiv = styled.div`
  border: 2px solid red;
  margin-right: 50px;
  height: 68vh;
  width: 25vw;
  
  display: flex;
  flex-direction: column;
  align-items: center;
         justify-content: space-between;
         
  
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  
`;

const ButtonsContainer = styled.div`

  display: flex;
  align-item: center;
  gap: 10px;
`;
const ButtonsContainer2 = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  background-color: #3498db; 
  color: #fff; 
  border: none;
  cursor: pointer;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

 
 







const page = () => {

    return (
        <DashboardContainer
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            background="#000000"
            position="relative"
            overflow="hidden"
        >

            <SmallConatiner
                height="98vh"
                width="90vw"

                background="
        #E6E6E6"
                position="relative"
                overflow="hidden"
                borderRadius="10px"

            >
                <Container
                
                    display="flex"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    background="
          #E6E6E6"

                    overflow="hidden"
                    position= "relative"
                    

                >
                    <Headings flexGrow={1}>
                        <Headings fontHeading="24px" textColor="black">
                            Account Settings
                        </Headings>

                        <Headings fontHeading="22px" textColor="black" >Change and update your profile information</Headings>

                    </Headings>
                    <SvgContainer alignSelf="flex-end">
                        <svg width="20" height="22" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.89945 23.2222C7.16349 24.1046 7.70509 24.8782 8.44382 25.4282C9.18255 25.9783 10.079 26.2754 11 26.2754C11.921 26.2754 12.8174 25.9783 13.5562 25.4282C14.2949 24.8782 14.8365 24.1046 15.1006 23.2222H6.89945ZM0 22H22V18.3333L19.5556 14.6667V8.55556C19.5556 7.43202 19.3343 6.31949 18.9043 5.28149C18.4743 4.24348 17.8441 3.30032 17.0497 2.50586C16.2552 1.71141 15.3121 1.08121 14.2741 0.651253C13.2361 0.221296 12.1235 0 11 0C9.87647 0 8.76394 0.221296 7.72593 0.651253C6.68792 1.08121 5.74477 1.71141 4.95031 2.50586C4.15585 3.30032 3.52565 4.24348 3.0957 5.28149C2.66574 6.31949 2.44444 7.43202 2.44444 8.55556V14.6667L0 18.3333V22Z" fill="black" />
                        </svg>
                    </SvgContainer>


                </Container>
                <MainDiv
                    height="83vh"
                    width="87vw"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    background="white"
                    position="relative"
                    overflow="hidden"
                    borderRadius="10px"
                >
                  
                  <SettingsSection/>
    <RedBorderDiv>
    
        
     

      <FlexContainer>
      <Image src="/person.png" alt="Sample Image" />
        <ButtonsContainer>
          <Button3>Button 1</Button3>
          <Button3>Button 2</Button3>
        </ButtonsContainer>
      </FlexContainer>
        <ButtonsContainer2>
          <Button3>Button 1</Button3>
          <Button3>Button 2</Button3>
        </ButtonsContainer2>
      </RedBorderDiv>
                   





                </MainDiv>




            </SmallConatiner>




        </DashboardContainer>
    )
}

export default page;