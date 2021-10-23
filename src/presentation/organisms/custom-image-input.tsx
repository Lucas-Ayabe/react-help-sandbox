import React from "react";

export type CustomImageInputProps = {
  id: string;
  name: string;
  url: string;
  onChange: (files: FileList) => void;
};

const CustomImageInput = ({ url, onChange }: CustomImageInputProps) => {
  return (
    <figure className="custom-image-input">
      <label htmlFor="file">
        <img className="thumbnail-128x128 circle clickable" src={url} alt="" />
      </label>

      <input
        type="file"
        name="file"
        id="file"
        onChange={(event) => onChange(event.target.files as FileList)}
      />
    </figure>
  );
};

export default CustomImageInput;
