export default async function getAllUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  // check if we have a successful response
  if (!res.ok) throw new Error('Failed to fetch users');

  return res.json();
}

/*
Did not use a try/catch block because the error is handled in the component. 
- we will use error boundaries to handle errors in the future

*/
