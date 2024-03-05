import styled from 'styled-components';
import { Box } from './Box.styled';
import {BoxProps} from "./Box.styled"

export type ButtonProps = {
  padding?: string;
  color?: string;
  fontSize?: string;
  background?: string;
} & BoxProps;

export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width || "10vw"};
  padding: ${(props) => props.padding || "2px"};
  border-radius: ${(props) => props.borderRadius || "0"};
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "12px"};
  background-color: ${(props) => props.background || "blue"};
  cursor: pointer;
`; 


