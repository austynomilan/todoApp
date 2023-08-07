import { useRef, useState } from 'react';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export default function Modal({
  children,
  className,
  showModal,
  setShowModal,
}) {
  const classes = 'mainModal ' + className;

  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const closeModal2 = () => {
    setShowModal(false);
  };
  return (
    showModal && (
      <div className='modalContainer' ref={modalRef} onClick={closeModal}>
        <div className={classes}>
          {children}
        </div>
      </div>
    )
  );
}
