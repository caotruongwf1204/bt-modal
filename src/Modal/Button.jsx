import React from "react";

const Button = ({ onClick }) => {
  return (
    <button className="modal-btn" onClick={onClick}>
      Launch demo modal
    </button>
  );
};

export default Button;
