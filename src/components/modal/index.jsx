import React from "react";
import ReactModal from "react-modal";

const Modal = ({
  title,
  onSubmitAction,
  confirmation,
  toggleModal,
  isOpenedModal
}) => {
  return (
    <ReactModal
      isOpen={isOpenedModal}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(43, 43, 43, 0.9)"
        },
        content: {
          position: "absolute",
          top: "25%",
          left: "30%",
          right: "30%",
          bottom: "25%",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          outline: "none",
          padding: "20px"
        }
      }}
      ariaHideApp={false}
    >
      <div className="modal-container">
        <div className="modal-title">{title}</div>
        <div
          className="fa fa-times-circle-o modal-close"
          onClick={() => toggleModal()}
        ></div>
      </div>
      <div className="modal-message">{confirmation}</div>
      <div className="modal-container">
        <button className="modal-button yes" onClick={() => onSubmitAction()}>
          Yes
        </button>
        <button className="modal-button no" onClick={() => toggleModal()}>
          No
        </button>
      </div>
    </ReactModal>
  );
};

export default Modal;
