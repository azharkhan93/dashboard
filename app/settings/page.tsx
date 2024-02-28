"use client"
import styled from 'styled-components';
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


   
 const Container4 = styled.div`
 display: flex;
 align-items: start;
 flex-direction: column; 
 border: 2px solid red;
 width: 30vw;
  
  gap: 15px;
  margin-left: 50px;
`;
const InputContainer2 = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
`;

const Input3 = styled.input`
 padding: 10px;
 border: 1px solid #ccc;
 border-radius: 4px;
 width: 17vw;
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

const SvgIcon = styled.svg`
 fill: black;
 margin-right: 7px;
 height: 25px;
 width: 22px;
`;
const Label = styled.div`
margin-bottom: 5px;
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
                borderradius="10px"

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
                    borderradius="10px"
                >
                    {/* <LeftDiv>

                    
                    
     








                    </LeftDiv>





                    <RightDiv>


                    </RightDiv> */}

<Container4>
      <Label>Username:</Label>
      <InputContainer2>
        <Input3 type="text" placeholder="Type something..." />
        <Button3>
          <SvgIcon >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.385 0.53691L20.975 1.12691C21.788 1.94091 21.665 3.38391 20.698 4.34991L8.531 16.5169L4.589 17.9589C4.094 18.1409 3.612 17.9049 3.514 17.4339C3.48088 17.2631 3.49647 17.0863 3.559 16.9239L5.029 12.9479L17.162 0.81391C18.129 -0.15209 19.572 -0.27709 20.385 0.53691ZM8 1.74691C8.13132 1.74691 8.26136 1.77278 8.38268 1.82303C8.50401 1.87329 8.61425 1.94694 8.70711 2.0398C8.79996 2.13266 8.87362 2.2429 8.92388 2.36423C8.97413 2.48555 9 2.61559 9 2.74691C9 2.87823 8.97413 3.00827 8.92388 3.12959C8.87362 3.25092 8.79996 3.36116 8.70711 3.45402C8.61425 3.54688 8.50401 3.62053 8.38268 3.67079C8.26136 3.72104 8.13132 3.74691 8 3.74691H4C3.46957 3.74691 2.96086 3.95762 2.58579 4.3327C2.21071 4.70777 2 5.21648 2 5.74691V17.7469C2 18.2773 2.21071 18.7861 2.58579 19.1611C2.96086 19.5362 3.46957 19.7469 4 19.7469H16C16.5304 19.7469 17.0391 19.5362 17.4142 19.1611C17.7893 18.7861 18 18.2773 18 17.7469V13.7469C18 13.4817 18.1054 13.2273 18.2929 13.0398C18.4804 12.8523 18.7348 12.7469 19 12.7469C19.2652 12.7469 19.5196 12.8523 19.7071 13.0398C19.8946 13.2273 20 13.4817 20 13.7469V17.7469C20 18.8078 19.5786 19.8252 18.8284 20.5753C18.0783 21.3255 17.0609 21.7469 16 21.7469H4C2.93913 21.7469 1.92172 21.3255 1.17157 20.5753C0.421427 19.8252 0 18.8078 0 17.7469V5.74691C0 4.68604 0.421427 3.66863 1.17157 2.91848C1.92172 2.16834 2.93913 1.74691 4 1.74691H8Z" fill="white"/>
</svg>


        </SvgIcon>
          Edit
        </Button3>
      </InputContainer2>
      <Label>Password:</Label>
      <InputContainer2>
        <Input3 type="text" placeholder="Type something..." />
        <Button3>
          <SvgIcon >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.385 0.53691L20.975 1.12691C21.788 1.94091 21.665 3.38391 20.698 4.34991L8.531 16.5169L4.589 17.9589C4.094 18.1409 3.612 17.9049 3.514 17.4339C3.48088 17.2631 3.49647 17.0863 3.559 16.9239L5.029 12.9479L17.162 0.81391C18.129 -0.15209 19.572 -0.27709 20.385 0.53691ZM8 1.74691C8.13132 1.74691 8.26136 1.77278 8.38268 1.82303C8.50401 1.87329 8.61425 1.94694 8.70711 2.0398C8.79996 2.13266 8.87362 2.2429 8.92388 2.36423C8.97413 2.48555 9 2.61559 9 2.74691C9 2.87823 8.97413 3.00827 8.92388 3.12959C8.87362 3.25092 8.79996 3.36116 8.70711 3.45402C8.61425 3.54688 8.50401 3.62053 8.38268 3.67079C8.26136 3.72104 8.13132 3.74691 8 3.74691H4C3.46957 3.74691 2.96086 3.95762 2.58579 4.3327C2.21071 4.70777 2 5.21648 2 5.74691V17.7469C2 18.2773 2.21071 18.7861 2.58579 19.1611C2.96086 19.5362 3.46957 19.7469 4 19.7469H16C16.5304 19.7469 17.0391 19.5362 17.4142 19.1611C17.7893 18.7861 18 18.2773 18 17.7469V13.7469C18 13.4817 18.1054 13.2273 18.2929 13.0398C18.4804 12.8523 18.7348 12.7469 19 12.7469C19.2652 12.7469 19.5196 12.8523 19.7071 13.0398C19.8946 13.2273 20 13.4817 20 13.7469V17.7469C20 18.8078 19.5786 19.8252 18.8284 20.5753C18.0783 21.3255 17.0609 21.7469 16 21.7469H4C2.93913 21.7469 1.92172 21.3255 1.17157 20.5753C0.421427 19.8252 0 18.8078 0 17.7469V5.74691C0 4.68604 0.421427 3.66863 1.17157 2.91848C1.92172 2.16834 2.93913 1.74691 4 1.74691H8Z" fill="white"/>
</svg>


        </SvgIcon>
          Edit
        </Button3>
      </InputContainer2>
      <Label>Email:</Label>
      <InputContainer2>
        <Input3 type="text" placeholder="Type something..." />
        <Button3>
          <SvgIcon >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.385 0.53691L20.975 1.12691C21.788 1.94091 21.665 3.38391 20.698 4.34991L8.531 16.5169L4.589 17.9589C4.094 18.1409 3.612 17.9049 3.514 17.4339C3.48088 17.2631 3.49647 17.0863 3.559 16.9239L5.029 12.9479L17.162 0.81391C18.129 -0.15209 19.572 -0.27709 20.385 0.53691ZM8 1.74691C8.13132 1.74691 8.26136 1.77278 8.38268 1.82303C8.50401 1.87329 8.61425 1.94694 8.70711 2.0398C8.79996 2.13266 8.87362 2.2429 8.92388 2.36423C8.97413 2.48555 9 2.61559 9 2.74691C9 2.87823 8.97413 3.00827 8.92388 3.12959C8.87362 3.25092 8.79996 3.36116 8.70711 3.45402C8.61425 3.54688 8.50401 3.62053 8.38268 3.67079C8.26136 3.72104 8.13132 3.74691 8 3.74691H4C3.46957 3.74691 2.96086 3.95762 2.58579 4.3327C2.21071 4.70777 2 5.21648 2 5.74691V17.7469C2 18.2773 2.21071 18.7861 2.58579 19.1611C2.96086 19.5362 3.46957 19.7469 4 19.7469H16C16.5304 19.7469 17.0391 19.5362 17.4142 19.1611C17.7893 18.7861 18 18.2773 18 17.7469V13.7469C18 13.4817 18.1054 13.2273 18.2929 13.0398C18.4804 12.8523 18.7348 12.7469 19 12.7469C19.2652 12.7469 19.5196 12.8523 19.7071 13.0398C19.8946 13.2273 20 13.4817 20 13.7469V17.7469C20 18.8078 19.5786 19.8252 18.8284 20.5753C18.0783 21.3255 17.0609 21.7469 16 21.7469H4C2.93913 21.7469 1.92172 21.3255 1.17157 20.5753C0.421427 19.8252 0 18.8078 0 17.7469V5.74691C0 4.68604 0.421427 3.66863 1.17157 2.91848C1.92172 2.16834 2.93913 1.74691 4 1.74691H8Z" fill="white"/>
</svg>


        </SvgIcon>
          Edit
        </Button3>
      </InputContainer2>
      <Label>Phone Number:</Label>
      <InputContainer2>
        <Input3 type="text" placeholder="Type something..." />
        <Button3>
          <SvgIcon >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.385 0.53691L20.975 1.12691C21.788 1.94091 21.665 3.38391 20.698 4.34991L8.531 16.5169L4.589 17.9589C4.094 18.1409 3.612 17.9049 3.514 17.4339C3.48088 17.2631 3.49647 17.0863 3.559 16.9239L5.029 12.9479L17.162 0.81391C18.129 -0.15209 19.572 -0.27709 20.385 0.53691ZM8 1.74691C8.13132 1.74691 8.26136 1.77278 8.38268 1.82303C8.50401 1.87329 8.61425 1.94694 8.70711 2.0398C8.79996 2.13266 8.87362 2.2429 8.92388 2.36423C8.97413 2.48555 9 2.61559 9 2.74691C9 2.87823 8.97413 3.00827 8.92388 3.12959C8.87362 3.25092 8.79996 3.36116 8.70711 3.45402C8.61425 3.54688 8.50401 3.62053 8.38268 3.67079C8.26136 3.72104 8.13132 3.74691 8 3.74691H4C3.46957 3.74691 2.96086 3.95762 2.58579 4.3327C2.21071 4.70777 2 5.21648 2 5.74691V17.7469C2 18.2773 2.21071 18.7861 2.58579 19.1611C2.96086 19.5362 3.46957 19.7469 4 19.7469H16C16.5304 19.7469 17.0391 19.5362 17.4142 19.1611C17.7893 18.7861 18 18.2773 18 17.7469V13.7469C18 13.4817 18.1054 13.2273 18.2929 13.0398C18.4804 12.8523 18.7348 12.7469 19 12.7469C19.2652 12.7469 19.5196 12.8523 19.7071 13.0398C19.8946 13.2273 20 13.4817 20 13.7469V17.7469C20 18.8078 19.5786 19.8252 18.8284 20.5753C18.0783 21.3255 17.0609 21.7469 16 21.7469H4C2.93913 21.7469 1.92172 21.3255 1.17157 20.5753C0.421427 19.8252 0 18.8078 0 17.7469V5.74691C0 4.68604 0.421427 3.66863 1.17157 2.91848C1.92172 2.16834 2.93913 1.74691 4 1.74691H8Z" fill="white"/>
</svg>


        </SvgIcon>
          Edit
        </Button3>
      </InputContainer2>
      <Label>Your Bio:</Label>
      <InputContainer2>
        <Input3 type="text" placeholder="Type something..." />
        <Button3>
          <SvgIcon >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.385 0.53691L20.975 1.12691C21.788 1.94091 21.665 3.38391 20.698 4.34991L8.531 16.5169L4.589 17.9589C4.094 18.1409 3.612 17.9049 3.514 17.4339C3.48088 17.2631 3.49647 17.0863 3.559 16.9239L5.029 12.9479L17.162 0.81391C18.129 -0.15209 19.572 -0.27709 20.385 0.53691ZM8 1.74691C8.13132 1.74691 8.26136 1.77278 8.38268 1.82303C8.50401 1.87329 8.61425 1.94694 8.70711 2.0398C8.79996 2.13266 8.87362 2.2429 8.92388 2.36423C8.97413 2.48555 9 2.61559 9 2.74691C9 2.87823 8.97413 3.00827 8.92388 3.12959C8.87362 3.25092 8.79996 3.36116 8.70711 3.45402C8.61425 3.54688 8.50401 3.62053 8.38268 3.67079C8.26136 3.72104 8.13132 3.74691 8 3.74691H4C3.46957 3.74691 2.96086 3.95762 2.58579 4.3327C2.21071 4.70777 2 5.21648 2 5.74691V17.7469C2 18.2773 2.21071 18.7861 2.58579 19.1611C2.96086 19.5362 3.46957 19.7469 4 19.7469H16C16.5304 19.7469 17.0391 19.5362 17.4142 19.1611C17.7893 18.7861 18 18.2773 18 17.7469V13.7469C18 13.4817 18.1054 13.2273 18.2929 13.0398C18.4804 12.8523 18.7348 12.7469 19 12.7469C19.2652 12.7469 19.5196 12.8523 19.7071 13.0398C19.8946 13.2273 20 13.4817 20 13.7469V17.7469C20 18.8078 19.5786 19.8252 18.8284 20.5753C18.0783 21.3255 17.0609 21.7469 16 21.7469H4C2.93913 21.7469 1.92172 21.3255 1.17157 20.5753C0.421427 19.8252 0 18.8078 0 17.7469V5.74691C0 4.68604 0.421427 3.66863 1.17157 2.91848C1.92172 2.16834 2.93913 1.74691 4 1.74691H8Z" fill="white"/>
</svg>


        </SvgIcon>
          Edit
        </Button3>
      </InputContainer2>
      
    </Container4>
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