"use client"
import dynamic from 'next/dynamic';
import { useState } from 'react';
import styled from 'styled-components';
import { Box } from '../components/styled/Box.styled';
import { Headings } from '../components/styled/Headings.styled';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../globals.css"
import { Buttons } from '../components/styled/Buttons.styled';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });





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
position: relative;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 2%;
  @media (max-width: 767px) {
    /* height: auto;
    width: 98vh; */
  }
  `;
  
  const CenteredButton = styled(Buttons)`
  
  /* display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 40px;
  background-color: #484848; 
  color: #fff; 
  
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px; */
`;

const SvgContainer = styled(Headings)`
position: absolute;
top: 0;
right: 0;
`;
const Button1 = styled.button`
  margin-top: auto; 
  padding: 10px 20px;
  color: #fff; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
`;


const MainDiv = styled.div`
position: relative;
display: flex;
justify-content: space-between;
/* border: 3px solid #48484866; */

align-items: center;
height: 80vh;
width: 87vw;
background: #E6E6E6;
margin: auto;

@media (max-width: 767px) {
  flex-direction: column;
  height: auto;

    width: 97vw;
  }

`;
// const QuillContainer = styled.div`
//   height: 300px; 
//   width: 80%; 
//   margin: auto; 
//   margin-top: 20px; 
  
// `;
const LeftDiv = styled.div`
 display: flex;
  flex-direction: column;
  border: 3px solid #48484866;

  height: 60vh;
  width: 60vw;
  background-color: white;
  /* border: 2px solid red; */
  margin: 10px; 
  border-radius: 10px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */

  @media (max-width: 767px) {
  flex-direction: column;

    width: 95vw;
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 20vw;
  background-color: white;
  border: 2px solid red;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 2%;

  @media (max-width: 767px) {
 width: 80vw;
  }
   
   `;
   const CenteredContainer = styled.div`
   margin-top: auto;

   display: flex;
   align-items: end;
   justify-content: end;
   height: 7vh; 
   width: 60vw; 
   background: white;
   gap: 10px;
   top: 30px;

  
 `;






const page = () => {
  const [localQuillContent, setLocalQuillContent] = useState('');
  const placeholder = 'Start Writing...';

  const handleQuillChange = (content: any) => {
    setLocalQuillContent(content);
  };
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6] }], 
      ['bold', 'italic'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      // [{ 'script': 'sub' }, { 'script': 'super' }],
      ['link', 'image'],
      // ['custom-preview', 'custom-button'],
      // ['custom-heading-paragraph', 'custom-new-line'],
      // [{ 'align': [] }], 
      // ['custom-button'],
      ['clean'] 
      
     
    ]
  };
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
        >
          <Headings flexGrow={1}>
            <Headings fontHeading="24px" textColor="black">
            Post Articles
            </Headings>

            <Headings fontHeading="22px" textColor="black" >Create a post just by Drag & Drop elements</Headings>

          </Headings>
          <SvgContainer alignSelf="flex-end">
            <svg width="20" height="22" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.89945 23.2222C7.16349 24.1046 7.70509 24.8782 8.44382 25.4282C9.18255 25.9783 10.079 26.2754 11 26.2754C11.921 26.2754 12.8174 25.9783 13.5562 25.4282C14.2949 24.8782 14.8365 24.1046 15.1006 23.2222H6.89945ZM0 22H22V18.3333L19.5556 14.6667V8.55556C19.5556 7.43202 19.3343 6.31949 18.9043 5.28149C18.4743 4.24348 17.8441 3.30032 17.0497 2.50586C16.2552 1.71141 15.3121 1.08121 14.2741 0.651253C13.2361 0.221296 12.1235 0 11 0C9.87647 0 8.76394 0.221296 7.72593 0.651253C6.68792 1.08121 5.74477 1.71141 4.95031 2.50586C4.15585 3.30032 3.52565 4.24348 3.0957 5.28149C2.66574 6.31949 2.44444 7.43202 2.44444 8.55556V14.6667L0 18.3333V22Z" fill="black" />
            </svg>
          </SvgContainer>


        </Container>
        <MainDiv>
          <LeftDiv>
      
        <ReactQuill
          theme="snow"
          value={localQuillContent}
          onChange={handleQuillChange}
          placeholder={placeholder}
          modules={modules}
          // className="custom-quill"
          // style={{ height: '367px', width: '59.6vw' }}
          
        />

<CenteredContainer>
          <CenteredButton
        display="flex"
        width= "10vw"
        justifyContent="center"
        alignItems="center"
        background="#e74c3c"
        overflow="hidden"
        borderradius="10px"
        fontSize= "14px"
        padding = "8px 20px"
        cursorPointer = "pointer"
        >
          
        Save
      </CenteredButton>
        
      <CenteredButton
        display="flex"
        width= "10vw"
        justifyContent="center"
        alignItems="center"
        background="#e74c3c"
        overflow="hidden"
        borderradius="10px"
        fontSize= "14px"
        padding = "8px 40px"
        cursorPointer = "pointer"
        >
          
        Cancel
      </CenteredButton>
      </CenteredContainer>




        
     

          </LeftDiv>
          
          
          


          <RightDiv>

          
          </RightDiv>

          

        

        </MainDiv>
        
        
        

      </SmallConatiner>




    </DashboardContainer>
  )
}

export default page;
