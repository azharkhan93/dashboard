
import styled from 'styled-components';
import { Col } from '../styled/Col.styled';
import { Headings } from '../styled/Headings.styled';
import { PostCards } from './components/PostCards';

const Wrapper = styled.section`
display: flex;
align-items:center;
justify-content: space-between;
background-color: green;
`;


const CustomWrapper = styled.section`
  height: 310px; 
  width: 900px;  
  background: #333; 
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  gap: 8px;
  /* padding: 10px;  */
  /* margin: auto; */
`;


const CardContainer = styled(Col)`
/* margin-left: 20px; */
  /* width: 25vw;
  height:40vh; */
  border: 1px solid #ddd;
  /* border-radius: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column; */
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
`;

const ContentContainer = styled(Col)`
  
  /* display: flex;
  flex-direction: column;
  align-items: start; */
  gap: 5px;
`;

const Heading = styled(Headings)`
/* font-size: 18px; */
  /* margin-bottom: 8px; */
`;

const Paragraph = styled(Headings)`
/* font-size: 13px; */
  /* margin-bottom: 16px; */
`;

const SVGContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const PostSection = () => {

  return (

    <Wrapper>
      <CardContainer
        width="25vw"
        height="40vh"

        background="white"
        borderRadius="8px"
        display="flex"
        alignItems="center"
        /* justify-content: center; */
        flex-direction="column"
      >
        <Image src="/cardimg.png" alt="Card Image" />
        <ContentContainer
          display="flex"
          alignItems="start"
          background="white"
          /* justify-content: center; */
          flex-direction="column"

        >
          <Heading fontHeading="18px" textColor="black">Lorem ipsum dolor</Heading>
          <Paragraph
            fontHeading="13px" textColor="black"
          >
            Lorem ipsum dolor sit amet consectetur. Arcu purus sed commodo vestibulum nam nisl lorem. Cras facilisi morbi viverra orci tempor. Nulla diam.
          </Paragraph>
          <SVGContainer>
            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0001 10.0003C11.4729 10.0003 12.6668 8.80634 12.6668 7.33354C12.6668 5.86073 11.4729 4.66679 10.0001 4.66679C8.52725 4.66679 7.33331 5.86073 7.33331 7.33354C7.33331 8.80634 8.52725 10.0003 10.0001 10.0003Z" fill="black" />
              <path d="M19.9603 7.10687C19.1762 5.07858 17.8149 3.3245 16.0447 2.06145C14.2745 0.798393 12.1731 0.0817176 10 0C7.82695 0.0817176 5.72547 0.798393 3.9553 2.06145C2.18512 3.3245 0.823847 5.07858 0.0397175 7.10687C-0.0132392 7.25334 -0.0132392 7.41374 0.0397175 7.56021C0.823847 9.5885 2.18512 11.3426 3.9553 12.6056C5.72547 13.8687 7.82695 14.5854 10 14.6671C12.1731 14.5854 14.2745 13.8687 16.0447 12.6056C17.8149 11.3426 19.1762 9.5885 19.9603 7.56021C20.0132 7.41374 20.0132 7.25334 19.9603 7.10687ZM10 11.667C9.14292 11.667 8.30509 11.4128 7.59246 10.9367C6.87983 10.4605 6.3244 9.78372 5.99641 8.99188C5.66842 8.20005 5.5826 7.32873 5.74981 6.48812C5.91702 5.64752 6.32974 4.87537 6.93578 4.26932C7.54183 3.66328 8.31398 3.25056 9.15458 3.08335C9.99519 2.91614 10.8665 3.00196 11.6583 3.32995C12.4502 3.65794 13.127 4.21337 13.6031 4.926C14.0793 5.63863 14.3335 6.47646 14.3335 7.33354C14.3317 8.4823 13.8746 9.58351 13.0623 10.3958C12.25 11.2081 11.1488 11.6652 10 11.667Z" fill="black" />
            </svg>
            <Heading
              fontHeading="13px" textColor="black"
            >3.2k</Heading>

            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0001 10.0003C11.4729 10.0003 12.6668 8.80634 12.6668 7.33354C12.6668 5.86073 11.4729 4.66679 10.0001 4.66679C8.52725 4.66679 7.33331 5.86073 7.33331 7.33354C7.33331 8.80634 8.52725 10.0003 10.0001 10.0003Z" fill="black" />
              <path d="M19.9603 7.10687C19.1762 5.07858 17.8149 3.3245 16.0447 2.06145C14.2745 0.798393 12.1731 0.0817176 10 0C7.82695 0.0817176 5.72547 0.798393 3.9553 2.06145C2.18512 3.3245 0.823847 5.07858 0.0397175 7.10687C-0.0132392 7.25334 -0.0132392 7.41374 0.0397175 7.56021C0.823847 9.5885 2.18512 11.3426 3.9553 12.6056C5.72547 13.8687 7.82695 14.5854 10 14.6671C12.1731 14.5854 14.2745 13.8687 16.0447 12.6056C17.8149 11.3426 19.1762 9.5885 19.9603 7.56021C20.0132 7.41374 20.0132 7.25334 19.9603 7.10687ZM10 11.667C9.14292 11.667 8.30509 11.4128 7.59246 10.9367C6.87983 10.4605 6.3244 9.78372 5.99641 8.99188C5.66842 8.20005 5.5826 7.32873 5.74981 6.48812C5.91702 5.64752 6.32974 4.87537 6.93578 4.26932C7.54183 3.66328 8.31398 3.25056 9.15458 3.08335C9.99519 2.91614 10.8665 3.00196 11.6583 3.32995C12.4502 3.65794 13.127 4.21337 13.6031 4.926C14.0793 5.63863 14.3335 6.47646 14.3335 7.33354C14.3317 8.4823 13.8746 9.58351 13.0623 10.3958C12.25 11.2081 11.1488 11.6652 10 11.667Z" fill="black" />
            </svg>
            <Heading
              fontHeading="13px" textColor="black"
            >3.2k</Heading>



          </SVGContainer>
        </ContentContainer>
      </CardContainer>
      <CustomWrapper>
        <PostCards
          imageSrc="/blog4.png"
          title="Lorem ipsum dolor"
          description="Lorem ipsum dolor sit amet consectetur. Arcu purus sed commodo vestibulum nam nisl lorem. Cras facilisi morbi viverra orci tempor. Nulla diam."
          likes={3.2}
        />

        {/* Render the rest of the cards */}
        <PostCards
          imageSrc="/blog4.png"
          title="Lorem ipsum dolor"
          description="Lorem ipsum dolor sit amet consectetur. Arcu purus sed commodo vestibulum nam nisl lorem. Cras facilisi morbi viverra orci tempor. Nulla diam."
          likes={3.2}
        />
        <PostCards
          imageSrc="/blog4.png"
          title="Lorem ipsum dolor"
          description="Lorem ipsum dolor sit amet consectetur. Arcu purus sed commodo vestibulum nam nisl lorem. Cras facilisi morbi viverra orci tempor. Nulla diam."
          likes={3.2}
        />
        <PostCards
          imageSrc="/blog4.png"
          title="Lorem ipsum dolor"
          description="Lorem ipsum dolor sit amet consectetur. Arcu purus sed commodo vestibulum nam nisl lorem. Cras facilisi morbi viverra orci tempor. Nulla diam."
          likes={3.2}
        />
        {/* <PostCards
        imageSrc="/blog4.png"
        title="Lorem ipsum dolor"
        description="Lorem ipsum dolor sit amet consectetur. Arcu purus sed commodo vestibulum nam nisl lorem. Cras facilisi morbi viverra orci tempor. Nulla diam."
        likes={3.2}
      /> */}
      </CustomWrapper>



    </Wrapper>
  )
}