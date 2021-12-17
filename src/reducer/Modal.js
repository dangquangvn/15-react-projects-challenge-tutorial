import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [closeModal]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <p>{modalContent}</p>
      <button onClick={() => closeModal()}>X</button>
    </div>
  );
};

export default Modal;
