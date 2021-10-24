import { useEffect, useState } from 'react';
import styles from './CategoryItem.module.css';
import Chuck from '../../images/chuck.png';
import * as norrisAPI from '../../services/norris-api';

export default function CategoryItem({ category, handleClick }) {
  const [active, setActive] = useState(false);

  useEffect(() => {}, []);

  function handleClick(e) {
    setActive(true);
  }

  return (
    <li
      key={category}
      className={active ? styles.ActiveItem : styles.Item}
      onClick={handleClick}
    >
      {category}
    </li>
  );
}
