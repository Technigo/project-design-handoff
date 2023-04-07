import React from 'react';

const PopUpModal = () => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
      <h2>Pop-up content goes here</h2>
      <button onClick={() => setModalIsOpen(false)}>Close</button>
    </Modal>
  );
};

export default PopUpModal;