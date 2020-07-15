import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ReactModal from "react-modal";

import NavbarMenu from "components/navbar-menu";
import { NavbarContainer } from "./style";

const Navbar = () => {
  const history = useHistory();
  const [isOpenedModal, setOpenedModal] = useState(false);

  const toggleModal = () => {
    setOpenedModal(!isOpenedModal);
  };

  const signOut = () => {
    localStorage.clear();
    history.push("/login");
  };

  const contentList = [
    { name: "fa fa-user", action: () => history.push("/profile") },
    { name: "fa fa-home", action: () => history.push("/") },
    { name: "fa fa-sign-out", action: () => toggleModal() }
  ];
  return (
    <NavbarContainer>
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
          <div className="modal-title">Sign</div>
          <div className="modal-title-sub">Out</div>
          <div
            className="fa fa-times-circle-o modal-close"
            onClick={() => toggleModal()}
          ></div>
        </div>
        <div className="modal-message">Are you sure want to sign out?</div>
        <div className="modal-container">
          <button className="modal-button yes" onClick={() => signOut()}>
            Yes
          </button>
          <button className="modal-button no" onClick={() => toggleModal()}>
            No
          </button>
        </div>
      </ReactModal>
      <div className="nav-container">
        {contentList.map((content, index) => (
          <NavbarMenu name={content.name} action={content.action} key={index} />
        ))}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
