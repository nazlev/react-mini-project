import React from 'react';
import style from './Photo.module.scss';

const Photo = ({name, images}) => {
  return (
    <div className={style.collection}>
        <div className={style.collection__img}>
        <img className={style.collection__img_item} src={images[0]} alt="Item"/>
        <img className={style.collection__img_item} src={images[1]} alt="Item"/>
        <img className={style.collection__img_item} src={images[2]} alt="Item"/>
        <img className={style.collection__img_item} src={images[3]} alt="Item"/>
        </div>
        <h3 className={style.collection__text}>{name}</h3>
    </div>
  )
}

export default Photo;