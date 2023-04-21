import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">About Team</Link>
        </li> 
      </ul>
    </>
  );
};

export default HomePage;
