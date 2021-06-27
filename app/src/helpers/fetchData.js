export default async function fetchData (url) {
  let data = await fetch('http://localhost:9000/users', {mode: 'cors'}).then(response => response.json());
  return data;
}