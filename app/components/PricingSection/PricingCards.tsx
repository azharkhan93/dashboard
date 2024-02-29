import  { styled } from "styled-components"
import { Row } from "../styled/Row.styled";
import { BilCards } from "./components/Cards4";

const StyledParent = styled(Row)`
gap: 5%;
margin: auto;
`;

export const PricingCards = () => {
    return(
        <StyledParent
        height = "38vh"
        width = "70vw"
        display = "flex"
        alignItems = "center"
        background = "yellow"
        justifyContent= "center"


        >
          <BilCards/>
  

    </StyledParent>
    )
}



