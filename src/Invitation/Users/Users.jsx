import React from 'react';
import { Skeleton } from './Skeleton';
import { User } from './User';
import style from '../Invitation.module.scss';

export const Users = ({ 
  items, 
  invites, 
  isLoading, 
  searchValue, 
  onChangeValue, 
  onClickInvite,
  onClickSendInvite
}) => {

  const filterItems = items.filter(obj => {
    const fullName = obj.first_name + obj.last_name;
    return fullName.toLowerCase().includes(searchValue.toLowerCase()) || 
           obj.email.toLowerCase().includes(searchValue.toLowerCase());
  })
  return (
    <div className={style.block}>
      <div className={style.search}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input 
          value={searchValue} 
          onChange={onChangeValue} 
          type="text" 
          placeholder="Find users..." 
        />
      </div>
      {isLoading ? (
        <div className={style.skeleton}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className={style.users}>
          {
            filterItems.map(obj => 
              <User 
                isInvited={invites.includes(obj.id)} 
                onClickInvite={onClickInvite}
                key={obj.id} 
                {...obj}
              />
            )
          }
        </ul>
      )}
      {invites.length > 0 &&
         <button onClick={onClickSendInvite} className={style.send}>
            Send an invitation
         </button>
      }
      
    </div>
  );
};
