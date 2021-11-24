import { Material2FieldStyleProps } from "./types";

const onPropOr =
  (prop: keyof Material2FieldStyleProps) =>
  <T, F>(onTrue: T, onFalse: F) => {
    return (props: Material2FieldStyleProps) =>
      props[prop] ? onTrue : onFalse;
  };

export const onActiveOr = onPropOr("isActive");
