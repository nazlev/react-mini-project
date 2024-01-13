import React, { useEffect, useState } from 'react';
import { Success } from '../Projects/Invitation/Success';
import { Users } from '../Projects/Invitation/Users/Users';

function InvitationPage() {
  const [items, setItems] = useState([]);
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const onChangeValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickInvite = (id) => {
    if(invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }
 
  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res=> res.json())
      .then((json) => {
        setItems(json.data)
      }).catch(err => {
        console.warn(err);
        alert(Error);
      }).finally(() => setLoading(false))
  }, []);

  return (
    <div className="Invitation">
      {success 
        ? <Success 
            count={invites.length} 
            onClickBack={() => setSuccess(false)}
          />
        : <Users 
            items={items} 
            invites={invites}
            isLoading={isLoading} 
            searchValue={searchValue} 
            onChangeValue={onChangeValue}
            onClickInvite={onClickInvite}
            onClickSendInvite={() => setSuccess(true)}
          />
      }
    </div>
  );
}

export default InvitationPage;
