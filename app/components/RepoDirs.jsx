import Link from 'next/link';
import React from 'react';

const fetchRepoDirs = async (name) => {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    const response = await fetch(
      `https://api.github.com/repos/khanhcoluy/${name}/contents`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoDirs(name);
  console.log(contents);
  const dirs = contents?.filter((content) => content?.type === 'dir');

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
