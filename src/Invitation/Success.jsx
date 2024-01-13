import React from 'react';
import style from './Invitation.module.scss'

export const Success = ({ count, onClickBack }) => {
  return (
    <div className={style.success}>
      <img src="/assets/success.svg" alt="Success" />
      <h3>Successfully!</h3>
      <p>Invitation have been sent to all {count} users.</p>
      <button onClick={onClickBack} className={style.send}>Back</button>
    </div>
  );
};