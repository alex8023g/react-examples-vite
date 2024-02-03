import React from 'react';
import styles from './homepage.css';
import { Pages, pages } from '../../App';
import { Link } from 'react-router-dom';

// console.log(pages); Error Cannot access 'pages' before initialization

export function HomePage() {
  const pagesArr = Object.keys(pages) as Pages[];
  return (
    <>
      <h2>HomePage</h2>
      {pagesArr.map((key) => (
        <li key={pages[key].path}>
          <Link to={pages[key].path}>{pages[key].name}</Link>
        </li>
      ))}
    </>
  );
}
