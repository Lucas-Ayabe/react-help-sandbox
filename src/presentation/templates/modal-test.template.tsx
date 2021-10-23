import { useState } from "react";
import { useBoolean } from "../../hooks";
import { CustomImageInput, Modal } from "../organisms";

const TestModalTemplate = () => {
  const [url, setUrl] = useState("http://via.placeholder.com/128x128/000");
  const [image, setImage] = useState<File | null>(null);
  const { value, enable, disable } = useBoolean();
  const saveImage = () => {
    if (image) {
      disable();
      const body = new FormData();
      body.append("perfil", image);

      fetch("http://www.minhaapi.com/upload/image", {
        method: "POST",
        body,
      });
    }
  };

  return (
    <div className="flow">
      <h1>Test Update Image Modal</h1>
      <img
        onClick={enable}
        className="thumbnail-128x128 circle clickable"
        src={url}
        alt=""
      />

      <Modal isOpen={value} onClose={disable}>
        <div className="card flow">
          <CustomImageInput
            id="perfil"
            name="perfil"
            url={url}
            onChange={([file]) => {
              setUrl(URL.createObjectURL(file));
              setImage(file);
            }}
          />

          <div className="line">
            <button onClick={saveImage} className="button">
              Salvar alterações
            </button>
            <button onClick={disable} className="button">
              Discartar alterações
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TestModalTemplate;
