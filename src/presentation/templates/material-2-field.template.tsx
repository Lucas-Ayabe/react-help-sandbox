import { useState } from "react";
import { Material2Field } from "../molecules";

const Material2FieldTemplate = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flow">
      <div className="card flow" style={{ maxWidth: 400 }}>
        <h2 className="title">Login</h2>
        <hr />
        <Material2Field value={value} onChange={setValue} label="E-mail" />

        <button className="button">Login</button>
      </div>
    </div>
  );
};

export default Material2FieldTemplate;
