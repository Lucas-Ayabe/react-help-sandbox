import styled from "styled-components";
import { onActiveOr } from "./helpers";
import LabelComponent from "./label";
import { HelperProps, InputProps } from "./types";

export const Wrapper = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = LabelComponent;

export const Input = styled.input<InputProps>`
  border: 1px solid ${(props) => onActiveOr(props.activeColor, "#ccc")(props)};
  border-radius: 4px;
  font-family: inherit;
  font-size: inherit;
  padding: 1em;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
  }
`;

export const Helper = styled.small<HelperProps>``;
