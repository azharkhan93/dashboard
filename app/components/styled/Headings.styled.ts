import styled from "styled-components"

interface HeadingsProps {
    flexgrow?: string;
    textColor?: string;
    width?: string;
    paraGraph?: string; 
    svgItems?: string; 
    headingFontSize?: string; 
    paragraphFontSize?: string;
  }

  export const Headings = styled.div<HeadingsProps>`
    flex-grow: ${(props) => props.flexGrow || 2};
    color: ${(props) => props.textColor || "yellow"};
    align-self: ${(props) => props.alignSelf || "self-start"};
    font-size: ${(props) => props.fontHeading || "28px"}; 
`;