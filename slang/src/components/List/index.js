import './style.scss';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

function List() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='slang-list'>
        <div class='d-grid gap-2 col-6 mx-auto'>
          <button class='btn btn-primary' type='button' onClick={handleShow}>
            Slang1
          </button>

          <button class='btn btn-primary' type='button' onClick={handleShow}>
            Slang2
          </button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Slang</Modal.Title>
          </Modal.Header>
          <Modal.Body>Slang Meaning</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={handleClose}>
              Check
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default List;
