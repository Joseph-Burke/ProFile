import fetchData from "../helpers/fetchData";
import { useState, useEffect } from 'react';
import ProfileCard from "./profileCard";
import UserForm from "./userForm";
import '../stylesheets/app.scss';

function App () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const dataPromise = fetchData('http://localhost:9000/users');

    dataPromise.then(data => {
      setUsers(data);
    })
  }, []);

  return (
    <>
      <h1>ProFile</h1>
      <div className="grid" >
        { users.map(user => <ProfileCard user={user} key={user.id} />) }
      </div>

      <UserForm />

    </>
  );
}

export default App;
