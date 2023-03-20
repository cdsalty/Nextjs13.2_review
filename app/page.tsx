import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>HomePage</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  );
}

/* 

fetchApi: 
1. Fetch data on the server using Server Components.
2. Fetch data in parallel to minimize waterfalls and reduce loading times.
3. For Layouts and Pages, fetch data where it's used. Next.js will automatically dedupe requests in a tree.
4. Use Loading UI, Streaming and Suspense to progressively render a page and show a result to the user while the rest of the content loads.



*/
