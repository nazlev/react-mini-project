import React from 'react';
import style from './Block.module.scss';

const Block = ({values, currency, onChangeCurrency, onChangeInput}) => {

    const defaultCurrencies = ["USD", "EUR", "RUB", "UAH"]
  return (
    <div className={style.block}>
        <ul className={style.currencies}>
            {defaultCurrencies.map(cur =>
                <li 
                    key={cur} 
                    className={currency === cur ? `${style.active}` : ''}
                    onClick={() => onChangeCurrency(cur)}
                >
                    {cur}
                </li>
            )}
            <li>
                <svg height="20px" viewBox="0 0 50 50" width="25px">
                    <rect fill="none" height="50" width="50" />
                    <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
                </svg>
            </li>
        </ul>
        <input 
                type="number"
                onChange={(e) => onChangeInput(e.target.value)}
                placeholder={0}
                value={values} 
            />
    </div>
  )
}

export default Block