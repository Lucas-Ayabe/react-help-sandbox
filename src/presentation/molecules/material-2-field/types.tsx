export type Material2FieldStyleProps = {
  isActive: boolean;
  activeColor: string;
};

export type InputProps = Material2FieldStyleProps;
export type LabelProps = Material2FieldStyleProps;
export type HelperProps = Material2FieldStyleProps;

export type Material2FieldProps = {
  label: string;
  activeColor?: string;
  helper?: string;
  value: string;
  onChange: (value: string) => void;
};
