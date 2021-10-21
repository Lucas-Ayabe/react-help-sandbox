import React from "react";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={({ target, currentTarget }) =>
        target === currentTarget ? onClose() : null
      }
      className="modal-backdrop"
    >
      <div className="modal container">{children}</div>
    </div>
  );
};

export default Modal;
