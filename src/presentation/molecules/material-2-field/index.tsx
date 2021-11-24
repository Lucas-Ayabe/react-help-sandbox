import { useRef } from "react";
import { useBoolean } from "../../../hooks";
import * as S from "./styles";
import { Material2FieldProps } from "./types";

export type { Material2FieldProps };

const Material2Field = ({
  label,
  activeColor = "#2e6fe7",
  helper = undefined,
  value,
  onChange,
}: Material2FieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { enable, disable, value: isActive } = useBoolean(!!value.length);
  const active = () => {
    enable();
    inputRef.current?.focus();
  };

  const desactive = () => {
    if (!value.length) {
      disable();
    }
  };

  const styleProps = { activeColor, isActive };

  return (
    <S.Wrapper>
      <S.InputWrapper onClick={active}>
        <S.Label {...styleProps}>{label}</S.Label>
        <S.Input
          {...styleProps}
          ref={inputRef}
          type="email"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={desactive}
        />
      </S.InputWrapper>
      <S.Helper {...styleProps}>{helper ?? ""}</S.Helper>
    </S.Wrapper>
  );
};

export default Material2Field;
