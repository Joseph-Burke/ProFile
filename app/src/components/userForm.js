import { useState } from 'react';
import { serverURL } from '../settings';

export default function UserForm (props) {
    const [newUserData, setNewUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        registrationDate: '',
        address: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setNewUserData({ ...newUserData, [name]: value })
    };

    const submitForm = async event => {
        event.preventDefault();
        const usersAPI = new URL(serverURL + '/users');
        const params = newUserData;
        
        Object.keys(params).forEach(key => usersAPI.searchParams.append(key, params[key]));
        
        await fetch(usersAPI, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            console.log(response);
            window.location.reload()
        });
    }

    return (
      <form 
        onChange={handleChange} 
        onSubmit={submitForm}
        class="user-form"        
        >
          <label>
              First Name:
              <input name="firstName" type="text" value={newUserData.firstName}></input>
          </label>
          
          <label>
              Last Name:
              <input name="lastName" type="text" value={newUserData.lastName}></input>
          </label>

          <label>
              Email:
              <input name="email" type="email" value={newUserData.email}></input>
          </label>

          <label>
              Contact Number:
              <input name="contactNumber" type="number" value={newUserData.contactNumber}></input>
          </label>

          <label>
              Date of registration:
              <input name="registrationDate" type="date" value={newUserData.registrationDate}></input>
          </label>

          <label>
              Address:
              <input name="address" type="text" value={newUserData.address}></input>
          </label>

          <button type="submit">Create new user</button>

      </form>
    );
  }