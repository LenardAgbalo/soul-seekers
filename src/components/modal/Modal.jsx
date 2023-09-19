import "./modal.scss"; // Import your CSS file for styling

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null; // If modal is closed, don't render anything
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-icon" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
