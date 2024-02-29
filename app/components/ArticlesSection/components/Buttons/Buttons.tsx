import { Buttons } from "@/app/components/styled/Buttons.styled";
import styled from "styled-components";




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
  /* text-align: center; */
`;




export const Button3 = () => {

    return (
        <>
        
        <CenteredButton
            width="10vw"
            background="#484848"
            overflow="hidden"
            borderradius="10px"
            fontSize="14px"
            padding="8px 20px"
            cursorPointer="pointer"
            textAlign="center"
        >

            Save
        </CenteredButton><CenteredButton
            width="10vw"
            background="#15C39A"
            borderradius="10px"
            fontSize="14px"
            padding="8px 40px"
            cursorPointer="pointer"
            textAlign="center"
        >

                Publish
            </CenteredButton><CenteredButton
                width="10vw"
                background="#FFFFFFD9"
                borderradius="10px"
                fontSize="14px"
                padding="8px 40px"
                cursorPointer="pointer"
                textAlign="center"
            >

                Preview
            </CenteredButton></>
    )
}