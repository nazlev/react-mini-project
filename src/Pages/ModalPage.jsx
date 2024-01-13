import React from 'react';
import Modal from '../Projects/Modal/Modal';
import { useState } from 'react';


const ModalPage = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="Modal">
      <button onClick={() => setOpen(true)} className="Modal__btn">✨ Open window</button>
      <Modal open={open} setOpen={setOpen}><h3>Modal window</h3></Modal>
    </div>
  )
}

export default ModalPage;