import React from 'react';
import './modal.css';

const Modal = ({ open, children }) => {
  if (!open) return null;
  return (
    <div className="modal-container">
      {children}
    </div>
  )
}

export default Modal;