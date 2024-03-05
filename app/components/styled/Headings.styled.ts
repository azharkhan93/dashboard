import styled from "styled-components"

interface HeadingsProps {
    flexGrow?: number;
    textColor?: string;
    alignSelf?: string;
    fontHeading?: string;
  }

  export const Headings = styled.div<HeadingsProps>`
    flex-grow: ${(props) => props.flexGrow || 2};
    color: ${(props) => props.textColor || "yellow"};
    align-self: ${(props) => props.alignSelf || "self-start"};
    font-size: ${(props) => props.fontHeading || "28px"}; 
`;