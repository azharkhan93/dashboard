import styled from 'styled-components';

export type BoxProps = {
  display?: string;
  height?: string;
  width?: string;
  justifyContent?: string;
  alignItems?: string;
  background?: string;
  position?: string;
  overflow?: string;
  borderRadius?: string;
}

export const Box = styled.div<BoxProps>`
  display: ${(props) => props.display || "block"};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  background: ${(props) => props.background || "black"}; 
  position: ${(props) => props.position || "relative"}; 
  overflow: ${(props) => props.overflow || "visible"}; 
  border-radius: ${(props) => props.borderRadius || "0"};
`; 
