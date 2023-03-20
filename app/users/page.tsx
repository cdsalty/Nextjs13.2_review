import type { Metadata } from 'next';
import Link from 'next/link';

import getAllUsers from '@/lib/getAllUsers';

export const metadata: Metadata = {
  title: 'Users',
};
// IMPORTANT FEATURE: The data will be pre-fetched and pre-rendered on the server as soon as you hover over the Users link.
export default async function Page() {
  // This is a server component. It will request this data as it builds the website. The only request is during the build.
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  // IMPORTANT, the console log will only show up in the terminal, not in the browser because this is a server component!
  console.log('Hello from users', users);

  const content = (
    <section>
      <h2>
        <Link href="/">Go back to HomePage</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
}

/*

1. 
import type { Metadata } from "next"; 
2. 
export const metadata: Metadata = {
  title: 'Users',
};
3. 
Create the lib folder
create a file called getAllUsers.tsx
4.
Create getAllUsers inside lib folder
5. import function into this page


Pick back up here!
*/
