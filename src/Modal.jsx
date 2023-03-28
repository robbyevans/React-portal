import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay">
        <div className="modal-wrapper">
          {children}
          <h2>Hello World</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Voluptatibus enim ipsa ea nisi facilis vel aspernatur ad
            libero necessitatibus commodi. Iusto voluptatum deserunt illo
            dolorum!
          </p>
          <button onClick={onClose}>CLOSE MODAL</button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
