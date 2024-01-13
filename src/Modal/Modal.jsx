import React from 'react';
import style from'./Modal.module.scss'

const Modal = ({open, setOpen, children}) => {
    
  return (
    <div onClick={() => setOpen(false)} className={open ? `${style.overlay} ${style.show}` : `${style.overlay} ${style.animated}`}>
            <div onClick={e => e.stopPropagation()} className={style.modal}>
              <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                  <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
              <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
              {children}
            </div>
    </div>
  )
}

export default Modal