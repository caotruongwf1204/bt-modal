import React, { useState } from "react";
import Button from "./Button";
import Popup from "./Popup";
import "./Modal.css";

const Modal = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  }

  return (
    <div className="modal">
      <Button onClick={handleButtonClick} />
      {showPopup && <Popup onCloseClick={handleClosePopup}></Popup>}
    </div>
  );
};

export default Modal;
