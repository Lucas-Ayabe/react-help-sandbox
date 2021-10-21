import { useBoolean } from "../../hooks";
import { Modal } from "../organisms";

const TestModalTemplate = () => {
  const { value, enable, disable } = useBoolean();
  const saveImage = () => {
    // some logic to save the image...
    disable();
  };

  return (
    <div className="flow">
      <h1>Test Update Image Modal</h1>
      <img
        onClick={enable}
        className="circle clickable"
        src="http://via.placeholder.com/128x128"
        alt=""
      />

      <Modal isOpen={value} onClose={disable}>
        <div className="card flow">
          <figure>
            <img
              className="circle clickable"
              src="http://via.placeholder.com/128x128"
              alt=""
            />
          </figure>

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
