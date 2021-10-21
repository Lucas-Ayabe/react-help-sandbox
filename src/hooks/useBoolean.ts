import { useState } from "react";

export default function useBoolean(bool = false) {
  const [value, setValue] = useState(bool);
  const enable = setValue.bind(null, true);
  const disable = setValue.bind(null, false);
  const toggle = () => setValue((v) => !v);

  return {
    value,
    enable,
    disable,
    toggle,
  };
}
