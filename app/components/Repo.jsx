import React from 'react';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const fetchRepo = async (name) => {
  const response = await fetch(
    `https://api.github.com/repos/khanhcoluy/${name}`
  );
  const data = await response.json();
  return data;
};

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  return (
    <div>
      <h2>{name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
