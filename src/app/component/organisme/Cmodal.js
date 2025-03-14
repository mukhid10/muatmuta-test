'use client'

import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Cmodal({show, setShow}) {
  return (
    <>
        <Modal
            show={show}
            onHide={()=>setShow(false)}
        >
            <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            I will not close if you click outside me. Do not even try to press
            escape key.
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={()=>setShow(false)}>
                Close
            </Button>
            <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default Cmodal