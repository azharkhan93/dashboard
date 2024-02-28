import styled from 'styled-components';
import { Box } from './Box.styled';

export interface ButtonProps {
  pading?: string;
  color?: string;
  fontsize?: string;
}

export const Buttons = styled(Box)<ButtonProps>`
  padding: ${(props) => props.padding || "2px"};
  /* border-radius: ${(props) => props.borderRadius || "0"}; */
  color: ${(props) => props.textColor || "black"};
  font-size: ${(props) => props.fontSize || "2px"};
  cursor: ${(props) => props.cursorPointer || "pointer"};

`; 