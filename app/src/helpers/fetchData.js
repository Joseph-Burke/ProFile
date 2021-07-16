import { serverURL } from '../settings';

const usersAPI = serverURL + '/users';

export default async function fetchData () {
  let data = await fetch(usersAPI, {mode: 'cors'}).then(response => response.json());
  return data;
}