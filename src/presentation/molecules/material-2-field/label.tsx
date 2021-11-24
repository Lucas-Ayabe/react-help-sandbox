import styled from "styled-components";
import { onActiveOr } from "./helpers";
import { LabelProps } from "./types";

const Label = styled.label<LabelProps>`
  background: ${onActiveOr("#fff", "transparent")};
  color: ${(props) => onActiveOr(props.activeColor, "#777")(props)};
  font-size: ${onActiveOr(".8em", "1em")};
  cursor: pointer;
  padding: ${onActiveOr("0 .5em", 0)};

  position: absolute;
  top: ${onActiveOr("0", "50%")};
  left: 1em;
  transform: translate3d(0, -50%, 0);
  transition: all 0.3s ease-in-out;
`;

export default Label;
